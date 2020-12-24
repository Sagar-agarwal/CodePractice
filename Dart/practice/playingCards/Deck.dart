import 'dart:math' as Math;
import 'Cards.dart';

class Deck {
  List<String> _suits = ['Diamonds', 'Clubs', 'Spades', 'Hearts'];
  List<String> _rank = [
    'Ace',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Jack',
    'Queen',
    'King'
  ];

  List<Card> cards = [];

  Deck() {
    for (String _suit in _suits) {
      for (String _rank in _rank) {
        Card card = Card(suit: _suit, rank: _rank);
        cards.add(card);
      }
    }
  }

  Deck.shuffledDeck() {
    for (String _suit in _suits) {
      for (String _rank in _rank) {
        Card card = Card(suit: _suit, rank: _rank);
        cards.add(card);
      }
    }

    this.shuffleCards();
  }

  void printAllCards() {
    String allCards = '';
    cards.forEach((ele) {
      allCards += "$ele \n";
    });
    print(allCards);
  }

  void shuffleCards() {
    int randomNum = Math.Random().nextInt(cards.length);
    // print(randomNum);
    for (int i = 0; i < randomNum; i++) {
      cards.shuffle();
    }
  }

  cardsWithSuit(String suit) {
    return cards.where((ele) => ele.suit == suit);
  }

  List deal(int handSize) {
    List hand = cards.sublist(0, handSize);
    cards = cards.sublist(handSize);

    return hand;
  }

  void removeCard(String rank, String suit) {
    cards.removeWhere((card) => (card.rank == rank && card.suit == suit));
  }
}
