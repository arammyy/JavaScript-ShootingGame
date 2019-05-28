# JavaScript-ShootingGame
#### ● 주제 : 자바스크립트 슈팅게임 
#### ● 개발기간 : 18.12.12 ~ 18.12.14 (3일)
#### ● 개발환경
> 1) Javascript
> 2) EditPlus
<ul
  <li>구현 UI</li>
</ul>

<table style="text-align:center;">
  <tr>
    <td><b>UI</b></td>
    <td><b>상세 설명</b></td>
  </tr>
    <tr>
    <td>
    <img src="https://postfiles.pstatic.net/MjAxOTA1MTNfNDcg/MDAxNTU3NzEwMTA4NjQx.j8iKFfY02y8khIcoQbSRD5YdoZlcEII022Qk-N-e87Ug.iKd8vgkvII3wYdkYL6-ejrsmqm5_56a5sbDFQiz7wOog.PNG.tag94/%EB%A9%94%EC%9D%B8.png?type=w966" width="250px"/>
    </td>
    <td>▶ Shooting Main Page<br>
      <ul>
        <li>3초 후 게임 페이지로 이동</li>
        <li>settimeout을 이용한 gameloop처리</li>
        <li>클래스 정의시 ECMAScript 2015 이상 지원하는 class 적용</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
    <img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMTc2/MDAxNTU3NzEwMjQ1MDM0.1AsdGyu28_5XmrWYLtfKt3R6nAXBcXXCB39Gqvp8oREg.HMoKzzPWJQrajMpbx3Qwzfy7FW2Ldd6C5bJ29Ma8f9Yg.PNG.tag94/%E3%85%81%E3%84%B4%E3%85%87%E3%84%B9.png?type=w966" width="250px"/>
    </td>
      <td>▶ Shooting Game Page<br>
      <ul>
        <li>settimeout을 이용한 gameloop처리하여 배경이 아래로 이동</li>
        <li>최상위 class 인 gameobject class를 정의하여 모든 하위객체들이<br>
        tick ,render method를 구현하도록 설계</li>
        <li>모든 gameobject의 등장과 소멸을 처리하는 objectmanager class 정의 </li>
        <li>적군의 배치 밑 포지션을 이차원 배열로 처리</li>
        <li>객체간 충돌을 판단하는 CollisionCheck 함수 정의</li>
        <li>주인공 실시간 점수 판별 로직을 적용하여 난이도 조절처리 함수</li>
      </ul>
    </td>
  </tr>
</table>
      
<ul>
  <li>Game Detail</li>
</ul>

<table style="text-align:center;">
  <tr>
    <td><b>Image</b></td>
    <td><b>상세 설명</b></td>
  </tr>
    <tr>
    <td>
    <img src="https://postfiles.pstatic.net/MjAxOTA1MTNfOTkg/MDAxNTU3NzEwNTM3MTMx.Q_BMqCSnHYcrAgtfrvjyL0eWrwlb8H_sZCs-qhmNeHwg.vHRv_ufSV3Ab11Bs_2cUtZcXOX_cDnxaELCIYHxuG_gg.PNG.tag94/hp.png?type=w966" width="250px"/>
    </td>
    <td>
      <ul>
        <li>처음 게임이 시작되면 기본으로 주어지는 5개의 생명</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
    <img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMjg2/MDAxNTU3NzEwNTgyMzE0.9Y-EhixU0cpOmvvErhtcwTewiLTzvoJwDCHlWowYhfsg.XyVVCcKEeK13VYptxbbk659IZUVXa4I04pg1c-Oo9LMg.PNG.tag94/hp2.png?type=w966" width="250px"/>
    </td>
    <td>
      <ul>
        <li>게임 사용자(우주선)이 적군에 닿거나, 적군의 총알에 맞으면<br>생명이 하나씩 줄어듦</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
    <img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMjYx/MDAxNTU3NzEwNTgyMzQy.xyimn8YFEW0FBJyHJ_4Qh8R_d1jVHTCueOuqA2daS5Eg.dzdS2-9scFFv1h1FauLHftkSXqPnqnkTnakAowZmFQ0g.PNG.tag94/monster1.png?type=w966" width="250px"/>
    </td>
    <td>▶ 적군 1<br>
      <ul>
        <li>이차원 배열로 처리한 적군을 행과 열에 맞춰 배치</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
    <img src="https://postfiles.pstatic.net/MjAxOTA1MTNfNjEg/MDAxNTU3NzEwNTgyMzMw.z-H1TgABI28_kk_RZ9sA6yEeZA-inbyL33vN8_a1vH8g.9ydvC072RK3FeZ9WQ0MmWRhKz3OgUDR3E_p65n3Ng7sg.PNG.tag94/Boss.png?type=w966" width="250px"/>
    </td>
    <td>▶ 적군 2<br>
      <ul>
        <li>settimeout을 이용한 gameloop처리하여 생성되는<br>움직이는 적군</li>
        <li>맞추면 일반 적군을 맞췄을 때보다 더 높은 점수를 얻음</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
    <img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMjEx/MDAxNTU3NzEwNTgyNTIx.6lz6CDEq9w3N-L5XDuxT2bbtxNpDA_VlK4DGf-uTYb4g.8w4WFZ_JzKnuuwLUdHtr3XWAnwYvRQbmWImN8U95i6sg.PNG.tag94/ship.png?type=w966" width="250px"/>
    </td>
    <td>▶ 게임 사용자<br>
      <ul>
        <li>javascript의 onkeydown속성을 이용하여<br>사용자가 키보드에 있는 네가지의 화살표에 따라<br>우주선이 이동</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
    <img src="https://postfiles.pstatic.net/MjAxOTA1MjhfMTA1/MDAxNTU5MDM4Nzk4NTY0.II5UB8O5_4xiRW15LmGnF_RaMb4zm5JJ06ZlvF4a0owg.18V2MffzadUJ1v95bC9yy-EcDuUdl2y8QTJhTPxjijwg.PNG.tag94/ball.png?type=w966" width="250px"/>
    </td>
    <td>▶ 적군의 총알<br>
      <ul>
        <li>settimeout을 이용한 gameloop처리하여 생성되는<br>적군의 총알</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
    <img src="https://postfiles.pstatic.net/MjAxOTA1MjhfMjg3/MDAxNTU5MDM4Nzk5MzY4.uXD7WejqxNThR3Gw7UR7AhyCpvT1W1cRKOvx1djgMbEg.8ZFrsDcIfHCBYz6eAUYafxjX1U0F5Hvyn3qO3t-dNSUg.PNG.tag94/bullet.png?type=w966" width="250px"/>
    </td>
    <td>▶ 사용자의 총알<br>
      <ul>
        <li>우주선의 중앙 윗부분에서 생성되는 총알</li>
        <li>아이템을 맞추면 총알이 생성되는 속도가 빨라짐</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
    <img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMTQ1/MDAxNTU3NzEwNTgyMzI1.4pTLdxmn1Erv6UHkEQo1cwN5f81JO_BMpvPtm7LyEH4g.y4Cq6bJg8LE4dJXXwYsCo2ME20N8mT4WMr5ETBw-biog.PNG.tag94/boost.png?type=w966" width="250px"/>
    </td>
    <td>▶ 아이템<br>
      <ul>
        <li>settimeout을 이용한 gameloop처리하여 <br>생성되는 아이템</li>
        <li>사용자의 총알로 아이템을 맞추면<br> 총알이 생성되는 속도가 빨라짐</li>
      </ul>
    </td>
  </tr>
</table>

