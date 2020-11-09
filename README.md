● styled-components 사용

cd react1
$ npm install styled-components
npm start

● themeprovider
https://styled-components.com/docs/api#themeprovider

npm install polished

● styled-components 사용한 할일 리스트 앱 만들기
$ npx create-react-app react2
$ cd react2
$ npm install react-icons styled-components
$ npm start

components Selector
TodoItemBlock 위에 커서가 있을경우 Remove 컴포넌트를 보여주라는 의미로 사용
https://styled-components.com/docs/advanced#referring-to-other-components


-----------------Context--------------------

                  App

    TodoHead    TodoList    TodoCreate
                TodoItem


function Sample(){
    const state = useContext(TodoStateContext);
    const dispatch = useContext(TodoDispatchContext);
    return <div>Sample</div>
}