・入力→二分木のノードを表すTreeNodeのインスタンスroot
・出力→二分木の各ノードの値を、rootからpreorderでノードを走査した順番で配列に格納して返す
・制約
・二分木に含まれるノードの数は0~100個
・-100 <= node.val <= 100
・実装
・preorderなので、root→左の子ノード→右の子ノードの優先順位でDFで走査すればOK
・単純なDFSの実装と同じなので、node.right, node.leftの順にstackへpushして、node.valをresultへpushするのを繰り返せばいい
