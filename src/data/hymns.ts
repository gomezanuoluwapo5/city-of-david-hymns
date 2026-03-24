export interface Hymn {
  number: number;
  title: string;
  titleYoruba: string;
  verses: { english: string; yoruba: string }[];
  chorus?: { english: string; yoruba: string };
  solfa?: string;
  chords?: string;
  key?: string;
  tempo?: string;
}

export const hymns: Hymn[] = [
  {
    number: 1,
    title: "Holy, Holy, Holy",
    titleYoruba: "Mimo, Mimo, Mimo",
    key: "D Major",
    tempo: "Moderato",
    solfa: "d :d :d |m :m :m |s :s :f |m :- :- |\nd :d :d |f :f :f |m :m :r |d :- :- |\ns :s :s |l :l :l |s :s :f |m :- :- |\nd :m :s |l :s :f |m :r :r |d :- :- |",
    chords: "D - G/D D | Bm - A | D - G | D/A A D |\nD - G D | Bm - Em A | D - G | D/A A D |",
    verses: [
      {
        english: "Holy, holy, holy! Lord God Almighty!\nEarly in the morning our song shall rise to Thee;\nHoly, holy, holy, merciful and mighty!\nGod in three Persons, blessèd Trinity!",
        yoruba: "Mimo, mimo, mimo! Oluwa Olodumare!\nNi kutukutu owuro a korin fun O;\nMimo, mimo, mimo, alanu ati alagbara!\nOlorun ni eniyan meta, Metalokan olubukun!"
      },
      {
        english: "Holy, holy, holy! All the saints adore Thee,\nCasting down their golden crowns around the glassy sea;\nCherubim and seraphim falling down before Thee,\nWhich wert, and art, and evermore shalt be.",
        yoruba: "Mimo, mimo, mimo! Gbogbo enia mimo n josin fun O,\nWon n ju ade wura won si okun digi;\nKerubu ati Serafu n wolule niwaju Re,\nIwo ti wa, ti wa, ti yio ma wa titi."
      },
      {
        english: "Holy, holy, holy! Though the darkness hide Thee,\nThough the eye of sinful man Thy glory may not see;\nOnly Thou art holy; there is none beside Thee,\nPerfect in power, in love, and purity.",
        yoruba: "Mimo, mimo, mimo! Bi okunkun ba bo O mo,\nBi oju elese ko le ri ogo Re;\nIwo nikan ni mimo; ko si elomiran lodo Re,\nPipe ni agbara, ni ife, ati ni mimo."
      },
      {
        english: "Holy, holy, holy! Lord God Almighty!\nAll Thy works shall praise Thy Name, in earth and sky and sea;\nHoly, holy, holy; merciful and mighty!\nGod in three Persons, blessèd Trinity!",
        yoruba: "Mimo, mimo, mimo! Oluwa Olodumare!\nGbogbo ise Re yio yin Oruko Re, ni aiye ati orun;\nMimo, mimo, mimo, alanu ati alagbara!\nOlorun ni eniyan meta, Metalokan olubukun!"
      }
    ]
  },
  {
    number: 2,
    title: "Let Us with a Gladsome Mind",
    titleYoruba: "E Je Ka Fi Ayo Okan",
    key: "G Major",
    tempo: "Allegretto",
    solfa: "s :s :s |m :m :d |r :r :m |f :- :- |\nm :m :f |s :s :l |s :f :m |r :- :- |",
    chords: "G - C G | D - G | Em - C D | G - D G |",
    verses: [
      {
        english: "Let us with a gladsome mind\nPraise the Lord, for He is kind;\nFor His mercies ay endure,\nEver faithful, ever sure.",
        yoruba: "E je ka fi ayo okan\nYin Oluwa, nitori O dara;\nNitori aanu Re wa titi,\nOlotito nigbagbogbo, o daju."
      },
      {
        english: "Let us blaze His Name abroad,\nFor of gods He is the God;\nFor His mercies ay endure,\nEver faithful, ever sure.",
        yoruba: "E je ka ke oruko Re kale,\nNitori O je Olorun awon olorun;\nNitori aanu Re wa titi,\nOlotito nigbagbogbo, o daju."
      },
      {
        english: "He with all-commanding might\nFilled the new-made world with light;\nFor His mercies ay endure,\nEver faithful, ever sure.",
        yoruba: "O fi agbara ti o lagbara ju\nKun aiye titun pelu imole;\nNitori aanu Re wa titi,\nOlotito nigbagbogbo, o daju."
      }
    ]
  },
  {
    number: 3,
    title: "What Can Wash Away My Sins",
    titleYoruba: "Kini Le We Ese Mi Nu",
    key: "Ab Major",
    tempo: "Moderato",
    solfa: "d :m :s |s :f :m |r :m :f |m :- :- |\nd :m :s |s :l :s |f :m :r |d :- :- |",
    chords: "Ab - Db Ab | Eb - Ab | Db - Ab/Eb Eb | Ab - - |",
    verses: [
      {
        english: "What can wash away my sin?\nNothing but the blood of Jesus;\nWhat can make me whole again?\nNothing but the blood of Jesus.",
        yoruba: "Kini le we ese mi nu?\nEje Jesu nikan ni;\nKini le mu mi pe mo?\nEje Jesu nikan ni."
      },
      {
        english: "For my pardon, this I see,\nNothing but the blood of Jesus;\nFor my cleansing this my plea,\nNothing but the blood of Jesus.",
        yoruba: "Fun idariji mi, eyi ni mo ri,\nEje Jesu nikan ni;\nFun imimonu mi eyi ni ebe mi,\nEje Jesu nikan ni."
      }
    ],
    chorus: {
      english: "Oh! precious is the flow\nThat makes me white as snow;\nNo other fount I know,\nNothing but the blood of Jesus.",
      yoruba: "O! iyebiye ni isan na\nTi o mu mi funfun bi yinyin;\nKo si orisun miran ti mo mo,\nEje Jesu nikan ni."
    }
  },
  {
    number: 4,
    title: "When We Walk with the Lord",
    titleYoruba: "Nigba Ti A Ba Rin Pelu Oluwa",
    key: "Eb Major",
    tempo: "Moderato",
    solfa: "s :s :l |s :m :d |r :m :f |m :- :- |\ns :s :l |s :m :d |r :r :m |d :- :- |",
    chords: "Eb - Ab Eb | Bb - Eb | Ab - Eb/Bb Bb | Eb - - |",
    verses: [
      {
        english: "When we walk with the Lord\nIn the light of His word,\nWhat a glory He sheds on our way!\nWhile we do His good will,\nHe abides with us still,\nAnd with all who will trust and obey.",
        yoruba: "Nigba ti a ba rin pelu Oluwa\nNi imole oro Re,\nOgo wo ni O n tan si ona wa!\nNigba ti a ba se ife Re,\nO maa ba wa gbe,\nAti pelu gbogbo awon ti yio gbagbo ti yio si tele."
      },
      {
        english: "Not a burden we bear,\nNot a sorrow we share,\nBut our toil He doth richly repay;\nNot a grief or a loss,\nNot a frown or a cross,\nBut is blest if we trust and obey.",
        yoruba: "Ko si eru ti a ru,\nKo si ibanuje ti a pin,\nSugbon ise wa ni O n san ni opolopo;\nKo si irora tabi pipadanu,\nKo si ibinu tabi agbelebu,\nBikoSe ibukun ti a ba gbagbo ti a si tele."
      }
    ],
    chorus: {
      english: "Trust and obey, for there's no other way\nTo be happy in Jesus, but to trust and obey.",
      yoruba: "Gbagbo ki o tele, nitori ko si ona miran\nLati ni ayo ninu Jesu, bikoSe lati gbagbo ki a tele."
    }
  },
  {
    number: 5,
    title: "O God, Our Help in Ages Past",
    titleYoruba: "Olorun, Iranlowo Wa Lati Igba Atijo",
    key: "C Major",
    tempo: "Maestoso",
    solfa: "d :d :r |m :m :r |d :d :t, |d :- :- |\nm :m :f |s :s :f |m :r :r |d :- :- |",
    chords: "C - F C | G - Am F | C - G | C - - |",
    verses: [
      {
        english: "O God, our help in ages past,\nOur hope for years to come,\nOur shelter from the stormy blast,\nAnd our eternal home!",
        yoruba: "Olorun, iranlowo wa lati igba atijo,\nIreti wa fun odun ti mbo,\nIbi isadi wa kuro ninu iji lile,\nAti ile wa ayeraye!"
      },
      {
        english: "Under the shadow of Thy throne\nStill may we dwell secure;\nSufficient is Thine arm alone,\nAnd our defense is sure.",
        yoruba: "Labele ojiji ite Re\nA le maa gbe lailewu;\nApa Re nikan to,\nAabo wa si daju."
      },
      {
        english: "Before the hills in order stood,\nOr earth received her frame,\nFrom everlasting Thou art God,\nTo endless years the same.",
        yoruba: "Ki awon oke to duro lese,\nTabi ki aiye to gba apere re,\nLati ayeraye Iwo ni Olorun,\nSi odun ainipekun bakanna."
      },
      {
        english: "O God, our help in ages past,\nOur hope for years to come;\nBe Thou our guide while life shall last,\nAnd our eternal home!",
        yoruba: "Olorun, iranlowo wa lati igba atijo,\nIreti wa fun odun ti mbo;\nJe oluto wa nigba ti aye ba wa,\nAti ile wa ayeraye!"
      }
    ]
  },
  {
    number: 6,
    title: "Just Obey",
    titleYoruba: "Tele Nikan",
    key: "F Major",
    tempo: "Moderato",
    solfa: "d :m :s |l :s :f |m :f :s |f :m :r |\nd :m :s |l :s :f |m :r :r |d :- :- |",
    chords: "F - Bb F | C - F | Bb - F/C C | F - - |",
    verses: [
      {
        english: "Just obey, just obey,\nWhen the Lord commands you, just obey;\nNever stop to question, never pause to reason,\nWhen the Lord commands you, just obey.",
        yoruba: "Tele nikan, tele nikan,\nNigba ti Oluwa ba pase, tele nikan;\nMa duro lati bere, ma dake lati ronupiwada,\nNigba ti Oluwa ba pase, tele nikan."
      },
      {
        english: "Just obey, just obey,\nThough the path be rugged, just obey;\nHe will make the darkness light before thee,\nWhen the Lord commands you, just obey.",
        yoruba: "Tele nikan, tele nikan,\nBi ona ba ti le, tele nikan;\nYio mu okunkun di imole niwaju re,\nNigba ti Oluwa ba pase, tele nikan."
      }
    ]
  },
  {
    number: 7,
    title: "O Worship the King",
    titleYoruba: "E Josin Fun Oba",
    key: "D Major",
    tempo: "Maestoso",
    solfa: "d :m :s |s :f :m |r :m :f |m :- :- |\nm :s :d' |t :l :s |f :m :r |d :- :- |",
    chords: "D - G D | A - D | G - D/A A | D - - |",
    verses: [
      {
        english: "O worship the King, all-glorious above,\nO gratefully sing His power and His love;\nOur shield and Defender, the Ancient of Days,\nPavilioned in splendor, and girded with praise.",
        yoruba: "E josin fun Oba, ogo-nla loke,\nE korin oore fun agbara ati ife Re;\nAsabo ati Olugbeja wa, Arugbo Ojo,\nTi a de ni ogo, ti a si di pelu iyin."
      },
      {
        english: "O tell of His might, O sing of His grace,\nWhose robe is the light, whose canopy space,\nHis chariots of wrath the deep thunderclouds form,\nAnd dark is His path on the wings of the storm.",
        yoruba: "E so nipa agbara Re, e korin oore Re,\nEni ti aso re ni imole, ti ibori re ni sanma,\nKeke ibinu Re ni awon awosanma jinle n da,\nOkunkun si ni ona Re lori iye iji."
      }
    ]
  },
  {
    number: 8,
    title: "O Happy Day",
    titleYoruba: "Ojo Ayo",
    key: "G Major",
    tempo: "Allegro",
    solfa: "s :s :l |s :m :d |d :r :m |r :- :- |\nm :f :s |l :s :f |m :r :r |d :- :- |",
    chords: "G - C G | D - G | C - G/D D | G - - |",
    verses: [
      {
        english: "O happy day that fixed my choice\nOn Thee, my Savior and my God!\nWell may this glowing heart rejoice,\nAnd tell its raptures all abroad.",
        yoruba: "Ojo ayo ti o fi ipinnu mi le\nLori Re, Olugbala mi ati Olorun mi!\nO ye ki okan gbigbona yi yo,\nKi o si so ayo re ni gbangba."
      },
      {
        english: "O happy bond, that seals my vows\nTo Him who merits all my love!\nLet cheerful anthems fill His house,\nWhile to that sacred shrine I move.",
        yoruba: "Adehun ayo, ti o fi edi mu eje mi\nFun Eni ti o ye ife mi gbogbo!\nJe ki orin ayo kun ile Re,\nNigba ti mo n lo si ibi ijosi mimo na."
      }
    ],
    chorus: {
      english: "Happy day, happy day,\nWhen Jesus washed my sins away!\nHe taught me how to watch and pray,\nAnd live rejoicing every day.",
      yoruba: "Ojo ayo, ojo ayo,\nNigba ti Jesu we ese mi nu!\nO ko mi bi a se n sora ti a si n gbadura,\nAti gbe ni ayo lojojumo."
    }
  },
  {
    number: 9,
    title: "Through the Love of God Our Savior",
    titleYoruba: "Nipa Ife Olorun Olugbala Wa",
    key: "F Major",
    tempo: "Andante",
    solfa: "d :m :f |s :l :s |f :m :r |d :- :- |\nd :m :f |s :l :t |d' :t :l |s :- :- |",
    chords: "F - Bb F | C - F | Bb - C | F - - |",
    verses: [
      {
        english: "Through the love of God our Savior,\nAll will be well;\nFree and changeless is His favor,\nAll, all is well.",
        yoruba: "Nipa ife Olorun Olugbala wa,\nOhun gbogbo yio dara;\nOfe ati aiyipada ni ojurere Re,\nOhun gbogbo yio dara."
      },
      {
        english: "Though we pass through tribulation,\nAll will be well;\nOurs is such a full salvation,\nAll, all is well.",
        yoruba: "Bi a ba koja nipase wahala,\nOhun gbogbo yio dara;\nTiwa ni igbala ti o kun bayi,\nOhun gbogbo yio dara."
      }
    ]
  },
  {
    number: 10,
    title: "Not a Friend Like the Lowly Jesus",
    titleYoruba: "Ko Si Ore Bi Jesu Onirele",
    key: "Ab Major",
    tempo: "Moderato",
    solfa: "d :m :s |l :s :f |m :m :f |s :- :- |\ns :l :s |f :m :r |d :r :m |d :- :- |",
    chords: "Ab - Db Ab | Eb - Ab | Db - Ab/Eb Eb | Ab - - |",
    verses: [
      {
        english: "No, not one! No, not one!\nNone could heal our soul's diseases,\nNo, not one! No, not one!",
        yoruba: "Rara, ko si okan! Rara, ko si okan!\nKo si enikan ti o le wo aisan okan wa san,\nRara, ko si okan! Rara, ko si okan!"
      },
      {
        english: "No night so dark but His love can cheer us,\nNo, not one! No, not one!\nNo night so dark but His love can cheer us,\nNo, not one! No, not one!",
        yoruba: "Ko si oru ti o sokunkun ti ife Re ko le tu wa ninu,\nRara, ko si okan! Rara, ko si okan!\nKo si oru ti o sokunkun ti ife Re ko le tu wa ninu,\nRara, ko si okan! Rara, ko si okan!"
      }
    ],
    chorus: {
      english: "Jesus knows all about our struggles;\nHe will guide till the day is done;\nThere's not a friend like the lowly Jesus—\nNo, not one! No, not one!",
      yoruba: "Jesu mo gbogbo nipa ijakadi wa;\nYio to wa sona titi di opin ojo;\nKo si ore bi Jesu onirele—\nRara, ko si okan! Rara, ko si okan!"
    }
  },
  {
    number: 11,
    title: "Great Is Thy Faithfulness",
    titleYoruba: "Nla Ni Igbagbo Re",
    key: "D Major",
    tempo: "Moderato",
    solfa: "d :m :s |s :f :m |l :l :s |f :m :r |\nd :m :s |l :s :f |m :r :r |d :- :- |",
    chords: "D - G D | Bm - A | D - G | D/A A D |",
    verses: [
      {
        english: "Great is Thy faithfulness, O God my Father;\nThere is no shadow of turning with Thee;\nThou changest not, Thy compassions, they fail not;\nAs Thou hast been, Thou forever wilt be.",
        yoruba: "Nla ni igbagbo Re, Olorun Baba mi;\nKo si ojiji iyipada lodo Re;\nIwo ko yipada, aanu Re ko kuna;\nBi O ti ri, bee ni yio ma ri titi."
      },
      {
        english: "Summer and winter and springtime and harvest,\nSun, moon, and stars in their courses above\nJoin with all nature in manifold witness\nTo Thy great faithfulness, mercy, and love.",
        yoruba: "Ooru ati otutu ati akoko irugbin ati ikore,\nOorun, osupa, ati irawo ninu ipa won loke\nDarapo mo eda gbogbo ni eri oniruru\nSi igbagbo nla Re, aanu, ati ife."
      }
    ],
    chorus: {
      english: "Great is Thy faithfulness!\nGreat is Thy faithfulness!\nMorning by morning new mercies I see.\nAll I have needed Thy hand hath provided;\nGreat is Thy faithfulness, Lord, unto me!",
      yoruba: "Nla ni igbagbo Re!\nNla ni igbagbo Re!\nOwuro de owuro aanu titun ni mo ri.\nOhun gbogbo ti mo nilo owo Re ti pese;\nNla ni igbagbo Re, Oluwa, fun mi!"
    }
  },
  {
    number: 12,
    title: "Now Thank We All Our God",
    titleYoruba: "E Je Ka Dupe Lowo Olorun Wa",
    key: "F Major",
    tempo: "Maestoso",
    solfa: "d :d :r |m :m :f |s :s :f |m :- :- |\nm :m :f |s :l :s |f :m :r |d :- :- |",
    chords: "F - Bb F | C - Dm | Bb - F/C C | F - - |",
    verses: [
      {
        english: "Now thank we all our God,\nWith heart and hands and voices,\nWho wondrous things has done,\nIn whom His world rejoices.",
        yoruba: "E je ka dupe lowo Olorun wa,\nPelu okan ati owo ati ohun,\nEni ti o ti se ohun iyanu,\nEniti aiye Re n yo fun."
      },
      {
        english: "O may this bounteous God\nThrough all our life be near us,\nWith ever joyful hearts\nAnd blessed peace to cheer us.",
        yoruba: "Ki Olorun oninurere yi\nMaa wa nitosi wa ni gbogbo aye wa,\nPelu okan ayo nigbagbogbo\nAti alafia olubukun lati tu wa ninu."
      }
    ]
  },
  {
    number: 13,
    title: "Abide with Me",
    titleYoruba: "Ba Mi Gbe",
    key: "Eb Major",
    tempo: "Adagio",
    solfa: "s :s :s |l :s :f |m :f :s |f :- :- |\nm :m :f |s :l :s |s :f :f |m :- :- |",
    chords: "Eb - Ab Eb | Bb - Eb | Ab - Eb/Bb Bb | Eb - - |",
    verses: [
      {
        english: "Abide with me; fast falls the eventide;\nThe darkness deepens; Lord, with me abide.\nWhen other helpers fail and comforts flee,\nHelp of the helpless, O abide with me.",
        yoruba: "Ba mi gbe; irole n ya ni kiakia;\nOkunkun n suru; Oluwa, ba mi gbe.\nNigba ti awon oluranlowo miran ba kuna ati itunu ba sa,\nIranlowo alainiranlowo, ba mi gbe."
      },
      {
        english: "Swift to its close ebbs out life's little day;\nEarth's joys grow dim; its glories pass away;\nChange and decay in all around I see;\nO Thou who changest not, abide with me.",
        yoruba: "Ni kiakia si opin re ojo kekere aye n lo;\nAyo aiye n rere; ogo re n koja lo;\nIyipada ati ibaje ni gbogbo ayika ni mo ri;\nIwo ti ko yipada, ba mi gbe."
      }
    ]
  },
  {
    number: 14,
    title: "I'm Pressing on the Upward Way",
    titleYoruba: "Mo N Tẹsiwaju Ni Ona Oke",
    key: "G Major",
    tempo: "Allegro",
    solfa: "s :s :l |s :m :d |r :m :f |m :- :- |\nm :f :s |l :s :f |m :r :r |d :- :- |",
    chords: "G - C G | D - Em | C - G/D D | G - - |",
    verses: [
      {
        english: "I'm pressing on the upward way,\nNew heights I'm gaining every day;\nStill praying as I'm onward bound,\nLord, plant my feet on higher ground.",
        yoruba: "Mo n tesiwaju ni ona oke,\nGiga titun ni mo n de lojojumo;\nMo si n gbadura bi mo ti n tesiwaju,\nOluwa, fi ese mi le ilẹ giga."
      },
      {
        english: "My heart has no desire to stay\nWhere doubts arise and fears dismay;\nThough some may dwell where those abound,\nMy prayer, my aim, is higher ground.",
        yoruba: "Okan mi ko ni ifẹ lati duro\nNibi ti iyemeji dide ti iberu n dẹruba;\nBi awon kan ba gbe nibiti wọnni ti po,\nAdura mi, ero mi, ni ile giga."
      }
    ],
    chorus: {
      english: "Lord, lift me up and let me stand,\nBy faith, on Heaven's tableland,\nA higher plane than I have found;\nLord, plant my feet on higher ground.",
      yoruba: "Oluwa, gbe mi soke ki o je ki n duro,\nNipa igbagbo, lori pẹtẹlẹ Orun,\nIbi giga ju eyi ti mo ti ri lo;\nOluwa, fi ese mi le ile giga."
    }
  },
  {
    number: 15,
    title: "Now Thank We All Our God (II)",
    titleYoruba: "Nisiyi E Je Ka Dupẹ",
    key: "F Major",
    tempo: "Maestoso",
    solfa: "d :d :r |m :m :f |s :s :f |m :- :- |",
    chords: "F - Bb F | C - Dm | Bb - F/C C | F - - |",
    verses: [
      {
        english: "Now thank we all our God,\nWith heart and hands and voices,\nWho wondrous things has done,\nIn whom His world rejoices.",
        yoruba: "Nisiyi e je ka dupẹ lowo Olorun wa,\nPelu okan ati owo ati ohun,\nEni ti o ti se ohun iyanu,\nEniti aiye Re n yo fun."
      }
    ]
  },
  {
    number: 16,
    title: "Begone Unbelief",
    titleYoruba: "Lọ, Aigbagbọ",
    key: "Bb Major",
    tempo: "Andante",
    solfa: "d :m :s |s :f :m |r :r :m |f :- :- |\nm :s :l |s :f :m |r :d :r |d :- :- |",
    chords: "Bb - Eb Bb | F - Bb | Eb - Bb/F F | Bb - - |",
    verses: [
      {
        english: "Begone, unbelief, my Savior is near,\nAnd for my relief will surely appear;\nBy prayer let me wrestle, and He will perform;\nWith Christ in the vessel, I smile at the storm.",
        yoruba: "Lọ, aigbagbọ, Olugbala mi wa nitosi,\nFun itunu mi yio han dajudaju;\nNipa adura je ki n ja, On yio si se;\nPelu Kristi ninu okọ, mo rerin si iji."
      },
      {
        english: "Though dark be my way, since He is my guide,\n'Tis mine to obey, 'tis His to provide;\nThough cisterns be broken, and creatures all fail,\nThe word He has spoken shall surely prevail.",
        yoruba: "Bi ona mi ba sokunkun, niwon igba ti O je oluto mi,\nTi emi ni lati tele, ti Re ni lati pese;\nBi ikoko ba fo, ati eda ba kuna,\nOro ti O ti so yio dajudaju bori."
      }
    ]
  },
  {
    number: 17,
    title: "There's a Stranger at the Door",
    titleYoruba: "Alejò Kan Wà Ni Ẹnu Ilẹkun",
    key: "G Major",
    tempo: "Moderato",
    solfa: "s :s :s |m :m :d |r :m :f |m :- :- |\ns :l :s |f :m :r |d :r :m |d :- :- |",
    chords: "G - C G | D - G | C - G/D D | G - - |",
    verses: [
      {
        english: "There's a Stranger at the door,\nLet Him in;\nHe has been there oft before,\nLet Him in.",
        yoruba: "Alejò kan wà ni ẹnu ilẹkun,\nẸ je ki o wọle;\nO ti wa nibẹ nigba pupọ ri,\nẸ je ki o wọle."
      },
      {
        english: "Open now to Him your heart,\nLet Him in;\nIf you wait He will depart,\nLet Him in.",
        yoruba: "Si okan re fun un nisiyi,\nẸ je ki o wọle;\nBi o ba duro dẹ yio lọ,\nẸ je ki o wọle."
      }
    ],
    chorus: {
      english: "Let Him in, let Him in,\nO let the dear Savior come in;\nHe'll cleanse your heart from sin,\nO let Him in.",
      yoruba: "Ẹ je ki o wọle, ẹ je ki o wọle,\nẸ je ki Olugbala ọwọn wọle;\nYio wẹ okan rẹ nu kuro ninu ẹsẹ,\nẸ je ki o wọle."
    }
  },
  {
    number: 18,
    title: "Just as God Who Reigns on High",
    titleYoruba: "Gẹgẹ Bi Ọlọrun Ti Njọba Loke",
    key: "C Major",
    tempo: "Andante",
    solfa: "d :m :s |s :l :s |f :m :r |d :- :- |",
    chords: "C - F C | G - Am | F - G | C - - |",
    verses: [
      {
        english: "Just as God who reigns on high\nSent His Son for man to die,\nSo we ought to live and love,\nFollowing patterns from above.",
        yoruba: "Gẹgẹ bi Ọlọrun ti njọba loke\nRan Ọmọ Rẹ fun eniyan lati ku,\nBẹẹ ni a gbọdọ gbé àti nífẹ,\nTẹle apere lati oke."
      }
    ]
  },
  {
    number: 19,
    title: "Stand Up, Stand Up for Jesus",
    titleYoruba: "Ẹ Dide, Ẹ Dide Fun Jesu",
    key: "Bb Major",
    tempo: "Maestoso",
    solfa: "d :m :s |s :l :s |f :m :r |d :- :- |\nm :f :s |l :s :f |m :r :r |d :- :- |",
    chords: "Bb - Eb Bb | F - Bb | Eb - Bb/F F | Bb - - |",
    verses: [
      {
        english: "Stand up, stand up for Jesus,\nYe soldiers of the cross;\nLift high His royal banner,\nIt must not suffer loss.",
        yoruba: "Ẹ dide, ẹ dide fun Jesu,\nẸyin omo ogun agbelebu;\nẸ gbe asia ọba Re soke,\nKo gbọdọ jiya pipadanu."
      },
      {
        english: "Stand up, stand up for Jesus,\nThe trumpet call obey;\nForth to the mighty conflict,\nIn this His glorious day.",
        yoruba: "Ẹ dide, ẹ dide fun Jesu,\nẸ tele ipe ipè;\nJade si ogun nla,\nNi ojo ogo Re yi."
      }
    ]
  },
  {
    number: 20,
    title: "Jesus Calls Us O'er the Tumult",
    titleYoruba: "Jesu N Pe Wa Lori Ariwo",
    key: "D Major",
    tempo: "Moderato",
    solfa: "d :m :s |s :f :m |r :m :f |m :- :- |",
    chords: "D - G D | A - Bm | G - D/A A | D - - |",
    verses: [
      {
        english: "Jesus calls us o'er the tumult\nOf our life's wild, restless sea;\nDay by day His sweet voice soundeth,\nSaying, 'Christian, follow Me!'",
        yoruba: "Jesu n pe wa lori ariwo\nOkun aye wa ti o n ja lile;\nOjọ de ojo ohun didun Re n dun,\nO n wi pe, 'Kristiani, tele Mi!'"
      },
      {
        english: "Jesus calls us from the worship\nOf the vain world's golden store;\nFrom each idol that would keep us,\nSaying, 'Christian, love Me more!'",
        yoruba: "Jesu n pe wa kuro ninu ijọsin\nOro wura aiye asan;\nKuro lodo oriSa kookan ti yio da wa duro,\nO n wi pe, 'Kristiani, fẹ Mi ju!'"
      }
    ]
  },
  {
    number: 21,
    title: "Take My Life and Let It Be",
    titleYoruba: "Gba Aye Mi Ki O Si Je",
    key: "C Major",
    tempo: "Andante",
    solfa: "d :m :s |l :s :f |m :f :s |f :m :r |\nd :m :s |l :s :f |m :r :r |d :- :- |",
    chords: "C - F C | Am - G | F - C/G G | C - - |",
    verses: [
      {
        english: "Take my life and let it be\nConsecrated, Lord, to Thee.\nTake my moments and my days,\nLet them flow in ceaseless praise.",
        yoruba: "Gba aye mi ki o si je\nMimo, Oluwa, fun O.\nGba akoko mi ati ojo mi,\nJe ki won san ni iyin ailododo."
      },
      {
        english: "Take my hands and let them move\nAt the impulse of Thy love.\nTake my feet and let them be\nSwift and beautiful for Thee.",
        yoruba: "Gba owo mi ki o je ki won sisẹ\nNi itara ife Re.\nGba ese mi ki o je ki won je\nKiakia ati lẹwa fun O."
      }
    ]
  },
  {
    number: 22,
    title: "Jesus, I My Cross Have Taken",
    titleYoruba: "Jesu, Mo Ti Gbe Agbelebu Mi",
    key: "Eb Major",
    tempo: "Moderato",
    solfa: "s :s :l |s :m :d |r :m :f |m :- :- |",
    chords: "Eb - Ab Eb | Bb - Cm | Ab - Eb/Bb Bb | Eb - - |",
    verses: [
      {
        english: "Jesus, I my cross have taken,\nAll to leave and follow Thee;\nDestitute, despised, forsaken,\nThou, from hence, my all shalt be.",
        yoruba: "Jesu, mo ti gbe agbelebu mi,\nLati fi gbogbo silẹ lati tele O;\nAláìní, ẹgàn, àìjẹ,\nIwọ, lati isisiyi, gbogbo mi ni yio je."
      },
      {
        english: "Perish every fond ambition,\nAll I've sought and hoped and known;\nYet how rich is my condition,\nGod and Heaven are still my own!",
        yoruba: "Jẹ ki ireti kookan parun,\nGbogbo ti mo wa ati ti mo nireti;\nSibẹ bi ipo mi ti pọn to,\nOlorun ati Ọrun si jẹ temi!"
      }
    ]
  },
  {
    number: 23,
    title: "The Voice That Breathed O'er Eden",
    titleYoruba: "Ohun Ti O Mi Sori Edeni",
    key: "F Major",
    tempo: "Andante",
    solfa: "d :m :f |s :l :s |f :m :r |d :- :- |",
    chords: "F - Bb F | C - Dm | Bb - F/C C | F - - |",
    verses: [
      {
        english: "The voice that breathed o'er Eden,\nThat earliest wedding day,\nThe primal marriage blessing,\nIt hath not passed away.",
        yoruba: "Ohun ti o mi sori Edeni,\nOjo igbeyawo akoko na,\nIbukun igbeyawo akoko,\nKo ti koja lo."
      },
      {
        english: "Still in the pure espousal\nOf Christian man and maid,\nThe Holy Three are with us,\nThe threefold grace is said.",
        yoruba: "Si ninu igbeyawo mimo\nTi ọkunrin ati obinrin Kristiani,\nMẹtalokan Mimo wa pẹlu wa,\nOore-ọfẹ mẹtalọkan ni a sọ."
      }
    ]
  },
  {
    number: 24,
    title: "Jesus, We Are Assembled",
    titleYoruba: "Jesu, A Ti Pejọ",
    key: "G Major",
    tempo: "Moderato",
    solfa: "d :m :s |s :l :s |f :m :r |d :- :- |",
    chords: "G - C G | D - Em | C - G/D D | G - - |",
    verses: [
      {
        english: "Jesus, we are assembled,\nIn Thy Name we meet;\nBless us with Thy presence,\nMake our joy complete.",
        yoruba: "Jesu, a ti pejọ,\nNi oruko Re ni a pade;\nBukun wa pelu wiwa Re,\nMu ayo wa pe."
      },
      {
        english: "Fill our hearts with gladness,\nChase away all fear;\nIn Thy loving presence,\nHeaven seems so near.",
        yoruba: "Kun okan wa pelu ayo,\nLe iberu kuro;\nNinu wiwa ife Re,\nOrun dabi pe o sunmọ."
      }
    ]
  },
  {
    number: 25,
    title: "Jesus Loves Me, This I Know",
    titleYoruba: "Jesu Fẹ Mi, Eyi Ni Mo Mọ",
    key: "C Major",
    tempo: "Allegretto",
    solfa: "d :d :m |s :s :m |f :f :m |r :- :- |\nd :d :m |s :s :m |r :r :r |d :- :- |",
    chords: "C - - | F - C | G - C | F - G C |",
    verses: [
      {
        english: "Jesus loves me! This I know,\nFor the Bible tells me so;\nLittle ones to Him belong;\nThey are weak, but He is strong.",
        yoruba: "Jesu fẹ mi! Eyi ni mo mọ,\nNitori Bibeli sọ fun mi bẹẹ;\nAwon ọmọ kekere jẹ tire;\nWọn ailera, sugbon On lagbara."
      },
      {
        english: "Jesus loves me! He who died\nHeaven's gate to open wide;\nHe will wash away my sin,\nLet His little child come in.",
        yoruba: "Jesu fẹ mi! Eni ti o ku\nLati si ẹnu-ọna ọrun silẹ;\nYio wẹ ẹsẹ mi nu,\nJẹ ki ọmọ kekere Rẹ wọle."
      }
    ],
    chorus: {
      english: "Yes, Jesus loves me!\nYes, Jesus loves me!\nYes, Jesus loves me!\nThe Bible tells me so.",
      yoruba: "Bẹẹni, Jesu fẹ mi!\nBẹẹni, Jesu fẹ mi!\nBẹẹni, Jesu fẹ mi!\nBibeli sọ fun mi bẹẹ."
    }
  },
  {
    number: 26,
    title: "What Can Wash Away My Sin (II)",
    titleYoruba: "Kini Le Wẹ Ẹsẹ Mi Nu (II)",
    key: "Ab Major",
    tempo: "Moderato",
    solfa: "d :m :s |s :f :m |r :m :f |m :- :- |",
    chords: "Ab - Db Ab | Eb - Ab | Db - Ab/Eb Eb | Ab - - |",
    verses: [
      {
        english: "What can wash away my sin?\nNothing but the blood of Jesus;\nWhat can make me whole again?\nNothing but the blood of Jesus.",
        yoruba: "Kini le wẹ ẹsẹ mi nu?\nẸjẹ Jesu nikan ni;\nKini le mu mi pe mọ?\nẸjẹ Jesu nikan ni."
      }
    ],
    chorus: {
      english: "Oh! precious is the flow\nThat makes me white as snow;\nNo other fount I know,\nNothing but the blood of Jesus.",
      yoruba: "O! iyebiye ni isan na\nTi o mu mi funfun bi yinyin;\nKo si orisun miran ti mo mo,\nẸjẹ Jesu nikan ni."
    }
  },
  {
    number: 27,
    title: "Thy Kingdom Come, O God",
    titleYoruba: "Ijọba Rẹ De, Ọlọrun",
    key: "D Minor",
    tempo: "Adagio",
    solfa: "d :r :m |f :m :r |d :r :m |r :- :- |",
    chords: "Dm - Gm Dm | A - Dm | Gm - Dm/A A | Dm - - |",
    verses: [
      {
        english: "Thy kingdom come, O God,\nThy rule, O Christ, begin;\nBreak with Thine iron rod\nThe tyrannies of sin.",
        yoruba: "Ijọba Rẹ de, Ọlọrun,\nIjọba Rẹ, Kristi, bẹrẹ;\nFi ọpa irin Rẹ fọ\nIjọba ẹsẹ."
      },
      {
        english: "Where is Thy reign of peace\nAnd purity and love?\nWhen shall all hatred cease,\nAs in the realms above?",
        yoruba: "Nibo ni ijọba alaafia Re\nAti mimọ ati ifẹ?\nNigba wo ni ikorira gbogbo yio dẹkun,\nBi ninu ijọba oke?"
      }
    ]
  },
  {
    number: 28,
    title: "On the Resurrection Morning",
    titleYoruba: "Ni Owurọ Ajinde",
    key: "D Major",
    tempo: "Allegro",
    solfa: "d :m :s |s :l :s |f :m :r |d :- :- |",
    chords: "D - G D | A - Bm | G - D/A A | D - - |",
    verses: [
      {
        english: "On the resurrection morning,\nSoul and body meet again;\nNo more sorrow, no more weeping,\nNo more pain.",
        yoruba: "Ni owurọ ajinde,\nỌkan ati ara yio tun pade;\nKo si ibanuje mọ, ko si ẹkun mọ,\nKo si irora mọ."
      },
      {
        english: "Here awhile they must be parted,\nAnd the flesh its sabbath keep;\nWaiting in a holy stillness,\nWrapped in sleep.",
        yoruba: "Nihin fun igba die a gbọdọ ya wọn sọtọ,\nAra si pa isimi rẹ mọ;\nNduro ni idakẹjẹ mimo,\nTi a we ninu oorun."
      }
    ]
  },
  {
    number: 29,
    title: "Loving Savior, Hear My Cry",
    titleYoruba: "Olugbala Olufẹ, Gbọ Igbe Mi",
    key: "F Major",
    tempo: "Adagio",
    solfa: "d :m :f |s :l :s |f :m :r |d :- :- |",
    chords: "F - Bb F | C - Dm | Bb - F/C C | F - - |",
    verses: [
      {
        english: "Loving Savior, hear my cry,\nBe Thou near when death is nigh;\nHold me close beneath Thy wing,\nTill the dawn of heaven I sing.",
        yoruba: "Olugbala olufẹ, gbọ igbe mi,\nWa nitosi nigba ti iku ba sunmọ;\nMu mi mọ labẹ iyẹ Rẹ,\nTiti di owurọ ti ma korin ọrun."
      }
    ]
  },
  {
    number: 30,
    title: "O Troubled Heart, There Is a Home",
    titleYoruba: "Ọkan Ti O Ni Wahala, Ile Kan Wa",
    key: "Eb Major",
    tempo: "Andante",
    solfa: "s :s :l |s :m :d |r :m :f |m :- :- |",
    chords: "Eb - Ab Eb | Bb - Cm | Ab - Eb/Bb Bb | Eb - - |",
    verses: [
      {
        english: "O troubled heart, there is a home\nBeyond the reach of toil and care;\nA home where changes never come;\nWho would not fain be resting there?",
        yoruba: "Ọkan ti o ni wahala, ile kan wa\nTi o kọja ibi isẹ ati aniyan;\nIle ti iyipada ko wa si;\nTa ni ko fẹ lati sinmi nibẹ?"
      }
    ]
  },
  {
    number: 31,
    title: "Praise, My Soul, the King of Heaven",
    titleYoruba: "Yin, Ọkan Mi, Ọba Ọrun",
    key: "D Major",
    tempo: "Maestoso",
    solfa: "d :m :s |s :l :s |f :m :r |d :- :- |\nm :f :s |l :s :f |m :r :r |d :- :- |",
    chords: "D - G D | A - Bm | G - D/A A | D - - |",
    verses: [
      {
        english: "Praise, my soul, the King of heaven;\nTo His feet thy tribute bring.\nRansomed, healed, restored, forgiven,\nEvermore His praises sing.",
        yoruba: "Yin, ọkan mi, Ọba ọrun;\nMu ọrẹ rẹ wa si ẹsẹ Rẹ.\nTi a ra pada, ti a wo san, ti a mu pada, ti a dari ji,\nMa korin iyin Rẹ titi lai."
      },
      {
        english: "Praise Him, praise Him, praise Him, praise Him,\nGlorious in His faithfulness.",
        yoruba: "Yin i, yin i, yin i, yin i,\nOgo ninu igbagbọ Rẹ."
      }
    ]
  },
  {
    number: 32,
    title: "Rescue the Perishing",
    titleYoruba: "Gba Awon Ti N Segbe",
    key: "Ab Major",
    tempo: "Moderato",
    solfa: "d :m :s |l :s :f |m :f :s |f :m :r |",
    chords: "Ab - Db Ab | Eb - Ab | Db - Ab/Eb Eb | Ab - - |",
    verses: [
      {
        english: "Rescue the perishing, care for the dying,\nSnatch them in pity from sin and the grave;\nWeep o'er the erring one, lift up the fallen,\nTell them of Jesus, the mighty to save.",
        yoruba: "Gba awon ti n segbe, toju awon ti n ku,\nFa wọn jade ninu aanu kuro ninu ẹsẹ ati isà;\nSọkun lori ẹni ti o sise, gbe ẹni ti o subu dide,\nSọ fun wọn nipa Jesu, alagbara lati gba la."
      }
    ],
    chorus: {
      english: "Rescue the perishing, care for the dying;\nJesus is merciful, Jesus will save.",
      yoruba: "Gba awon ti n segbe, toju awon ti n ku;\nJesu ni aanu, Jesu yio gba la."
    }
  },
  {
    number: 33,
    title: "They That Trust in the Lord",
    titleYoruba: "Awon Ti O Gbẹkẹle Oluwa",
    key: "G Major",
    tempo: "Moderato",
    solfa: "d :m :s |s :l :s |f :m :r |d :- :- |",
    chords: "G - C G | D - Em | C - G/D D | G - - |",
    verses: [
      {
        english: "They that trust in the Lord are secure,\nThey shall never be put to shame;\nThey that trust in the Lord shall endure,\nBlessed forever be His Name.",
        yoruba: "Awon ti o gbẹkẹle Oluwa ni aabo,\nA ko ni fi wọn si itiju lailai;\nAwon ti o gbẹkẹle Oluwa yio farada,\nOlubukun lailai ni Orukọ Rẹ."
      }
    ]
  },
  {
    number: 34,
    title: "Now the Laborer's Task Is O'er",
    titleYoruba: "Nisisiyi Isẹ Osisẹ Ti Pari",
    key: "Eb Major",
    tempo: "Adagio",
    solfa: "s :s :l |s :m :d |r :m :f |m :- :- |",
    chords: "Eb - Ab Eb | Bb - Cm | Ab - Eb/Bb Bb | Eb - - |",
    verses: [
      {
        english: "Now the laborer's task is o'er;\nNow the battle day is past;\nNow upon the farther shore\nLands the voyager at last.",
        yoruba: "Nisisiyi isẹ osisẹ ti pari;\nNisisiyi ojo ogun ti kọja;\nNisisiyi lori eti okun ọhun\nArinrinajo de nikẹhin."
      },
      {
        english: "There the tears of earth are dried;\nThere its hidden things are clear;\nThere the work of life is tried\nBy a juster Judge than here.",
        yoruba: "Nibẹ ni a ti nu omije aiye;\nNibẹ ni ohun ikọkọ rẹ han;\nNibẹ ni a ti dan isẹ aye wo\nLọwọ Adajo ododo ju nihin lọ."
      }
    ]
  },
  {
    number: 35,
    title: "There Is Power in the Blood",
    titleYoruba: "Agbara Wa Ninu Ẹjẹ Jesu",
    key: "G Major",
    tempo: "Allegro",
    solfa: "d :m :s |s :l :s |f :m :r |d :- :- |\nm :f :s |l :s :f |m :r :r |d :- :- |",
    chords: "G - C G | D - G | C - G/D D | G - - |",
    verses: [
      {
        english: "Would you be free from the burden of sin?\nThere's power in the blood, power in the blood;\nWould you o'er evil a victory win?\nThere's wonderful power in the blood.",
        yoruba: "Ṣe o fẹ di ominira kuro ninu ẹru ẹsẹ?\nAgbara wa ninu ẹjẹ, agbara ninu ẹjẹ;\nṢe o fẹ bori ibi?\nAgbara iyanu wa ninu ẹjẹ."
      }
    ],
    chorus: {
      english: "There is power, power, wonder-working power\nIn the blood of the Lamb;\nThere is power, power, wonder-working power\nIn the precious blood of the Lamb.",
      yoruba: "Agbara wa, agbara, agbara ti o n sise iyanu\nNinu ẹjẹ Ọdọ-Agutan;\nAgbara wa, agbara, agbara ti o n sise iyanu\nNinu ẹjẹ iyebiye Ọdọ-Agutan."
    }
  },
  {
    number: 36,
    title: "I Am Thine, O Lord",
    titleYoruba: "Tirẹ Ni Mi, Oluwa",
    key: "Db Major",
    tempo: "Andante",
    solfa: "d :m :s |l :s :f |m :f :s |f :m :r |",
    chords: "Db - Gb Db | Ab - Db | Gb - Db/Ab Ab | Db - - |",
    verses: [
      {
        english: "I am Thine, O Lord, I have heard Thy voice,\nAnd it told Thy love to me;\nBut I long to rise in the arms of faith\nAnd be closer drawn to Thee.",
        yoruba: "Tirẹ ni mi, Oluwa, mo ti gbọ ohun Rẹ,\nO si sọ ifẹ Rẹ fun mi;\nṢugbọn mo fẹ dide ninu apa igbagbọ\nKi a si fa mi sunmọ Ọ."
      }
    ],
    chorus: {
      english: "Draw me nearer, nearer, blessed Lord,\nTo the cross where Thou hast died.\nDraw me nearer, nearer, nearer, blessed Lord,\nTo Thy precious, bleeding side.",
      yoruba: "Fa mi sunmọ, sunmọ, Oluwa olubukun,\nSi agbelebu nibi ti O ti ku.\nFa mi sunmọ, sunmọ, sunmọ, Oluwa olubukun,\nSi ẹgbẹ iyebiye Rẹ ti o n san ẹjẹ."
    }
  },
  {
    number: 37,
    title: "Abide with Me, Fast Falls the Eventide",
    titleYoruba: "Ba Mi Gbe, Irọlẹ N Ya Ni Kiakia",
    key: "Eb Major",
    tempo: "Adagio",
    solfa: "s :s :s |l :s :f |m :f :s |f :- :- |",
    chords: "Eb - Ab Eb | Bb - Eb | Ab - Eb/Bb Bb | Eb - - |",
    verses: [
      {
        english: "Abide with me; fast falls the eventide;\nThe darkness deepens; Lord, with me abide.\nWhen other helpers fail and comforts flee,\nHelp of the helpless, O abide with me.",
        yoruba: "Ba mi gbe; irọlẹ n ya ni kiakia;\nOkunkun n jinlẹ; Oluwa, ba mi gbe.\nNigba ti awon oluranlọwọ miran ba kuna ati itunu ba salọ,\nIranlọwọ alainiranlọwọ, ba mi gbe."
      },
      {
        english: "I need Thy presence every passing hour.\nWhat but Thy grace can foil the tempter's power?\nWho, like Thyself, my guide and stay can be?\nThrough cloud and sunshine, Lord, abide with me.",
        yoruba: "Mo nilo wiwa Rẹ ni wakati kọọkan ti o n kọja.\nKini bikoṣe oore-ọfẹ Rẹ le ṣẹgun agbara adanwo?\nTa ni, bi Iwọ, ti o le jẹ oluto ati atilẹyin mi?\nNipasẹ awọsanma ati oorun, Oluwa, ba mi gbe."
      }
    ]
  },
  {
    number: 38,
    title: "How Sweet the Hour of Closing Day",
    titleYoruba: "Didun To Ni Wakati Ipari Ọjọ",
    key: "F Major",
    tempo: "Andante",
    solfa: "d :m :f |s :l :s |f :m :r |d :- :- |",
    chords: "F - Bb F | C - Dm | Bb - F/C C | F - - |",
    verses: [
      {
        english: "How sweet the hour of closing day,\nWhen all is peaceful and serene,\nAnd when the sun with cloudless ray,\nSheds golden light on all the scene!",
        yoruba: "Didun to ni wakati ipari ọjọ,\nNigba ti ohun gbogbo dara ati bàlẹ,\nAti nigba ti oorun pelu imọlẹ laisi awọsanma,\nTan imọlẹ wura si gbogbo ibi!"
      }
    ]
  },
  {
    number: 39,
    title: "O Happy Day That Fixed My Choice",
    titleYoruba: "Ọjọ Ayọ Ti O Fi Ipinnu Mi Lẹ",
    key: "G Major",
    tempo: "Allegro",
    solfa: "s :s :l |s :m :d |d :r :m |r :- :- |",
    chords: "G - C G | D - G | C - G/D D | G - - |",
    verses: [
      {
        english: "O happy day, that fixed my choice\nOn Thee, my Savior and my God!\nWell may this glowing heart rejoice,\nAnd tell its raptures all abroad.",
        yoruba: "Ọjọ ayọ, ti o fi ipinnu mi lẹ\nLori Rẹ, Olugbala ati Ọlọrun mi!\nO yẹ ki ọkan ti o n jo yi yọ,\nKi o si sọ ayọ rẹ ni gbangba."
      }
    ],
    chorus: {
      english: "Happy day, happy day,\nWhen Jesus washed my sins away!\nHe taught me how to watch and pray,\nAnd live rejoicing every day.",
      yoruba: "Ọjọ ayọ, ọjọ ayọ,\nNigba ti Jesu wẹ ẹsẹ mi nu!\nO kọ mi bi a ṣe n ṣọra ti a si n gbadura,\nAti gbe ni ayọ lọjọjumọ."
    }
  },
  {
    number: 40,
    title: "I Gave My Life for Thee",
    titleYoruba: "Mo Fi Aye Mi Fun Ọ",
    key: "C Minor",
    tempo: "Adagio",
    solfa: "d :m :s |s :f :m |r :m :f |m :- :- |",
    chords: "Cm - Fm Cm | G - Cm | Fm - Cm/G G | Cm - - |",
    verses: [
      {
        english: "I gave My life for thee,\nMy precious blood I shed,\nThat thou might'st ransomed be,\nAnd quickened from the dead.",
        yoruba: "Mo fi aye Mi fun ọ,\nẸjẹ iyebiye Mi ni Mo ta,\nKi a le ra ọ pada,\nKi a si ji ọ dide kuro ninu oku."
      },
      {
        english: "I gave, I gave My life for thee,\nWhat hast thou given for Me?",
        yoruba: "Mo fi, Mo fi aye Mi fun ọ,\nKini iwọ fi fun Mi?"
      }
    ]
  },
  {
    number: 41,
    title: "Christian, Seek Not Yet Repose",
    titleYoruba: "Kristiani, Ma Wa Isinmi Sibẹ",
    key: "Eb Major",
    tempo: "Moderato",
    solfa: "s :s :l |s :m :d |r :m :f |m :- :- |",
    chords: "Eb - Ab Eb | Bb - Cm | Ab - Eb/Bb Bb | Eb - - |",
    verses: [
      {
        english: "Christian, seek not yet repose,\nHear thy guardian angel say;\nThou art in the midst of foes;\nWatch and pray.",
        yoruba: "Kristiani, ma wa isinmi sibẹ,\nGbọ ohun ti angeli oluso rẹ n sọ;\nO wa larin awon ọta;\nṢọra ki o si gbadura."
      },
      {
        english: "Principalities and powers,\nMustering their unseen array,\nWait for thy unguarded hours;\nWatch and pray.",
        yoruba: "Awon alagbara ati awon agbara,\nN ko ogun wọn ti a ko ri jọ,\nN duro de wakati ti o ko ṣọra;\nṢọra ki o si gbadura."
      }
    ]
  },
  {
    number: 42,
    title: "Christ the Lord Is Risen Today",
    titleYoruba: "Kristi Oluwa Ti Jinde Loni",
    key: "C Major",
    tempo: "Allegro Maestoso",
    solfa: "d :m :s |d' :t :l |s :l :s |f :m :- |\nd :m :s |l :s :f |m :r :r |d :- :- |",
    chords: "C - F C | G - Am | F - C/G G | C - - |",
    verses: [
      {
        english: "Christ the Lord is risen today, Hallelujah!\nSons of men and angels say: Hallelujah!\nRaise your joys and triumphs high, Hallelujah!\nSing, ye heavens, and earth reply: Hallelujah!",
        yoruba: "Kristi Oluwa ti jinde loni, Hallelujah!\nAwon ọmọ eniyan ati awon angeli n sọ: Hallelujah!\nGbe ayo ati iṣẹgun yin soke, Hallelujah!\nKorin, ẹyin ọrun, ki aiye si dahun: Hallelujah!"
      },
      {
        english: "Lives again our glorious King, Hallelujah!\nWhere, O death, is now thy sting? Hallelujah!\nOnce He died our souls to save, Hallelujah!\nWhere's thy victory, boasting grave? Hallelujah!",
        yoruba: "Ọba ogo wa ti tun gbe, Hallelujah!\nNibo, iku, ni ita rẹ nisiyi? Hallelujah!\nLẹẹkan O ku lati gba ọkan wa la, Hallelujah!\nNibo ni iṣẹgun rẹ, isà ti o n ṣogo? Hallelujah!"
      }
    ]
  },
  {
    number: 43,
    title: "Revive Thy Work, O Lord",
    titleYoruba: "Sọ Iṣẹ Rẹ Di Titun, Oluwa",
    key: "Bb Major",
    tempo: "Moderato",
    solfa: "d :m :s |s :f :m |r :m :f |m :- :- |",
    chords: "Bb - Eb Bb | F - Bb | Eb - Bb/F F | Bb - - |",
    verses: [
      {
        english: "Revive Thy work, O Lord,\nThy mighty arm make bare;\nSpeak with the voice that wakes the dead,\nAnd make Thy people hear.",
        yoruba: "Sọ iṣẹ Rẹ di titun, Oluwa,\nMu apa alagbara Rẹ han;\nSọrọ pelu ohun ti o ji awon oku dide,\nKi O si mu awon eniyan Rẹ gbọ."
      }
    ]
  },
  {
    number: 44,
    title: "Jesus Lives! Thy Terrors Now",
    titleYoruba: "Jesu Wà! Ẹru Rẹ Nisiyi",
    key: "D Major",
    tempo: "Allegro",
    solfa: "d :m :s |s :l :s |f :m :r |d :- :- |",
    chords: "D - G D | A - Bm | G - D/A A | D - - |",
    verses: [
      {
        english: "Jesus lives! thy terrors now\nCan no longer, death, appall us;\nJesus lives! by this we know\nThou, O grave, canst not enthrall us.",
        yoruba: "Jesu wà! ẹru rẹ nisiyi\nKo le dẹruba wa mọ, iku;\nJesu wà! nipa eyi a mọ\nIwọ, isà, ko le di wa mú."
      }
    ]
  },
  {
    number: 45,
    title: "Jerusalem on High",
    titleYoruba: "Jerusalemu Loke",
    key: "G Major",
    tempo: "Maestoso",
    solfa: "d :m :s |s :l :s |f :m :r |d :- :- |",
    chords: "G - C G | D - Em | C - G/D D | G - - |",
    verses: [
      {
        english: "Jerusalem on high,\nMy song and city is,\nMy home whene'er I die,\nThe centre of my bliss.",
        yoruba: "Jerusalemu loke,\nOrin mi ati ilu mi ni,\nIle mi nigbakugba ti mo ba ku,\nAarin ayo mi."
      },
      {
        english: "O happy place! When shall I be,\nMy God, with Thee, to see Thy face?",
        yoruba: "Ibi ayo! Nigba wo ni yio jẹ,\nỌlọrun mi, pelu Rẹ, lati ri oju Rẹ?"
      }
    ]
  },
  {
    number: 46,
    title: "Wonderful Story of Love",
    titleYoruba: "Itan Iyanu Ti Ifẹ",
    key: "F Major",
    tempo: "Allegretto",
    solfa: "d :m :f |s :l :s |f :m :r |d :- :- |",
    chords: "F - Bb F | C - Dm | Bb - F/C C | F - - |",
    verses: [
      {
        english: "Wonderful story of love;\nTell it to me again;\nWonderful story of love;\nWake the immortal strain!",
        yoruba: "Itan iyanu ti ifẹ;\nSọ fun mi lẹẹkansi;\nItan iyanu ti ifẹ;\nJi orin ainiku na!"
      },
      {
        english: "Wonderful story of love;\nThough you are far away;\nWonderful story of love;\nStill He doth call today.",
        yoruba: "Itan iyanu ti ifẹ;\nBi o tilẹ wa ni ọna jijin;\nItan iyanu ti ifẹ;\nSi bẹ O n pe loni."
      }
    ]
  },
  {
    number: 47,
    title: "When the Trumpet of the Lord Shall Sound",
    titleYoruba: "Nigba Ti Ipè Oluwa Ba Dun",
    key: "Ab Major",
    tempo: "Maestoso",
    solfa: "d :m :s |l :s :f |m :m :f |s :- :- |",
    chords: "Ab - Db Ab | Eb - Ab | Db - Ab/Eb Eb | Ab - - |",
    verses: [
      {
        english: "When the trumpet of the Lord shall sound,\nAnd time shall be no more,\nAnd the morning breaks, eternal, bright and fair;\nWhen the saved of earth shall gather over on the other shore,\nAnd the roll is called up yonder, I'll be there.",
        yoruba: "Nigba ti ipè Oluwa ba dun,\nTi akoko ko si mọ,\nTi owurọ ba tan, ayeraye, imọlẹ ati lẹwa;\nNigba ti awon ti a gba la ni aiye ba pejọ ni apa keji,\nTi a si pe orukọ loke, emi yio wa nibẹ."
      }
    ],
    chorus: {
      english: "When the roll is called up yonder,\nWhen the roll is called up yonder,\nWhen the roll is called up yonder,\nWhen the roll is called up yonder, I'll be there.",
      yoruba: "Nigba ti a pe orukọ loke,\nNigba ti a pe orukọ loke,\nNigba ti a pe orukọ loke,\nNigba ti a pe orukọ loke, emi yio wa nibẹ."
    }
  },
  {
    number: 48,
    title: "O My Comrade, See the Signal",
    titleYoruba: "Ẹgbẹ Mi, Wo Ami Naa",
    key: "Bb Major",
    tempo: "Allegro",
    solfa: "d :m :s |s :l :s |f :m :r |d :- :- |",
    chords: "Bb - Eb Bb | F - Gm | Eb - Bb/F F | Bb - - |",
    verses: [
      {
        english: "O my comrade, see the signal\nWaving in the sky!\nReinforcements now appearing,\nVictory is nigh!",
        yoruba: "Ẹgbẹ mi, wo ami naa\nTi o n fọwọ ni ọrun!\nẸgbẹ ogun titun ti farahan,\nIṣẹgun sunmọ!"
      }
    ],
    chorus: {
      english: "Hold the fort, for I am coming,\nJesus signals still;\nWave the answer back to heaven,\nBy Thy grace we will.",
      yoruba: "Mu odi naa mọ, nitori Mo n bọ,\nJesu si n fi ami han;\nFi idahun ranṣẹ pada si ọrun,\nNipa oore-ọfẹ Rẹ a o ṣe."
    }
  },
  {
    number: 49,
    title: "Be Glad in the Lord and Rejoice",
    titleYoruba: "Ẹ Yọ Ninu Oluwa Ki Ẹ Si Yọ",
    key: "G Major",
    tempo: "Allegro",
    solfa: "d :m :s |s :l :s |f :m :r |d :- :- |",
    chords: "G - C G | D - Em | C - G/D D | G - - |",
    verses: [
      {
        english: "Be glad in the Lord and rejoice,\nAll ye that are upright in heart;\nAnd ye that have made Him your choice,\nBid sadness and sorrow depart.",
        yoruba: "Ẹ yọ ninu Oluwa ki ẹ si yọ,\nGbogbo ẹyin ti ọkan yin tọ;\nAti ẹyin ti o ti yan Un,\nẸ jẹ ki ibanuje ati ẹdun kuro."
      }
    ]
  },
  {
    number: 50,
    title: "Just as God Who Reigns on High (II)",
    titleYoruba: "Gẹgẹ Bi Ọlọrun Ti Njọba Loke (II)",
    key: "C Major",
    tempo: "Andante",
    solfa: "d :m :s |s :l :s |f :m :r |d :- :- |",
    chords: "C - F C | G - Am | F - G | C - - |",
    verses: [
      {
        english: "Just as God who reigns on high\nSent His Son for man to die,\nSo we ought to live for Him\nEvery day and every hour within.",
        yoruba: "Gẹgẹ bi Ọlọrun ti njọba loke\nRan Ọmọ Rẹ fun eniyan lati ku,\nBẹẹ ni a gbọdọ gbe fun Un\nLọjọjumọ ati ni wakati kọọkan."
      }
    ]
  },
  {
    number: 51,
    title: "Yet There Is Room",
    titleYoruba: "Sibẹ Aye Wa",
    key: "F Major",
    tempo: "Andante",
    solfa: "d :m :f |s :l :s |f :m :r |d :- :- |",
    chords: "F - Bb F | C - Dm | Bb - F/C C | F - - |",
    verses: [
      {
        english: "Yet there is room! The Lamb's bright hall of song,\nWith its fair glory, beckons thee along;\nRoom, room, still room! O enter, enter now!",
        yoruba: "Sibẹ aye wa! Gbọngan orin imọlẹ Ọdọ-Agutan,\nPelu ogo lẹwa rẹ, n pe ọ lọ;\nAye, aye, si aye! Wọle, wọle nisiyi!"
      },
      {
        english: "Day is declining, and the sun is low;\nThe shadows lengthen, light makes haste to go;\nYet there is room! Still open stands the gate,\nThe great Physician waiteth: do not wait.",
        yoruba: "Ọjọ n rẹlẹ, oorun si wa ni isalẹ;\nAwon ojiji n gun, imọlẹ n yara lọ;\nSibẹ aye wa! Ẹnu-ọna si ṣi silẹ,\nOniṣegun nla n duro de: ma duro."
      }
    ]
  },
  {
    number: 52,
    title: "Art Thou Weary, Art Thou Languid",
    titleYoruba: "Njẹ O Rẹ, Njẹ O Ṣe Alailera",
    key: "Eb Major",
    tempo: "Adagio",
    solfa: "s :s :l |s :m :d |r :m :f |m :- :- |",
    chords: "Eb - Ab Eb | Bb - Cm | Ab - Eb/Bb Bb | Eb - - |",
    verses: [
      {
        english: "Art thou weary, art thou languid,\nArt thou sore distressed?\nCome to Me, saith One, and coming,\nBe at rest.",
        yoruba: "Njẹ o rẹ, njẹ o ṣe alailera,\nNjẹ o ni ipọnju gidigidi?\nWa sọdọ Mi, ni Ẹnikan sọ, ki o si wa,\nSinmi."
      }
    ]
  },
  {
    number: 53,
    title: "Shall We Gather at the River",
    titleYoruba: "Ṣe A O Pejọ Ni Odo",
    key: "D Major",
    tempo: "Allegretto",
    solfa: "d :m :s |s :l :s |f :m :r |d :- :- |",
    chords: "D - G D | A - Bm | G - D/A A | D - - |",
    verses: [
      {
        english: "Shall we gather at the river,\nWhere bright angel feet have trod,\nWith its crystal tide forever\nFlowing by the throne of God?",
        yoruba: "Ṣe a o pejọ ni odo,\nNibi ti ẹsẹ angeli didan ti tẹ,\nPelu ṣiṣan rẹ ti o mọ titi lai\nTi o n ṣan lẹgbẹ itẹ Ọlọrun?"
      }
    ],
    chorus: {
      english: "Yes, we'll gather at the river,\nThe beautiful, the beautiful river;\nGather with the saints at the river\nThat flows by the throne of God.",
      yoruba: "Bẹẹni, a o pejọ ni odo,\nOdo lẹwa, odo lẹwa;\nPejọ pelu awon enia mimo ni odo\nTi o n ṣan lẹgbẹ itẹ Ọlọrun."
    }
  },
  {
    number: 54,
    title: "We Speak of the Realms of the Blest",
    titleYoruba: "A N Sọ Nipa Ijọba Olubukun",
    key: "G Major",
    tempo: "Andante",
    solfa: "d :m :s |s :l :s |f :m :r |d :- :- |",
    chords: "G - C G | D - Em | C - G/D D | G - - |",
    verses: [
      {
        english: "We speak of the realms of the blest,\nThat country so bright and so fair,\nAnd oft are its glories confessed;\nBut what must it be to be there!",
        yoruba: "A n sọ nipa ijọba olubukun,\nIlu ti o mọ ati ti o lẹwa,\nNigbagbogbo ni a jẹwọ ogo rẹ;\nṢugbọn kini yio dabi lati wa nibẹ!"
      }
    ]
  },
  {
    number: 55,
    title: "I Want to Be Like Jesus",
    titleYoruba: "Mo Fẹ Dabi Jesu",
    key: "F Major",
    tempo: "Moderato",
    solfa: "d :m :f |s :l :s |f :m :r |d :- :- |",
    chords: "F - Bb F | C - Dm | Bb - F/C C | F - - |",
    verses: [
      {
        english: "I want to be like Jesus,\nSo lowly and so meek;\nFor no one marked an angry word\nThat ever heard Him speak.",
        yoruba: "Mo fẹ dabi Jesu,\nOnirẹlẹ ati oninuure bẹẹ;\nNitori ko si ẹnikan ti o ṣe akiyesi ọrọ ibinu\nTi o gbọ ni igba ti O sọrọ."
      },
      {
        english: "I want to be like Jesus,\nSo frequently in prayer;\nAlone upon the mountain top,\nHe met His Father there.",
        yoruba: "Mo fẹ dabi Jesu,\nTi o ma n gbadura nigbagbogbo;\nNikan lori oke giga,\nO pade Baba Rẹ nibẹ."
      }
    ]
  },
  {
    number: 56,
    title: "My Faith Looks Up to Thee",
    titleYoruba: "Igbagbọ Mi Wo Ọ Soke",
    key: "Eb Major",
    tempo: "Adagio",
    solfa: "d :m :s |l :s :f |m :f :s |f :m :r |",
    chords: "Eb - Ab Eb | Bb - Cm | Ab - Eb/Bb Bb | Eb - - |",
    verses: [
      {
        english: "My faith looks up to Thee,\nThou Lamb of Calvary,\nSavior divine!\nNow hear me while I pray,\nTake all my guilt away,\nO let me from this day\nBe wholly Thine!",
        yoruba: "Igbagbọ mi wo Ọ soke,\nỌdọ-Agutan Kalfari,\nOlugbala atọrunwa!\nNisiyi gbọ mi bi mo ti n gbadura,\nMu gbogbo ẹbi mi kuro,\nJẹ ki n di ti Rẹ patapata\nLati ọjọ yi lọ!"
      }
    ]
  },
  {
    number: 57,
    title: "Jerusalem on High (II)",
    titleYoruba: "Jerusalemu Loke (II)",
    key: "G Major",
    tempo: "Maestoso",
    solfa: "d :m :s |s :l :s |f :m :r |d :- :- |",
    chords: "G - C G | D - Em | C - G/D D | G - - |",
    verses: [
      {
        english: "Jerusalem on high,\nMy song and city is,\nMy home whene'er I die,\nThe centre of my bliss.",
        yoruba: "Jerusalemu loke,\nOrin ati ilu mi ni,\nIle mi nigbakugba ti mo ba ku,\nAarin ayo mi."
      }
    ]
  },
  {
    number: 58,
    title: "O Lord, My God (How Great Thou Art)",
    titleYoruba: "Oluwa, Ọlọrun Mi",
    key: "Bb Major",
    tempo: "Maestoso",
    solfa: "d :m :s |s :l :s |f :m :r |d :- :- |\nm :f :s |l :s :f |m :r :r |d :- :- |",
    chords: "Bb - Eb Bb | F - Gm | Eb - Bb/F F | Bb - - |",
    verses: [
      {
        english: "O Lord, my God, when I in awesome wonder,\nConsider all the worlds Thy Hands have made;\nI see the stars, I hear the rolling thunder,\nThy power throughout the universe displayed.",
        yoruba: "Oluwa, Ọlọrun mi, nigba ti mo ba wo iyanu,\nMo ronu gbogbo aiye ti Ọwọ Rẹ da;\nMo ri irawo, mo gbọ ara ti n yi,\nAgbara Rẹ ni gbogbo aiye han."
      }
    ],
    chorus: {
      english: "Then sings my soul, my Savior God, to Thee,\nHow great Thou art, how great Thou art.\nThen sings my soul, my Savior God, to Thee,\nHow great Thou art, how great Thou art!",
      yoruba: "Ọkan mi n korin, Ọlọrun Olugbala mi, fun Ọ,\nTobi to ni Iwọ, tobi to ni Iwọ.\nỌkan mi n korin, Ọlọrun Olugbala mi, fun Ọ,\nTobi to ni Iwọ, tobi to ni Iwọ!"
    }
  },
  {
    number: 59,
    title: "Nearer, My God, to Thee",
    titleYoruba: "Sunmọ, Ọlọrun Mi, Si Ọ",
    key: "G Major",
    tempo: "Adagio",
    solfa: "d :r :m |m :r :d |r :m :f |m :- :- |",
    chords: "G - C G | D - Em | C - G/D D | G - - |",
    verses: [
      {
        english: "Nearer, my God, to Thee,\nNearer to Thee!\nE'en though it be a cross\nThat raiseth me,\nStill all my song shall be,\nNearer, my God, to Thee.",
        yoruba: "Sunmọ, Ọlọrun mi, si Ọ,\nSunmọ si Ọ!\nBi o tilẹ jẹ agbelebu\nTi o gbe mi soke,\nSibẹsi orin mi yio jẹ,\nSunmọ, Ọlọrun mi, si Ọ."
      },
      {
        english: "Though like the wanderer,\nThe sun gone down,\nDarkness be over me,\nMy rest a stone;\nYet in my dreams I'd be\nNearer, my God, to Thee.",
        yoruba: "Bi alarinkiri,\nTi oorun ti wọ,\nOkunkun bo mi,\nOkuta ni isinmi mi;\nSibẹ ninu ala mi yio jẹ\nSunmọ, Ọlọrun mi, si Ọ."
      }
    ]
  },
  {
    number: 60,
    title: "The Great Physician Now Is Near",
    titleYoruba: "Oniṣẹgun Nla Sunmọ Nisiyi",
    key: "Ab Major",
    tempo: "Moderato",
    solfa: "d :m :s |l :s :f |m :f :s |f :m :r |",
    chords: "Ab - Db Ab | Eb - Ab | Db - Ab/Eb Eb | Ab - - |",
    verses: [
      {
        english: "The great Physician now is near,\nThe sympathizing Jesus;\nHe speaks the drooping heart to cheer,\nOh, hear the voice of Jesus.",
        yoruba: "Oniṣẹgun nla sunmọ nisiyi,\nJesu abanike;\nO n sọrọ lati tu ọkan ti o rẹlẹ ninu,\nGbọ ohun Jesu."
      }
    ],
    chorus: {
      english: "Sweetest note in seraph song,\nSweetest name on mortal tongue;\nSweetest carol ever sung,\nJesus, blessed Jesus.",
      yoruba: "Ohun ti o dun julo ninu orin serafu,\nOrukọ ti o dun julo lori ahọn eleda;\nOrin ti o dun julo ti a ti korin ri,\nJesu, Jesu olubukun."
    }
  },
  {
    number: 61,
    title: "Conquerors and Overcomers",
    titleYoruba: "Aṣẹgun Ati Abori",
    key: "D Major",
    tempo: "Allegro Maestoso",
    solfa: "d :m :s |s :l :s |f :m :r |d :- :- |",
    chords: "D - G D | A - Bm | G - D/A A | D - - |",
    verses: [
      {
        english: "Conquerors and overcomers now are we,\nThrough the precious blood of Christ we've victory;\nIf God be for us, who can be against?\nWe are more than conquerors through Him.",
        yoruba: "Aṣẹgun ati abori ni awa nisiyi,\nNipasẹ ẹjẹ iyebiye Kristi a ni iṣẹgun;\nBi Ọlọrun ba wa fun wa, tani o le di wa lodi?\nA ju aṣẹgun lo nipasẹ Rẹ."
      }
    ]
  },
  {
    number: 62,
    title: "O for a Thousand Tongues to Sing",
    titleYoruba: "Ẹgbẹrun Ahọn Lati Korin",
    key: "C Major",
    tempo: "Maestoso",
    solfa: "d :m :s |s :l :s |f :m :r |d :- :- |\nm :f :s |l :s :f |m :r :r |d :- :- |",
    chords: "C - F C | G - Am | F - C/G G | C - - |",
    verses: [
      {
        english: "O for a thousand tongues to sing\nMy great Redeemer's praise,\nThe glories of my God and King,\nThe triumphs of His grace!",
        yoruba: "Ẹgbẹrun ahọn lati korin\nIyin Olurande mi nla,\nOgo Ọlọrun mi ati Ọba mi,\nIṣẹgun oore-ọfẹ Rẹ!"
      },
      {
        english: "My gracious Master and my God,\nAssist me to proclaim,\nTo spread through all the earth abroad\nThe honors of Thy Name.",
        yoruba: "Oluwa oninurere mi ati Ọlọrun mi,\nRan mi lọwọ lati kede,\nLati tan ka gbogbo aiye\nỌla orukọ Rẹ."
      }
    ]
  },
  {
    number: 63,
    title: "Rock of Ages",
    titleYoruba: "Apata Ayeraye",
    key: "Bb Major",
    tempo: "Adagio",
    solfa: "d :m :s |s :f :m |r :m :f |m :- :- |",
    chords: "Bb - Eb Bb | F - Gm | Eb - Bb/F F | Bb - - |",
    verses: [
      {
        english: "Rock of Ages, cleft for me,\nLet me hide myself in Thee;\nLet the water and the blood,\nFrom Thy wounded side which flowed,\nBe of sin the double cure;\nSave from wrath and make me pure.",
        yoruba: "Apata ayeraye, ti a la fun mi,\nJẹ ki n fi ara mi pamọ ninu Rẹ;\nJẹ ki omi ati ẹjẹ,\nLati ẹgbẹ Rẹ ti o farapa ti o n ṣan,\nJẹ iwosan ilọpo meji ẹsẹ;\nGba lọwọ ibinu ki O si mu mi mọ."
      },
      {
        english: "Not the labors of my hands\nCan fulfill Thy law's demands;\nCould my zeal no respite know,\nCould my tears forever flow,\nAll for sin could not atone;\nThou must save, and Thou alone.",
        yoruba: "Ki i se isẹ ọwọ mi\nLe mu ofin Rẹ ṣẹ;\nBi itara mi ko ba sinmi,\nBi omije mi ba ṣan titi lai,\nGbogbo rẹ ko le ṣe etunṣe fun ẹsẹ;\nIwọ gbọdọ gba la, ati Iwọ nikan."
      }
    ]
  },
  {
    number: 64,
    title: "To God Be the Glory",
    titleYoruba: "Fun Ọlọrun Ni Ogo",
    key: "Ab Major",
    tempo: "Maestoso",
    solfa: "d :m :s |l :s :f |m :f :s |f :m :r |\nd :m :s |l :s :f |m :r :r |d :- :- |",
    chords: "Ab - Db Ab | Eb - Fm | Db - Ab/Eb Eb | Ab - - |",
    verses: [
      {
        english: "To God be the glory, great things He has done;\nSo loved He the world that He gave us His Son,\nWho yielded His life an atonement for sin,\nAnd opened the life gate that all may go in.",
        yoruba: "Fun Ọlọrun ni ogo, ohun nla ni O ti ṣe;\nO fẹ aiye tobẹẹ ti O fi Ọmọ Rẹ fun wa,\nTi O fi aye Rẹ silẹ gẹgẹ bi etunṣe fun ẹsẹ,\nO si ṣi ẹnu-ọna iye ki gbogbo wọn le wọle."
      }
    ],
    chorus: {
      english: "Praise the Lord, praise the Lord,\nLet the earth hear His voice!\nPraise the Lord, praise the Lord,\nLet the people rejoice!\nO come to the Father, through Jesus the Son,\nAnd give Him the glory, great things He has done.",
      yoruba: "Yin Oluwa, yin Oluwa,\nJẹ ki aiye gbọ ohun Rẹ!\nYin Oluwa, yin Oluwa,\nJẹ ki awon eniyan yọ!\nẸ wa sọdọ Baba, nipasẹ Jesu Ọmọ,\nKi ẹ si fun Un ni ogo, ohun nla ni O ti ṣe."
    }
  },
  {
    number: 65,
    title: "Praise, My Soul, the King of Heaven (II)",
    titleYoruba: "Yin, Ọkan Mi, Ọba Ọrun (II)",
    key: "D Major",
    tempo: "Maestoso",
    solfa: "d :m :s |s :l :s |f :m :r |d :- :- |",
    chords: "D - G D | A - Bm | G - D/A A | D - - |",
    verses: [
      {
        english: "Praise, my soul, the King of heaven;\nTo His feet thy tribute bring.\nRansomed, healed, restored, forgiven,\nEvermore His praises sing.",
        yoruba: "Yin, ọkan mi, Ọba ọrun;\nMu ọrẹ rẹ wa si ẹsẹ Rẹ.\nTi a ra pada, ti a wo san, ti a mu pada, ti a dari ji,\nMa korin iyin Rẹ titi lai."
      }
    ]
  },
  {
    number: 66,
    title: "O Come, All Ye Faithful",
    titleYoruba: "Ẹ Wá, Gbogbo Ẹyin Olọtitọ",
    key: "G Major",
    tempo: "Maestoso",
    solfa: "d :- :d |s :m :d |r :d :t, |d :- :- |\nm :m :f |s :s :l |s :f :m |r :- :- |",
    chords: "G - D G | C - G D | G - C G | D - G |",
    verses: [
      {
        english: "O come, all ye faithful,\nJoyful and triumphant;\nO come ye, O come ye to Bethlehem;\nCome and behold Him,\nBorn the King of Angels.",
        yoruba: "Ẹ wá, gbogbo ẹyin olọtitọ,\nAyọ ati aṣẹgun;\nẸ wá, ẹ wá si Betlehemu;\nẸ wá ki ẹ wo Oun,\nTi a bi ni Ọba Awon Angeli."
      }
    ],
    chorus: {
      english: "O come, let us adore Him,\nO come, let us adore Him,\nO come, let us adore Him,\nChrist the Lord.",
      yoruba: "Ẹ wá, jẹ ka jọsin fun Un,\nẸ wá, jẹ ka jọsin fun Un,\nẸ wá, jẹ ka jọsin fun Un,\nKristi Oluwa."
    }
  },
  {
    number: 67,
    title: "There Shall Be Showers of Blessing",
    titleYoruba: "Ojo Ibukun Yio Rọ",
    key: "Ab Major",
    tempo: "Moderato",
    solfa: "d :m :s |l :s :f |m :m :f |s :- :- |",
    chords: "Ab - Db Ab | Eb - Ab | Db - Ab/Eb Eb | Ab - - |",
    verses: [
      {
        english: "There shall be showers of blessing:\nThis is the promise of love;\nThere shall be seasons refreshing,\nSent from the Savior above.",
        yoruba: "Ojo ibukun yio rọ:\nEyi ni ileri ife;\nAkoko itunilara yio wa,\nTi a ran lati ọdọ Olugbala loke."
      }
    ],
    chorus: {
      english: "Showers of blessing,\nShowers of blessing we need:\nMercy-drops round us are falling,\nBut for the showers we plead.",
      yoruba: "Ojo ibukun,\nOjo ibukun ni a nilo:\nIṣu aanu n ṣubu yika wa,\nṢugbọn fun ojo ni a n bẹ."
    }
  },
  {
    number: 68,
    title: "All to Jesus I Surrender",
    titleYoruba: "Gbogbo Fun Jesu Mo Fi Silẹ",
    key: "Db Major",
    tempo: "Adagio",
    solfa: "d :m :s |l :s :f |m :f :s |f :m :r |\nd :m :s |l :s :f |m :r :r |d :- :- |",
    chords: "Db - Gb Db | Ab - Db | Gb - Db/Ab Ab | Db - - |",
    verses: [
      {
        english: "All to Jesus I surrender;\nAll to Him I freely give;\nI will ever love and trust Him,\nIn His presence daily live.",
        yoruba: "Gbogbo fun Jesu mo fi silẹ;\nGbogbo fun Un ni mo fi fun lọfẹ;\nEmi yio maa fẹ ati gbẹkẹle Rẹ,\nNinu wiwa Rẹ ni yio gbe lọjọjumọ."
      },
      {
        english: "All to Jesus I surrender;\nHumbly at His feet I bow,\nWorldly pleasures all forsaken;\nTake me, Jesus, take me now.",
        yoruba: "Gbogbo fun Jesu mo fi silẹ;\nPelu irẹlẹ ni ẹsẹ Rẹ mo wolẹ,\nIgbadun aiye gbogbo ni mo fi silẹ;\nGba mi, Jesu, gba mi nisiyi."
      }
    ],
    chorus: {
      english: "I surrender all, I surrender all,\nAll to Thee, my blessed Savior,\nI surrender all.",
      yoruba: "Mo fi gbogbo silẹ, mo fi gbogbo silẹ,\nGbogbo fun Ọ, Olugbala olubukun mi,\nMo fi gbogbo silẹ."
    }
  },
  {
    number: 69,
    title: "Hallelujah, Hallelujah, Hallelujah",
    titleYoruba: "Hallelujah, Hallelujah, Hallelujah",
    key: "D Major",
    tempo: "Allegro Maestoso",
    solfa: "d :m :s |d' :t :l |s :l :t |d' :- :- |\nd' :t :l |s :f :m |r :m :f |m :- :- |",
    chords: "D - G D | A - Bm | G - D/A A | D - - |",
    verses: [
      {
        english: "Hallelujah, hallelujah, hallelujah!\nPraise ye the Lord!\nHallelujah, hallelujah, hallelujah!\nPraise ye the Lord!",
        yoruba: "Hallelujah, hallelujah, hallelujah!\nẸ yin Oluwa!\nHallelujah, hallelujah, hallelujah!\nẸ yin Oluwa!"
      },
      {
        english: "For the Lord God omnipotent reigneth,\nHallelujah, hallelujah!\nThe kingdom of this world is become\nThe kingdom of our Lord and of His Christ.",
        yoruba: "Nitori Oluwa Ọlọrun alagbara njọba,\nHallelujah, hallelujah!\nIjọba aiye yi ti di\nIjọba Oluwa wa ati ti Kristi Rẹ."
      }
    ]
  }
];
