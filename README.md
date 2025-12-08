# ToDoList

React 를 이용해 투두리스트의 항목을 생성하며, 항목별 뷰페이지에서 수정할 수 있는 기능을 포함한 프로젝트입니다.

## 주요기능

### 1. Todo 생성

- 메인페이지에서 Editor 컴포넌트를 사용해 Todo를 입력하고 추가할 수 있습니다.

### 2. Todo 목록표시

- List > TodoItem 컴포넌트 구조를 통해 입력된 리스트가 추가됩니다.
- 각 항목에는 완료표시, 수정페이지 이동, 삭제 기능이 들어갑니다.

### 3. 상세페이지(수정페이지)

- 각 항목의 "수정" 버튼을 클릭하면 /view/:id 페이지로 이동합니다.
- 뷰페이지 항목의 Todo를 수정할 수 있습니다.
- 수정된 항목은 메인페이지에 적용됩니다.

## 폴더구조

```
src/
 ├── index.css
 ├── main.tsx
 ├── App.css
 ├── App.tsx                # 전체 todos 상태 관리
 │
 ├── context/
 │     └── TodosContext.tsx # Todo Context 파일
 │
 ├── hooks/
 │     └── useTodos.ts      # Todo 기능
 │
 ├── services/
 │     └── todoStorage.ts   # localStorage 저장/로드
 │
 ├── router/
 │     ├── routes.tsx       # 라우트 관리
 │     └── RouterView.tsx
 │
 ├── pages/
 │     ├── Home.tsx         # 메인 Todo 페이지
 │     └── View.tsx         # /view/:id 라우트 페이지
 │
 ├── components/
 │     ├── Header.tsx
 │     ├── Header.css
 │     ├── Editor.tsx
 │     ├── Editor.css
 │     ├── List.tsx
 │     ├── List.css
 │     ├── TodoItem.tsx
 │     ├── TodoItem.css
 │     ├── TodoView.tsx
 │     ├── constants.tsx    # 공통 상수 저장 (예: ENTER_KEY)
 │
 └──

```

## 실행방법

```
npm run dev
```
