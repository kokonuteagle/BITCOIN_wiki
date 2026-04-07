---
title: 결제 인프라와 BTC Map, BTCPay
tags:
- bitcoin/payments
- bitcoin/lightning
---

> [!info] 빠른 연결
> 허브: [[07_프라이버시와_실사용/index]]
> 함께 보기: [[06_라이트닝/라이트닝실사용가이드]] · [[01_통화철학/레이어드머니]]

비트코인이 진짜 돈으로 기능하려면 사람들은 그것을 보관만이 아니라 써 볼 수 있어야 한다. 그 지점에서 BTC Map, BTCPay Server, 라이트닝 POS, 인보이스 도구, 전자상거래 플러그인 같은 결제 인프라가 중요해진다. 이들은 비트코인을 단순 자산 보유에서 실제 경제 활동으로 이어 주는 다리다.

## 공식 문서 기준 핵심 사실

- [[https://docs.btcpayserver.org/|BTCPay Server 공식 문서]]는 BTCPay를 `0% fees`와 `No Third-party`를 내세우는 비트코인 결제 시스템으로 설명한다. 문서 구조도 `User Guide`, `Deployment`, `Developers`, `How to setup POS`, `Wallet Setup`, `Lightning Network` 등으로 나뉘어 있어, 단순 플러그인이 아니라 운영 스택 전체를 다루는 프로젝트임을 보여 준다.
- [[https://docs.btcpayserver.org/Walkthrough/|BTCPay Walkthrough]]는 한 서버 안에서 `store`, `wallets`, `payments`, `apps`, `plugins`를 관리하는 구조를 설명한다. 즉 BTCPay는 결제 버튼 하나가 아니라 상점 운영 백오피스까지 포함하는 상인 도구다.
- [[https://btcmap.org/about-us|BTC Map About]]은 BTC Map을 전 세계 자원봉사 비트코이너와 비트코인 친화 상인이 함께 유지하는 free and open-source 프로젝트로 설명한다.
- 같은 문서는 BTC Map이 OpenStreetMap을 포함한 여러 오픈소스 프로젝트를 사용하고, 다양한 커뮤니티 및 프로젝트와 통합된다고 밝힌다. BTC Map은 회사 데이터베이스라기보다 공개 지도 생태계 위에 올라간 커뮤니티 인프라에 가깝다.

## 운영에서 꼭 구분해야 할 것

- BTC Map은 어디서 쓸 수 있는가를 보여 주는 발견 도구다.
- BTCPay는 어떻게 받을 것인가를 해결하는 결제 인프라다.
- 둘 다 중요하지만 역할이 다르다. 하나는 수요와 현장을 연결하고, 다른 하나는 상인의 결제 흐름을 직접 통제하게 한다.

## 초보 상점 운영자가 먼저 봐야 할 것

- BTCPay를 도입하기 전에 온체인과 라이트닝 중 어떤 결제 비중을 받을지 정한다.
- 가격 표시, 정산 주기, 환전 여부, 회계 방식, 직원 교육을 기술 도입과 함께 설계한다.
- BTC Map 등록은 홍보이기도 하지만, 실제로 비트코인을 받는 운영 능력이 준비된 뒤에 하는 편이 낫다.

## 참고 문헌과 원전

- [[https://docs.btcpayserver.org/|BTCPay Server Documentation]]
- [[https://docs.btcpayserver.org/Walkthrough/|BTCPay Server Walkthrough]]
- [[https://btcmap.org/about-us|BTC Map - About Us]]
- [[https://btcmap.org/|BTC Map]]

## 스스로 점검할 질문

- BTC Map과 BTCPay의 역할 차이를 설명할 수 있는가
- 상점 결제 인프라에서 기술 도입과 운영 절차를 함께 보고 있는가
- self-hosted 결제 인프라가 왜 제3자 의존을 줄이는지 이해하고 있는가
- 지도에 등록되는 것과 실제 상점 운영 준비 완료를 같은 말로 보지 않는가
