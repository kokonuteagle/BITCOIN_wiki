---
title: CoinJoin, PayJoin, 정책 리스크
tags:
- bitcoin/privacy
- bitcoin/politics
---

> [!info] 빠른 연결
> 허브: [[07_프라이버시와_실사용/index]]
> 함께 보기: [[07_프라이버시와_실사용/프라이버시모델]] · [[07_프라이버시와_실사용/KYC와주소재사용과코인컨트롤]]

비트코인 프라이버시 도구는 기술적 효용과 정책 리스크가 함께 움직인다. CoinJoin은 여러 사용자의 거래를 결합해 입력과 출력의 연결 가능성을 흐리게 만들고, PayJoin은 수취인도 입력을 제공해 일반 거래처럼 보이면서 추론을 어렵게 만든다. 두 기술 모두 체인 분석의 확실성을 낮춘다는 점에서 중요하지만, 서비스 제공자와 규제기관, 분석 회사 사이의 긴장도 함께 커진다.

## 공식 문서 기준 핵심 사실

- [[https://raw.githubusercontent.com/bitcoin/bips/master/bip-0078.mediawiki|BIP78]]은 PayJoin을 "지불 과정에서 두 당사자가 coinjoin 거래를 협상하는 프로토콜"로 정의한다. 즉 PayJoin은 CoinJoin 계열이지만, 특히 결제 상황에 맞춘 표준 초안이다.
- 같은 BIP는 보통의 단순 결제 모델이 세 가지 휴리스틱을 낳는다고 적는다. `common-input ownership`, `change-scriptpubkey`, `change-round-amount`가 그것이다. PayJoin은 수취인이 입력을 추가함으로써 이 휴리스틱들을 무효화하거나 오염시킬 수 있다고 설명한다.
- BIP78은 수취인이 자신의 UTXO를 정리하거나 자체 결제를 배치할 기회를 얻고, 송신자는 프라이버시 누출을 줄일 수 있다고 본다. PayJoin은 단순 지불이 아니라 결제와 UTXO 관리가 함께 일어나는 협상 프로토콜이다.
- 반면 CoinJoin 전체는 하나의 단일 표준이 아니다. 이는 이 문서의 해석이다. 생태계에는 서로 다른 코디네이션 방식과 구현이 있고, 동일한 "혼합"이라는 말 아래에서도 보장 수준과 운영 가정이 다르다.

## 정책 리스크는 기술 바깥에서 생긴다

이 부분은 **운영적 해석**이다. BIP78은 PayJoin을 불법적이거나 특수 취급해야 할 대상으로 정의하지 않는다. 그러나 실제 서비스 사업자나 분석 시스템은 특정 거래 패턴을 자체 규칙으로 분류할 수 있다. 따라서 사용자는 다음을 분리해서 생각해야 한다.

- 프로토콜 차원에서 가능한가
- 지갑과 상대방 인프라가 지원하는가
- 내가 속한 법적 환경과 서비스 정책에서 어떤 마찰이 예상되는가

프라이버시 도구의 기술적 정당성과 운영 환경의 마찰은 같은 문제가 아니다.

## 초보자용 최소 판단 기준

- "CoinJoin"이라는 이름만 보고 동일한 프라이버시 보장을 기대하지 않는다.
- PayJoin은 수취인 협력이 필요하므로, 상대방 지갑과 상점 인프라가 실제로 지원하는지 먼저 본다.
- 프라이버시 도구를 쓰기 전후의 UTXO 관리가 중요하다. 이후 사용 습관이 나쁘면 익명 집합 효과가 크게 줄어든다.
- 거래소, 수탁사, 세무 환경과의 마찰 가능성은 기술 문서가 아니라 서비스 정책의 영역이라는 점을 이해한다.

## 참고 문헌과 원전

- [[https://raw.githubusercontent.com/bitcoin/bips/master/bip-0078.mediawiki|BIP78: A Simple Payjoin Proposal]]
- [[https://raw.githubusercontent.com/bitcoin/bips/master/bip-0079.mediawiki|BIP79: Bustapay]]
- [[https://bitcoin.org/bitcoin.pdf|Satoshi Nakamoto, Bitcoin Whitepaper]]

## 스스로 점검할 질문

- PayJoin이 어떤 휴리스틱을 약화시키는지 설명할 수 있는가
- 내가 말하는 CoinJoin이 어떤 구현과 어떤 운영 가정을 뜻하는지 구분하고 있는가
- 기술적 프라이버시 이점과 서비스 정책 리스크를 별개의 층으로 보고 있는가
- 도구 사용 후 UTXO를 어떻게 관리할지까지 계획하고 있는가
