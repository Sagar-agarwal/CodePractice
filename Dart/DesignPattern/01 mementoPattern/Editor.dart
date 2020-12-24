class Editor {
  String _content;
  List<String> _history = [];

  Editor(String _content) {
    _history.add(_content);
  }

  void _getHistory() {
    print(_history);
  }

  void setContent(String content) {
    _history.add(content);
    _content = content;
  }

  void getContent() {
    print(_content);
  }

  void undo() {
    _history.removeLast();
    _content = _history[_history.length - 1];
    print("Your current content is $_content");
  }
}
