class Card {
  String suit, rank;

  Card({this.suit, this.rank});

  @override
  String toString() {
    return '$rank of $suit';
  }
}
