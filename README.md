# 바닐라 노드 JS를 이용한 유튜브 클론 코딩 20.06.14

##### 20.06.14

- node.JS는 JS를 브라우저 밖으로 나와서 컴퓨터에서 동작하는 프로그래밍언어로 만든것이다.
- node.js는 메모리에 직접 접근할 수 없다.
- Express는 node.js로 서버를 만들 때 쓸 수 있는 프레임워크이다,
- package.json에 scripts를 추가해 사용 할 수 있다.
- express 설치
- babel은 최신의 JS코드를 브라우저에 옛날 JS로 변환해주는것
- nodemon 설치 저장시 서버를 자동으로 재시작해준다. 개발자에게 필요한 Dependencie -D 옵션을 이용한다.

#### 20.06.17

- middleware는 request와 response 사이에 위치한다.
- 미들웨에의 사용예시로는 유저의 로그인 상태를 확인하거나 블랙리스트로 추가한 ip의 접속을 차단하거나 로그를 남기는등 다양하게 사용할수있다.
- express에서는 app.use(함수명)과 같은 문법으로 사용할 수 있다. (전역적인 방법)
- app.get("/", 미들웨어 함수명, 함수명); 이런식으로 부분적으로 사용하는 방법도 있다.
- 미들웨어로 사용되는 함수에는 next()라는 함수가 있어야 한다. 그래야 다음 로직으로 넘어간다.
- 설치한 미들웨어 종류 morgan, helmet, cookie-parser, body-parser
- morgan : 로그를 위한 미들웨어, helmet : 보안을 위한 미들웨어, cookie-parser : 쿠키를 위한 미들웨어, body-parser : 바디의 정보를 다루기 위한 미들웨어

#### 20.06.18

- 라우터 router express에 포함되어있다.
- 라우터를 export해서 나눠서 사용할 수 있다.
- export const userRouter = express.Router(); : export 문법
- import { userRouter } from "./router"; : import 문법
- app.use("/user", userRouter); : import한 라우터를 사용하는 방법
- 위와 같이 사용하면 /user/ edit, password 같이 import한 라우더가 뒤로 붙는다. 6.18일 날짜에 router소스 참조
- 모든 주소들은 routes.js에 정의 해두었음 이 곳에서 변경하면 모두 적용되도록

#### 20.06.20

- 컨트롤러 어떻게 처리할지 정의하는 부분
- Pug(뷰 엔진) 설치
