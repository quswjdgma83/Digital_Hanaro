/*
    재귀호출: 함수 자신이 자신을 호출하는 것을 말한다. 내가 나를 호출하기 때문에 재귀호출
    시스템 내의 스택을 활용해서 함수가 호출된다. 잘못하면 무한 재귀호출이 돼서 스택이 부족한 상황이 벌어진다.
    특히나 자바 같은 경우에 재귀호출 알고리즘은 속도가 엄청 느리고 메모리 fault방생
    프로그램은 재귀구조를 사용했을 때 더 쉽게 작성할 수 있는 알고리즘이 있다.
        ex) 트리구조 순회) 트리의 노드를 하나도 빼놓지말고 순회하자

        A
      B   C
    D  E F  G
    left = edge, 트리와 트리사이의 다리
    right
    D    = Node, 방문할 데이터
    inOrder = LDR => DBEAFCG
    preOrder = DLR => ABDECFG
    postOrder = LRD => DEBFGCA
*/
