---
title: Silent Payments와 주소 프라이버시
tags:
- bitcoin/privacy
- bitcoin/wallets
---

> [!info] 빠른 연결
> 허브: [[07_프라이버시와_실사용/index]]
> 함께 보기: [[03_업그레이드와_개발/SilentPayments]] · [[02_프로토콜/주소와출력스크립트]]

주소 재사용은 비트코인 프라이버시를 무너뜨리는 가장 오래되고도 여전히 흔한 실수다. 문제는 사용자가 게으르다는 데만 있지 않다. 공개 기부 페이지, 상점 프로필, 반복 고객 관계처럼 정적 수신 식별자가 필요한 상황이 분명히 존재하기 때문이다. Silent Payments는 바로 이 지점을 건드린다.

## 공식 문서 기준 핵심 사실

- [[https://raw.githubusercontent.com/bitcoin/bips/master/bip-0352.mediawiki|BIP352]]는 Silent Payments를 "정적 결제 주소를 쓰되, 온체인에서 결제들 사이의 링크가 보이지 않고, 온체인 notification도 필요 없는 방식"으로 정의한다.
- 같은 BIP는 `송수신자 상호작용 불필요`, `각 결제가 고유 주소로 귀결`, `온체인 비용 증가 없음`, `외부 관찰자가 특정 Silent Payment 주소와 결제를 연결하기 어려움`을 목표로 든다. 정적 식별자와 주소 재사용 방지 사이의 절충을 정식으로 다룬다.
- 반대급부도 명시한다. 수취 지갑은 결제를 찾기 위해 체인을 스캔해야 하며, 이 요구사항은 풀노드에는 현실적이지만 라이트 클라이언트에는 여전히 도전적이다. BIP352는 light client 지원을 열린 연구 주제로 남긴다.
- BIP352는 CoinJoin 같은 collaborative transaction도 염두에 두지만, collaborative setting에서의 안전성에 대한 formal proof가 없으므로 현재는 권장하지 않는다고 적는다. "CoinJoin과 자동으로 잘 어울린다"는 식의 과장은 피해야 한다.
- 같은 문서는 scanning key와 spending key를 분리하는 구조, label 기능, change label 같은 운영 디테일까지 포함한다. Silent Payments는 단순 주소 포맷이 아니라 지갑 설계 전체와 연결된 프로토콜이다.

## 실무에서 무엇을 기대하고 무엇을 기대하지 말아야 하나

- 기대할 수 있는 것: 공개 프로필, 기부 페이지, 상점 프로필처럼 정적 수신 식별자가 필요한 상황에서 주소 재사용 문제를 줄이는 것
- 기대하면 안 되는 것: KYC 자금 추적, 다중 입력 결합, 네트워크 메타데이터, 지갑 백엔드 누출까지 자동으로 해결되는 것
- 주의할 점: 스캔 비용과 라이트 클라이언트 지원 문제 때문에, "프로토콜이 완성됐다"와 "지갑 생태계가 일상적으로 준비됐다"는 같은 말이 아니다

## 참고 문헌과 원전

- [[https://raw.githubusercontent.com/bitcoin/bips/master/bip-0352.mediawiki|BIP352: Silent Payments]]
- [[https://bitcoin.org/bitcoin.pdf|Satoshi Nakamoto, Bitcoin Whitepaper]]
- [[https://developer.bitcoin.org/devguide/payment_processing.html|Bitcoin Developer Guide - Payment Processing]]

## 스스로 점검할 질문

- Silent Payments가 주소 재사용 문제를 어떻게 줄이는지 설명할 수 있는가
- 이 프로토콜이 요구하는 스캔 비용과 라이트 클라이언트 한계를 이해하고 있는가
- Silent Payments와 일반 주소 프라이버시, KYC 분리, 네트워크 프라이버시를 다른 층으로 구분하고 있는가
- 내가 기대하는 효과가 주소 계층의 효과인지, 전체 프라이버시 효과인지 구분하고 있는가
