---
title: PTLC와 탭루트 채널
tags:
- bitcoin/lightning
- bitcoin/development
---

> [!info] 빠른 연결
> 허브: [[06_라이트닝/index]]
> 함께 보기: [[03_업그레이드와_개발/Taproot와Schnorr]] · [[03_업그레이드와_개발/CTVAPOCAT와미래제안]]

PTLC와 탭루트 채널은 현재 라이트닝의 기본값이라기보다 미래 방향에 가깝다. 둘 다 프라이버시와 표현력을 개선하려는 시도지만, 적용 가능 범위와 표준화 수준은 별도로 봐야 한다.

## 사실

- Taproot는 key path와 script path 표현을 지원한다.
- BIP 340/341/342는 Schnorr, Taproot, Tapscript의 기초다.
- PTLC는 HTLC를 대체하려는 연구 방향으로 자주 거론되지만, HTLC처럼 모두가 동일하게 쓰는 기본 프리미티브는 아니다.

## 해석

탭루트는 채널을 더 “덜 눈에 띄게” 만들 수 있는 발판이고, PTLC는 결제 조건 표현을 더 유연하게 만들 수 있는 발판이다. 하지만 이 둘을 바로 “이미 완성된 업그레이드”로 읽으면 과장이다.

## 입문 팁

- 이 문서는 실사용 시작점이 아니라 고급 설계 읽기용으로 본다.
- 지금 당장 지갑 선택을 바꾸기보다, 채널과 스크립트 표현이 왜 중요한지 이해하는 데 쓰는 편이 낫다.
- 미래 기능은 구현체와 표준의 간극을 항상 확인한다.

## 참고

- [BIP 340](https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki)
- [BIP 341](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki)
- [BIP 342](https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki)
- [BOLT repository](https://github.com/lightning/bolts)
- [[03_업그레이드와_개발/Taproot와Schnorr]]
