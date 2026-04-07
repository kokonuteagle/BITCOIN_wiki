---
title: 네트워크 프라이버시와 Tor
tags:
- bitcoin/privacy
- bitcoin/network
---

> [!info] 빠른 연결
> 허브: [[07_프라이버시와_실사용/index]]
> 함께 보기: [[03_업그레이드와_개발/BIP324와네트워크하드닝]] · [[04_보관과_운영/풀노드운영가이드]]

체인 프라이버시에만 집중하면 절반만 본 것이다. 거래를 처음 퍼뜨린 노드, 사용한 지갑 서버, 고정된 IP, DNS 누출, 특정 시간대의 행동 패턴은 체인 밖에서 사람을 식별하는 중요한 단서가 된다. 그래서 비트코인 프라이버시는 지갑 안의 coin control만이 아니라, 네트워크 계층의 습관과 도구까지 포함해야 한다.

## Tor가 하는 일

Tor는 트래픽의 출발지와 목적지를 바로 읽기 어렵게 만드는 경로 은닉 계층이다. 비트코인에서는 노드 연결, 브로드캐스트, 백엔드 서버 접근, 라이트닝 운영에 모두 영향을 줄 수 있다. 물론 Tor 하나로 완전한 익명을 얻는 것은 아니다. 하지만 메타데이터 누출을 줄이는 데 중요한 기본 레이어다.

## 왜 여전히 조심해야 하나

- Tor를 써도 지갑이 주소를 중앙 서버에 그대로 질의하면 체인 정보가 새어 나간다.
- 시간 패턴, 금액 패턴, 거래소 사용 습관이 노출되면 다른 단서와 결합될 수 있다.
- 편의 때문에 클라우드 지갑 백엔드를 쓰면 네트워크 프라이버시가 쉽게 손상된다.

## 공식 문서 기준 핵심 사실

- [[https://raw.githubusercontent.com/bitcoin/bitcoin/master/doc/tor.md|Bitcoin Core tor.md]]는 `-proxy` 설정만으로도 **모든 outbound 연결의 익명화가 개선되지만**, 그 위에 추가로 점검할 것이 더 있다고 설명한다. Tor는 "켜면 끝"인 기능이 아니다.
- 같은 문서는 DNS 프록시가 `-proxy=addr:port` 경로에서만 잡히며, DNS 프록시가 따로 설정되지 않으면 운영체제 기본 함수로 조회가 나가 ISP 쪽 clearnet DNS에 남을 수 있다고 적는다. 즉 `-onion`만 따로 잡는다고 DNS 누출까지 막히는 것은 아니다.
- `-onlynet=onion`은 자동 outbound 연결을 `.onion` 주소로만 제한한다. 반면 inbound와 수동 연결은 이 옵션의 영향을 그대로 받지 않으므로, 전체 경로를 읽을 때는 listening과 manual peer 설정도 함께 봐야 한다.
- Bitcoin Core는 Tor control socket 인증이 준비되어 있고 `-listen` 상태라면 자동으로 ephemeral onion service를 만들 수 있다. 이 기능은 `-listenonion=0`으로 끌 수 있고, `-debug=tor`로 로그를 더 자세히 볼 수 있다.
- [[https://raw.githubusercontent.com/bitcoin/bips/master/bip-0157.mediawiki|BIP157]]은 light client privacy를 개선하기 위해, 한 피어에게 자신의 관심 대상 전체를 노출하는 BIP37 방식 대신 풀노드가 만든 deterministic filter를 내려받는 방식을 제안한다. 네트워크 프라이버시는 Tor만이 아니라 지갑 동기화 프로토콜 선택과도 연결된다.

## 운영에서 중요한 체크포인트

- Tor를 켰더라도 지갑이 중앙 서버에 주소를 직접 질의하면 프라이버시 모델은 크게 약해진다. 노드 연결과 지갑 백엔드 모델을 같이 봐야 한다.
- Core를 쓴다면 `-debug=tor`, `getnetworkinfo`, `-netinfo` 같은 도구로 실제 onion 주소와 연결 상태를 확인하는 습관이 필요하다.
- clearnet 피어와 onion 피어를 섞어 쓰는 경우, "나는 Tor를 쓴다"는 사실만으로 동일한 프라이버시 수준이 보장되지는 않는다. 어느 연결이 자동이고 어느 연결이 수동인지 구분해야 한다.
- 입문자는 모바일 경량지갑, 데스크톱 라이트지갑, 풀노드 지갑의 네트워크 가정이 모두 다르다는 점부터 이해해야 한다. Tor는 메타데이터 누출을 줄여 주지만, 잘못된 백엔드 구조를 마법처럼 고쳐 주지 않는다.

## 참고 문헌과 원전

- [[https://raw.githubusercontent.com/bitcoin/bitcoin/master/doc/tor.md|Bitcoin Core - tor.md]]
- [[https://raw.githubusercontent.com/bitcoin/bips/master/bip-0157.mediawiki|BIP157: Client Side Block Filtering]]
- [[https://raw.githubusercontent.com/bitcoin/bips/master/bip-0037.mediawiki|BIP37: Connection Bloom filtering]]
- [[https://developer.bitcoin.org/devguide/operating-modes.html|Bitcoin Developer Guide - Operating Modes]]

## 스스로 점검할 질문

- 내가 쓰는 지갑은 Tor를 어디까지 적용하고, 어떤 서버에는 여전히 정보를 보내는가
- DNS 조회가 Tor 경로 밖으로 나가지 않도록 실제 설정을 점검했는가
- `-onlynet=onion`, `-listen`, `-listenonion`, 수동 피어 설정의 차이를 설명할 수 있는가
- 네트워크 프라이버시 도구와 체인 위 coin control이 서로 다른 층의 방어라는 점을 이해하고 있는가
