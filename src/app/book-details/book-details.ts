import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.html',
  styleUrl: './book-details.css'
})
export class BookDetails {

  quantity = 1;

  book: any;

  books = [
    {
      id: 1,
      title: 'The Midnight Library',
      author: 'Matt Haig',
      price: 650,
      image: 'the-midnight-library.png',
      description: "Nora Seed finds herself faced with this decision. Faced with the possibility of changing her life for a new one, following a different career, undoing old breakups, realizing her dreams of becoming a glaciologist; she must search within herself as she travels through the Midnight Library to decide what is truly fulfilling in life, and what makes it worth living in the first place."
    },

    {
      id: 2,
      title: 'Divine Rivals',
      author: 'Rebecca Ross',
      price: 720,
      image: 'divine-rivals.png',
      description: "When two young rival journalists find love through a magical connection, they must face the depths of hell, in a war among gods, to seal their fate forever.\n\nAfter centuries of sleep, the gods are warring again. But eighteen-year-old Iris Winnow just wants to hold her family together. Her mother is suffering from addiction and her brother is missing from the front lines. Her best bet is to win the columnist promotion at the Oath Gazette.\n\nTo combat her worries, Iris writes letters to her brother and slips them beneath her wardrobe door, where they vanish―into the hands of Roman Kitt, her cold and handsome rival at the paper. When he anonymously writes Iris back, the two of them forge a connection that will follow Iris all the way to the front lines of battle: for her brother, the fate of mankind, and love.\n\nShadow and Bone meets Lore in Rebecca Ross's Divine Rivals, an epic enemies-to-lovers fantasy novel filled with hope and heartbreak, and the unparalleled power of love."
    },

    {
      id: 3,
      title: 'The Seven Year Slip',
      author: 'Ashley Poston',
      price: 680,
      image: 'the-seven-year-slip.png',
      description: "Sometimes, the worst day of your life happens, and you have to figure out how to live after it.\n\nSo Clementine forms a plan to keep her heart safe: work hard, find someone decent to love, and try to remember to chase the moon. The last one is silly and obviously metaphorical, but her aunt always told her that you needed at least one big dream to keep going. And for the last year, that plan has gone off without a hitch. Mostly. The love part is hard because she doesn’t want to get too close to anyone she isn’t sure her heart can take it.\n\nAnd then she finds a strange man standing in the kitchen of her late aunt’s apartment. A man with kind eyes and a Southern drawl and a taste for lemon pies. The kind of man that, before it all, she would’ve fallen head-over-heels for. And she might again.\n\nExcept, he exists in the past. Seven years ago, to be exact. And she, quite literally, lives seven years in his future.\n\nHer aunt always said the apartment was a pinch in time, a place where moments blended together like watercolors. And Clementine knows that if she lets her heart fall, she’ll be doomed.\n\nAfter all, love is never a matter of time but a matter of timing."
    },

    {
      id: 4,
      title: 'A Study in Drowning',
      author: 'Ava Reid',
      price: 690,
      image: 'a-study-in-drowning.png',
      description: "Effy Sayre has always believed in fairy tales. Haunted by visions of the Fairy King since childhood, she’s had no choice. Her tattered copy of Angharad—Emrys Myrddin’s epic about a mortal girl who falls in love with the Fairy King, then destroys him—is the only thing keeping her afloat. So when Myrddin’s family announces a contest to redesign the late author’s estate, Effy feels certain it’s her destiny.\n\nBut musty, decrepit Hiraeth Manor is an impossible task, and its residents are far from welcoming. Including Preston Héloury, a stodgy young literature scholar determined to expose Myrddin as a fraud. As the two rivals piece together clues about Myrddin’s legacy, dark forces, both mortal and magical, conspire against them—and the truth may bring them both to ruin.\n\nPart historical fantasy, part rivals-to-lovers romance, part Gothic mystery, and all haunting, dreamlike atmosphere, Ava Reid's powerful YA debut will lure in readers who loved The Atlas Six, House of Salt and Sorrows, or Girl, Serpent, Thorn."
    },

    {
      id: 5,
      title: 'The Night Circus',
      author: 'Erin Morgenstern',
      price: 750,
      image: 'the-night-circus.png',
      description: "Two starcrossed magicians engage in a deadly game of cunning in The Night Circus, the spellbinding bestseller that has captured the world's imagination.\n\nThe circus arrives without warning. No announcements precede it. It is simply there, when yesterday it was not. Within the black-and-white striped canvas tents is an utterly unique experience full of breathtaking amazements. It is called Le Cirque des Rêves, and it is only open at night.\n\nBut behind the scenes, a fierce competition is underway: a duel between two young magicians, Celia and Marco, who have been trained since childhood expressly for this purpose by their mercurial instructors. Unbeknownst to them both, this is a game in which only one can be left standing. Despite the high stakes, Celia and Marco soon tumble headfirst into love, setting off a domino effect of dangerous consequences, and leaving the lives of everyone, from the performers to the patrons, hanging in the balance."
    }
  ];

  constructor(private route: ActivatedRoute) {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.book = this.books.find(book => book.id === id);

  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

}