---
title: 채굴과 인프라
tags:
- bitcoin/mining
---

> [!info] 빠른 연결
> 허브: [[index]]

채굴은 새 코인을 “만드는” 절차이면서 동시에 블록 순서를 정하고 체인 재구성 비용을 높이는 보안 절차다. 이 폴더는 채굴을 투자 서사보다 합의, 운영, 전력, 장비, 수익 구조가 만나는 인프라로 다룬다.

## 문서 지도

| 문서 | 초점 |
|---|---|
| [[05_채굴과_인프라/채굴과난이도조정]] | 작업증명, 누적 작업, 난이도 조정 |
| [[05_채굴과_인프라/반감기와발행정책]] | 발행 스케줄, 반감기, 보조금 감소 |
| [[05_채굴과_인프라/해시가격과채굴경제학]] | 해시가격, 수익성, 보안 예산 |
| [[05_채굴과_인프라/채굴풀과에너지논쟁]] | 풀 구조, 검열 위험, 에너지 쟁점 |
| [[05_채굴과_인프라/스트라텀과풀중앙화]] | Stratum v1/v2, 템플릿 권한 |
| [[05_채굴과_인프라/그리드와수요반응]] | 그리드 유연성, 수요 반응, 해석 범위 |
| [[05_채굴과_인프라/홈마이닝과ASIC]] | ASIC, 홈 마이닝, 학습용 실천 |

## 먼저 구분할 것

### 사실
- 채굴 소프트웨어는 블록 템플릿을 만들고, ASIC은 nonce를 반복 탐색한다.
- 난이도는 고정 주기마다 조정된다.
- 보조금은 시간이 지날수록 줄어든다.
- 풀은 `getblocktemplate`이나 Stratum 계열 프로토콜로 작업을 배분한다.

### 해석
- 채굴은 전기와 하드웨어를 써서 원장 재작성 비용을 높이는 산업이다.
- 풀 중앙화, ASIC 공급망, 전력 가격, 규제는 채굴 보안의 외부 변수다.
- 에너지 논쟁은 Bitcoin 프로토콜만으로 끝나지 않고 전력시장 해석까지 필요하다.

## 입문자 읽기 순서

1. [[05_채굴과_인프라/채굴과난이도조정]]으로 합의의 뼈대를 잡는다.
2. [[05_채굴과_인프라/반감기와발행정책]]으로 발행과 보상 구조를 본다.
3. [[05_채굴과_인프라/채굴풀과에너지논쟁]]과 [[05_채굴과_인프라/스트라텀과풀중앙화]]로 운영과 중앙화를 본다.
4. [[05_채굴과_인프라/해시가격과채굴경제학]]과 [[05_채굴과_인프라/홈마이닝과ASIC]]으로 수익성과 참여 방식을 본다.

## 참고 원전

- [Bitcoin white paper](https://bitcoin.org/en/bitcoin-paper.html)
- [Bitcoin Developer Guide - Mining](https://developer.bitcoin.org/devguide/mining.html)
- [Bitcoin Developer Guide - Block chain](https://developer.bitcoin.org/devguide/block_chain.html)
- [Bitcoin Core getblocktemplate](https://bitcoincore.org/en/doc/29.0.0/rpc/mining/getblocktemplate/)
- [Bitcoin Core getmininginfo](https://bitcoincore.org/en/doc/29.0.0/rpc/mining/getmininginfo/)
- [Bitcoin.org - Support Bitcoin](https://bitcoin.org/en/support-bitcoin)
- [Stratum V2 specification](https://stratumprotocol.org/specification/)
