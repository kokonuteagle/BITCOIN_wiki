---
title: BIP 학습 트랙
tags:
- bitcoin/books
- bitcoin/development
---

> [!info] 빠른 연결
> 허브: [[09_도서와_자료/index]]
> 함께 보기: [[03_업그레이드와_개발/BIP과거버넌스]] · [[09_도서와_자료/핵심BIP원전목록]]

BIP는 다 읽는다고 해서 좋은 학습이 되는 장르가 아니다. 중요한 것은 **어떤 순서로 읽느냐**다. 초심자가 바로 CTV나 APO 논쟁으로 뛰어들면 대부분 맥락을 놓친다.

## 추천 순서

1. 백서와 구조
   - [[02_프로토콜/백서개관]]
   - [[03_업그레이드와_개발/BIP과거버넌스]]

2. 지갑과 주소
   - BIP32, BIP39, BIP173/350
   - [[03_업그레이드와_개발/지갑표준]]
   - [[02_프로토콜/주소와출력스크립트]]

3. SegWit와 Taproot
   - BIP141/143/144
   - BIP340/341/342
   - [[03_업그레이드와_개발/SegWit]]
   - [[03_업그레이드와_개발/Taproot와Schnorr]]

4. 운영과 프라이버시
   - BIP174(PSBT), BIP324, BIP352
   - [[03_업그레이드와_개발/Descriptors와Miniscript]]
   - [[03_업그레이드와_개발/BIP324와네트워크하드닝]]
   - [[03_업그레이드와_개발/SilentPayments]]

5. 미래 제안
   - BIP118, BIP119, MuSig2(BIP327), aggregate key 관련 문서
   - [[03_업그레이드와_개발/MuSig2와키집계]]
   - [[03_업그레이드와_개발/CTVAPOCAT와미래제안]]

## 학습 원칙

- `status`를 먼저 본다. Final, Draft, Deployed의 차이는 크다.
- 어떤 층위의 문서인지 본다. 합의, 애플리케이션, 지갑 포맷, 네트워크 규약을 섞지 않는다.
- 구현체 문서와 함께 본다. BIP는 추상 규격이고, 구현체는 현실의 해석을 보여 준다.

## 원전

- [bitcoin/bips](https://github.com/bitcoin/bips)
- [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)
- [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)
- [BIP174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki)
- [BIP141/143/144](https://github.com/bitcoin/bips)
- [BIP340/341/342](https://github.com/bitcoin/bips)
- [BIP324](https://github.com/bitcoin/bips/blob/master/bip-0324.mediawiki)
- [BIP327](https://github.com/bitcoin/bips/blob/master/bip-0327.mediawiki)
- [BIP352](https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki)
- [BIP118/119](https://github.com/bitcoin/bips)

## 읽는 기준

BIP를 배우는 가장 나쁜 방법은 최신 논쟁적 제안부터 훑는 것이다. 중요한 것은 먼저 어떤 문서가 지갑 표준인지, 어떤 문서가 합의 계층인지, 어떤 문서가 네트워크 프로토콜인지 구분하는 감각을 갖추는 일이다. 그 감각이 없으면 각 문서의 정치적 무게와 구현 난이도를 읽기 어렵다. 이 트랙은 그 층위 감각을 순서로 번역한 문서다.

또한 BIP는 추상 규격이기 때문에, 구현체 문서와 함께 볼 때 비로소 살아난다. 표준 문구만 읽으면 간결해 보이던 개념이 실제 구현에서는 예외 처리, 하위 호환성, UX 제약으로 얼마나 복잡해지는지 드러난다.

## 연결해서 읽기

이 문서는 [[09_도서와_자료/index]] · [[03_업그레이드와_개발/BIP과거버넌스]] · [[09_도서와_자료/핵심BIP원전목록]]와 함께 읽을 때 입체감이 커진다. [[09_도서와_자료/index]] 문서는 원전과 학습 자료 층위를 보강한다 / [[03_업그레이드와_개발/BIP과거버넌스]] 문서는 변경과 구현의 경로 층위를 보강한다 / [[09_도서와_자료/핵심BIP원전목록]] 문서는 원전과 학습 자료 층위를 보강한다. 한 문서를 읽고 바로 이웃 문서로 건너가는 식으로 그래프를 타면, 같은 개념이 철학·기술·운영·역사 중 어느 층에서 다시 등장하는지 빠르게 감이 잡힌다.

특히 BIP 학습 트랙 같은 문서는 단독 정의보다 연결 속에서 의미가 커진다. 비트코인 지식은 선형 교재보다 네트워크 구조에 가깝기 때문에, 인접 노드 한두 개만 함께 읽어도 오해가 크게 줄어드는 경우가 많다.

## 스스로 점검할 질문

이 문서를 읽고 나면 적어도 세 가지 질문에는 자기 언어로 답해 볼 수 있어야 한다. 이 자료는 전체 학습 여정에서 어느 자리를 맡는가, 이 책이나 문서를 읽은 뒤 어디로 넘어가야 하는가, 어떤 오해를 교정해 주는가. 이 질문에 막히는 부분이 있다면 아직 개념 하나가 덜 붙은 것이므로, 바로 옆 문서와 함께 다시 읽는 편이 좋다.
