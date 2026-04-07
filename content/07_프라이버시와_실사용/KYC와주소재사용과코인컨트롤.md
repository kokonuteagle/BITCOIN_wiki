---
title: KYC, 주소 재사용, Coin Control
tags:
- bitcoin/privacy
- bitcoin/wallets
---

> [!info] 빠른 연결
> 허브: [[07_프라이버시와_실사용/index]]
> 함께 보기: [[02_프로토콜/UTXO]] · [[04_보관과_운영/개인지갑사용가이드]]

프라이버시를 파괴하는 가장 강력한 도구는 고급 체인 분석 기술이 아니라 사용자의 일상적 습관이다. KYC 거래소에서 출금한 코인이 내 신원과 연결되고, 같은 주소를 반복 사용하면 외부인이 거래 패턴을 쉽게 읽을 수 있으며, 서로 다른 출처의 UTXO를 무심코 합쳐 쓰면 내 재산 구조가 공개된다. 이 세 가지는 비트코인 프라이버시 붕괴의 주범이다.

coin control은 이런 문제를 줄이는 핵심 기능이다. 어떤 UTXO가 어느 출처에서 왔는지, 무엇과 섞이면 안 되는지, 언제 합쳐도 되는지 스스로 판단할 수 있게 해 준다. 고급 기능처럼 보이지만, 실은 가명성을 지키는 기본 문해력이다.

## 주소 재사용 금지

한 번 받은 주소를 다시 사용하면 같은 주체가 그 주소를 통제한다는 아주 강한 신호를 준다. 초심자는 계좌번호처럼 생각해 주소를 반복 사용하기 쉽지만, 비트코인 주소는 일회용 영수증 번호에 가깝다. 지갑이 새 주소를 제시한다면, 특별한 이유가 없는 한 매번 새 주소를 쓰는 것이 맞다.

## KYC 이후의 습관

현실적으로 많은 사용자가 KYC 거래소를 거친다. 이 경우 중요한 것은 출금 이후의 분리 습관이다. 장기보관, 소비, 라이트닝 충전, 실험용 자금을 같은 UTXO 집합으로 섞지 말아야 한다. 거래소 출금분은 이미 강한 신원 정보를 달고 있으므로, 그 이후의 체인 행동이 추가 정보를 얼마나 새는지 더 민감하게 살펴야 한다.

## coin control은 회계이기도 하다

coin control은 프라이버시뿐 아니라 회계와 세무 추적에도 유용하다. 출처별 UTXO를 분리하면 손익 추적과 기록 보관이 쉬워진다. 즉, coin control은 비밀주의가 아니라 질서정연한 자산 관리의 일부다.

## 공식 문서 기준 핵심 사실

- [[https://bitcoin.org/bitcoin.pdf|비트코인 백서]] 10장은 새 거래마다 새 키 쌍을 쓰는 것이 추가 방화벽이라고 설명하고, 여러 입력을 한 트랜잭션에 함께 넣으면 그 입력들이 같은 소유자라는 점이 드러난다고 적는다. Coin Control의 필요성은 이미 백서의 privacy 모델 안에 들어 있다.
- [[https://developer.bitcoin.org/devguide/wallets.html|Developer Guide - Wallets]]는 distributing-only wallet이 같은 공개키나 주소를 반복해서 나눠 주지 않도록 관리해야 한다고 설명한다. 주소 재사용 금지는 사용성 팁이 아니라 설계 요구사항에 가깝다.
- [[https://developer.bitcoin.org/reference/rpc/sendtoaddress.html|sendtoaddress RPC 문서]]의 `avoid_reuse` 옵션은 지갑에 `avoid_reuse` 플래그가 켜져 있을 때, 이미 사용된 주소를 dirty로 보고 그 주소에서의 지출을 피하려고 시도한다. Bitcoin Core도 "재사용된 주소는 프라이버시가 약하다"는 가정을 기본에 두고 있는 셈이다.

## KYC와 coin control을 같이 봐야 하는 이유

이 부분은 프로토콜 규칙 자체가 아니라 **운영적 해석**이다. 비트코인 프로토콜은 KYC를 알지 못하지만, KYC 거래소는 출금 주소와 실명 계정을 오프체인에서 이미 연결해 둔다. 그 상태에서 사용자가:

- 거래소 출금 UTXO를 장기 보관 UTXO와 합치거나
- 거래소 출금 직후 생활 결제와 라이트닝 충전에 바로 쓰거나
- 여러 출처의 UTXO를 한 번에 합쳐 spend하면

백서가 설명한 multi-input linkage가 곧바로 실명 신호와 결합될 수 있다. 그래서 Coin Control은 "프라이버시 고급 기능"이라기보다 KYC 현실에서 기본 분리 장치에 가깝다.

## 초보자용 최소 운영 원칙

- 거래소 출금분은 처음부터 장기 보관, 생활 자금, 라이트닝 충전 자금으로 분리해 받는다.
- 이미 공개된 주소나 예전에 사용한 주소를 다시 입금 주소로 쓰지 않는다.
- 지갑이 coin selection이나 label 기능을 제공한다면, 출처별 태그를 붙여서 섞지 말아야 할 UTXO를 눈에 보이게 관리한다.
- "수수료 아끼려고 여러 UTXO를 한 번에 합친다"는 결정은 프라이버시 비용도 함께 내는 결정이라는 점을 기억한다.
- Coin Control을 지원하지 않는 지갑을 쓴다면, 적어도 지갑을 용도별로 나눠 장기 보관과 소비를 분리한다.

## 참고 문헌과 원전

- [[https://bitcoin.org/bitcoin.pdf|Satoshi Nakamoto, Bitcoin Whitepaper]]
- [[https://developer.bitcoin.org/devguide/wallets.html|Bitcoin Developer Guide - Wallets]]
- [[https://developer.bitcoin.org/reference/rpc/sendtoaddress.html|Bitcoin RPC Reference - sendtoaddress]]
- [[https://developer.bitcoin.org/devguide/transactions.html|Bitcoin Developer Guide - Transactions]]

## 스스로 점검할 질문

- 내가 가진 UTXO 중 어떤 것은 거래소 출금 이력이 있고 어떤 것은 그렇지 않은지 구분하고 있는가
- 같은 주소를 다시 쓰지 않도록 지갑과 운영 습관을 설계했는가
- 여러 입력을 합치는 순간 어떤 링크가 공개되는지 설명할 수 있는가
- Coin Control이 없는 지갑을 쓰더라도 용도별 분리를 다른 방식으로 구현하고 있는가
