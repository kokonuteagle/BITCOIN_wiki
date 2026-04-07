---
title: BOLT12, AMP, 스플라이싱
tags:
- bitcoin/lightning
- bitcoin/development
---

> [!info] 빠른 연결
> 허브: [[06_라이트닝/index]]
> 함께 보기: [[06_라이트닝/유동성관리와수익모델]] · [[06_라이트닝/라이트닝구현체비교]] · [[03_업그레이드와_개발/CTVAPOCAT와미래제안]]

이 셋은 비슷해 보이지만 층위가 다르다. BOLT12는 offer/invoice encoding, AMP는 LND의 atomic multi-path payment 기능, 스플라이싱은 채널 용량 조정 방식이다.

## BOLT12

BOLT12는 `lightning/bolts`의 offer encoding 문서에 들어 있는 in-progress 표준 작업이다. BOLT11과 달리 offer 중심 흐름을 다루며, 반복 결제와 더 유연한 수신 UX를 목표로 한다.

## AMP

AMP는 LND가 문서화한 기능이다. LND 공식 문서는 이를 atomic multi-path payments로 설명하며, sender/receiver가 이해하는 구현체 기능으로 다룬다. 즉 네트워크 전체의 완성된 공통 표준이라기보다 구현체 수준의 기능이다.

## 스플라이싱

Core Lightning 문서에서는 splicing 관련 RPC를 `experimental-splicing only`로 표시한다. 채널을 닫지 않고 용량을 조정하려는 시도이지만, 구현과 운영의 성숙도는 아직 주의해서 봐야 한다.

## 입문자가 구분할 것

1. BOLT12는 인보이스 UX다.
2. AMP는 다중경로 결제 방식이다.
3. 스플라이싱은 채널 자본 조정 방식이다.

## 해석

셋의 공통점은 라이트닝의 운영 마찰을 줄이는 데 있다. 하지만 표준화 수준이 같지 않으므로 “이름이 비슷하니 같은 급”으로 보면 안 된다.

## 참고

- [BOLT 11](https://github.com/lightning/bolts/blob/master/11-payment-encoding.md)
- [BOLT 12](https://github.com/lightning/bolts/blob/master/12-offer-encoding.md)
- [LND: Atomic Multi-path Payments (AMP)](https://docs.lightning.engineering/lightning-network-tools/lnd/amp)
- [Core Lightning: splice_init](https://docs.corelightning.org/reference/splice_init)
- [Core Lightning: splice_update](https://docs.corelightning.org/reference/splice_update)
