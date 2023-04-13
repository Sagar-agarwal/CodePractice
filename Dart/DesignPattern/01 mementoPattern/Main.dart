import 'Editor.dart';

void main() {
  Editor editor = Editor('a');

  editor.setContent('b');
  editor.setContent('c');
  editor.setContent('d');
  editor.setContent('e');
  editor.setContent('f');
  editor.undo();
  editor.undo();
  editor.undo();
  editor.undo();
}
