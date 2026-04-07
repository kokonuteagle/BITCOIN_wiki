---
title: 핵심 BIP 원전 목록
tags:
- bitcoin/resources
- bitcoin/development
---

> [!info] 빠른 연결
> 허브: [[09_도서와_자료/index]]
> 함께 보기: [[03_업그레이드와_개발/BIP과거버넌스]] · [[09_도서와_자료/BIP학습트랙]] · [[03_업그레이드와_개발/소프트포크활성화와UASF]]

백서 이후의 비트코인은 BIP의 역사라고 해도 과장이 아니다. BIP는 단순한 개발 메모가 아니라, 문제 정의와 해결 범위, 활성화 방식, 호환성 경계, 구현의 정치학이 함께 압축된 문서 묶음이다. 따라서 BIP를 읽는다는 것은 코드를 다 이해한다는 뜻이 아니라, **무엇이 합의이고 무엇이 정책이며 무엇이 제안 단계에 머무는가**를 구분하는 훈련을 한다는 뜻이다.

초심자가 모든 BIP를 처음부터 끝까지 읽을 필요는 없다. 대신 핵심 축을 먼저 잡는 편이 낫다. 첫째는 지갑과 키 관리 축, 둘째는 SegWit과 Taproot 축, 셋째는 전송 계층과 네트워크 하드닝 축, 넷째는 아직 논쟁 중인 미래 제안 축이다. 이 네 축만 잡아도 비트코인 개발 대화의 상당 부분이 들리기 시작한다.

## 왜 원전을 직접 읽어야 하는가

2차 설명은 이해를 빠르게 도와주지만, 때로는 설계 선택의 경계선을 흐리게 만든다. 원전은 건조하다. 대신 애매함을 덜어 준다. 어떤 문제를 풀려 했는지, 무엇을 해결하지 않겠다고 선을 그었는지, 기존 시스템과 어떻게 호환하려는지 같은 핵심이 또렷하다. 비트코인에서는 이 경계선이 특히 중요하다. 기능이 좋아 보인다고 바로 받아들이지 않는 보수성은 대개 이런 문서적 맥락 위에서 형성된다.

## 가장 먼저 잡을 축

| 범주 | BIP | 왜 중요한가 | 위키 연결 |
|---|---|---|---|
| 지갑 표준 | BIP32 | HD 지갑의 계층형 키 파생 구조를 연다 | [[03_업그레이드와_개발/지갑표준]] |
| 지갑 표준 | BIP39 | 니모닉 문구의 인간 친화적 백업 계층을 다룬다 | [[03_업그레이드와_개발/지갑표준]] |
| 지갑 표준 | BIP84, BIP86 | 현대 지갑의 주소 타입과 기본 파생 경로 감각을 준다 | [[02_프로토콜/주소와출력스크립트]] |
| 트랜잭션 구조 | BIP174 | PSBT를 통해 서명 분리와 협업 서명 실무를 이해하게 한다 | [[04_보관과_운영/멀티시그설계패턴]] |
| SegWit | BIP141/143/144 | 가중치, 증인 분리, 서명 해시 변경을 통해 현대 비트코인 구조를 바꿨다 | [[03_업그레이드와_개발/SegWit]] |
| Taproot | BIP340/341/342 | Schnorr, Taproot, Tapscript의 핵심 축이다 | [[03_업그레이드와_개발/Taproot와Schnorr]] |
| 네트워크 | BIP324 | 전송 계층 암호화와 네트워크 하드닝의 방향을 보여 준다 | [[03_업그레이드와_개발/BIP324와네트워크하드닝]] |
| 미래 제안 | BIP118 | ANYPREVOUT 계열 논의의 기준점이다 | [[03_업그레이드와_개발/CTVAPOCAT와미래제안]] |
| 미래 제안 | BIP119 | CTV 논쟁의 핵심 기준점이다 | [[03_업그레이드와_개발/CTVAPOCAT와미래제안]] |
| 프라이버시 | Silent Payments 계열 제안 | 주소 재사용을 줄이는 현대 프라이버시 논의와 이어진다 | [[03_업그레이드와_개발/SilentPayments]] |

## 원전 기준

이 목록은 비트코인에 실제로 영향을 준 표준과 제안을 우선적으로 추린다. 상태가 Final이든 Draft든 Deployed든, 원전의 역할은 다르다. 따라서 문서를 읽을 때는 기능 설명보다 `무엇이 합의고, 무엇이 제안이고, 무엇이 구현체 해석인지`를 먼저 구분하는 편이 좋다.

- [bitcoin/bips](https://github.com/bitcoin/bips)
- [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)
- [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)
- [BIP174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki)
- [BIP141](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki)
- [BIP143](https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki)
- [BIP144](https://github.com/bitcoin/bips/blob/master/bip-0144.mediawiki)
- [BIP340](https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki)
- [BIP341](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki)
- [BIP342](https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki)
- [BIP324](https://github.com/bitcoin/bips/blob/master/bip-0324.mediawiki)
- [BIP327](https://github.com/bitcoin/bips/blob/master/bip-0327.mediawiki)
- [BIP352](https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki)
- [BIP118](https://github.com/bitcoin/bips/blob/master/bip-0118.mediawiki)
- [BIP119](https://github.com/bitcoin/bips/blob/master/bip-0119.mediawiki)

## 읽는 요령

BIP를 읽는 목적은 모든 조항을 외우는 것이 아니다. 지갑, 트랜잭션, 네트워크, 프라이버시, 미래 제안이 각각 어떤 층위인지 확인하고, 위키의 실무 문서와 연결하는 것이 핵심이다. 예를 들어 PSBT는 멀티시그와 서명 분리로, BIP324는 네트워크 하드닝으로, BIP340~342는 탭루트 이후의 표현과 서명 구조로 이어진다.

## 이 위키에서의 활용법

가장 좋은 방법은 문서 세 장을 왕복하는 것이다. 먼저 위키의 개론 문서를 읽고, 이어서 원전을 읽고, 마지막으로 역사 논쟁 문서로 돌아온다. 예를 들어 SegWit는 [[03_업그레이드와_개발/SegWit]] -> BIP141/143/144 -> [[08_역사와_논쟁/블록사이즈워]] 순서가 효과적이고, Taproot는 [[03_업그레이드와_개발/Taproot와Schnorr]] -> BIP340/341/342 -> [[06_라이트닝/PTLC와탭루트채널]] 순서가 좋다.

## 스스로 점검할 질문

이 문서를 읽고 나면 적어도 세 가지 질문에는 자기 언어로 답해 볼 수 있어야 한다. 이 자료는 전체 학습 여정에서 어느 자리를 맡는가, 이 책이나 문서를 읽은 뒤 어디로 넘어가야 하는가, 어떤 오해를 교정해 주는가.
