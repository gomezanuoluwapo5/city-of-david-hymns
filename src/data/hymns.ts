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
    solfa: `d d m m s s, l l l s f m
s s s s d d, s r s l s s
d d m m s s, l l l s f m
d s s l m, f r r d d`,
    chords: `D - - | Bm - A | D - G | D/A A7 D |
D - - | Bm - A | D - G | D/A A7 D |`,
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
    tempo: "Andante",
    solfa: `s s l s m d, r r m r d
s s l s m d, r r m d
m m f s l l, s f m r
s s l s m d, r r m d`,
    chords: "G - C G | D - G | G - C G | D7 - G |",
    verses: [
      {
        english: "Let us with a gladsome mind\nPraise the Lord, for He is kind;\nFor His mercies aye endure,\nEver faithful, ever sure.",
        yoruba: "E je ka fi ayo okan\nYin Oluwa, nitori O dara;\nNitori aanu Re wa titi,\nOlotito nigbagbogbo, o daju."
      },
      {
        english: "Let us blaze His Name abroad,\nFor of gods He is the God;\nFor His mercies aye endure,\nEver faithful, ever sure.",
        yoruba: "E je ka ke oruko Re kale,\nNitori O je Olorun awon olorun;\nNitori aanu Re wa titi,\nOlotito nigbagbogbo, o daju."
      },
      {
        english: "He with all-commanding might\nFilled the new-made world with light;\nFor His mercies aye endure,\nEver faithful, ever sure.",
        yoruba: "O fi agbara ti o lagbara ju\nKun aiye titun pelu imole;\nNitori aanu Re wa titi,\nOlotito nigbagbogbo, o daju."
      },
      {
        english: "He the golden-tressèd sun\nCaused all day his course to run;\nFor His mercies aye endure,\nEver faithful, ever sure.",
        yoruba: "O mu oorun ti o ni irun wura\nMa sare ipa re lojojumo;\nNitori aanu Re wa titi,\nOlotito nigbagbogbo, o daju."
      },
      {
        english: "And the hornèd moon at night,\nMid her spangled sisters bright;\nFor His mercies aye endure,\nEver faithful, ever sure.",
        yoruba: "Ati osupa ti o ni iwo ni oru,\nLarin awon arabinrin re ti o n tan;\nNitori aanu Re wa titi,\nOlotito nigbagbogbo, o daju."
      },
      {
        english: "All things living He doth feed,\nHis full hand supplies their need;\nFor His mercies aye endure,\nEver faithful, ever sure.",
        yoruba: "Ohun gbogbo alaye ni O n bo,\nOwo Re ti o kun n pese ohun ti won nilo;\nNitori aanu Re wa titi,\nOlotito nigbagbogbo, o daju."
      },
      {
        english: "Let us then with gladsome mind\nPraise the Lord, for He is kind;\nFor His mercies aye endure,\nEver faithful, ever sure.",
        yoruba: "E je ka fi ayo okan\nYin Oluwa, nitori O dara;\nNitori aanu Re wa titi,\nOlotito nigbagbogbo, o daju."
      }
    ]
  },
  {
    number: 3,
    title: "What Can Wash Away My Sins",
    titleYoruba: "Kini Le We Ese Mi Nu",
    key: "Ab Major",
    tempo: "Moderato",
    solfa: `d d d r m s m, d d d r m m r d
d d d r m s m, d d d r m m r d
s m r m s m, r r d r r m s
s m r m s m, d d d r m m r d`,
    chords: "Ab - Db Ab | Eb - Ab | Ab - Db Ab | Eb7 - Ab |",
    verses: [
      {
        english: "What can wash away my sin?\nNothing but the blood of Jesus;\nWhat can make me whole again?\nNothing but the blood of Jesus.",
        yoruba: "Kini le we ese mi nu?\nEje Jesu nikan ni;\nKini le mu mi pe mo?\nEje Jesu nikan ni."
      },
      {
        english: "For my pardon, this I see,\nNothing but the blood of Jesus;\nFor my cleansing this my plea,\nNothing but the blood of Jesus.",
        yoruba: "Fun idariji mi, eyi ni mo ri,\nEje Jesu nikan ni;\nFun imimonu mi eyi ni ebe mi,\nEje Jesu nikan ni."
      },
      {
        english: "Nothing can for sin atone,\nNothing but the blood of Jesus;\nNaught of good that I have done,\nNothing but the blood of Jesus.",
        yoruba: "Ko si ohun ti o le tunsise fun ese,\nEje Jesu nikan ni;\nKo si ohun rere ti mo ti se,\nEje Jesu nikan ni."
      },
      {
        english: "This is all my hope and peace,\nNothing but the blood of Jesus;\nThis is all my righteousness,\nNothing but the blood of Jesus.",
        yoruba: "Eyi ni gbogbo ireti ati alafia mi,\nEje Jesu nikan ni;\nEyi ni gbogbo ododo mi,\nEje Jesu nikan ni."
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
    solfa: `m m r d d r m s, l l s m r
m m r d d r m s, l l s m r
s s s l s m r d, m m r d r
m m r d d r m s, l l s m r`,
    chords: "Eb - Ab Eb | Bb7 - Eb | Ab - Eb Bb7 | Eb - - |",
    verses: [
      {
        english: "When we walk with the Lord\nIn the light of His word,\nWhat a glory He sheds on our way!\nWhile we do His good will,\nHe abides with us still,\nAnd with all who will trust and obey.",
        yoruba: "Nigba ti a ba rin pelu Oluwa\nNi imole oro Re,\nOgo wo ni O n tan si ona wa!\nNigba ti a ba se ife Re,\nO maa ba wa gbe,\nAti pelu gbogbo awon ti yio gbagbo ti yio si tele."
      },
      {
        english: "Not a shadow can rise,\nNot a cloud in the skies,\nBut His smile quickly drives it away;\nNot a doubt or a fear,\nNot a sigh or a tear,\nCan abide while we trust and obey.",
        yoruba: "Ko si ojiji ti o le dide,\nKo si awosanma ni orun,\nBikoSe ti erin Re yio le kuro ni kiakia;\nKo si iyemeji tabi iberu,\nKo si iyonu tabi omije,\nTi o le duro nigba ti a ba gbagbo ti a si tele."
      },
      {
        english: "Not a burden we bear,\nNot a sorrow we share,\nBut our toil He doth richly repay;\nNot a grief or a loss,\nNot a frown or a cross,\nBut is blest if we trust and obey.",
        yoruba: "Ko si eru ti a ru,\nKo si ibanuje ti a pin,\nSugbon ise wa ni O n san ni opolopo;\nKo si irora tabi pipadanu,\nKo si ibinu tabi agbelebu,\nBikoSe ibukun ti a ba gbagbo ti a si tele."
      },
      {
        english: "But we never can prove\nThe delights of His love\nUntil all on the altar we lay;\nFor the favor He shows,\nFor the joy He bestows,\nAre for them who will trust and obey.",
        yoruba: "Sugbon a ko le fi idi mu\nIdunnu ife Re\nTiti a fi gbe ohun gbogbo le ori pepe;\nNitori ojurere ti O fi han,\nNitori ayo ti O n fun,\nFun awon ti yio gbagbo ti yio si tele."
      },
      {
        english: "Then in fellowship sweet\nWe will sit at His feet,\nOr we'll walk by His side in the way;\nWhat He says we will do,\nWhere He sends we will go;\nNever fear, only trust and obey.",
        yoruba: "Nigbana ni idapomora didun\nA o joko ni ese Re,\nTabi a o rin lẹgbẹ Rẹ ni ona;\nOhun ti O ba sọ ni a o ṣe,\nIbi ti O ba ran wa ni a o lọ;\nMaṣe bẹru, gbagbo nikan ki o si tele."
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
    solfa: `d d r m m r d t, l l t d d t
d d r m m r d t, l l t d
m m f s s f m r, d d r m m r
d d r m m r d t, l l t d`,
    chords: `C - F C | G - Am | C/G - G | C - - |
C - F C | G - Am | C - G7 | C - - |`,
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
        english: "A thousand ages, in Thy sight,\nAre like an evening gone;\nShort as the watch that ends the night,\nBefore the rising sun.",
        yoruba: "Egberun odun, ni oju Re,\nDabi irole ti o ti kọja;\nKuru bi iso ti o pari oru,\nKi oorun to yo."
      },
      {
        english: "Time, like an ever rolling stream,\nBears all who breathe away;\nThey fly, forgotten, as a dream\nDies at the opening day.",
        yoruba: "Akoko, bi odo ti o n san titi,\nN gbe gbogbo awon ti n mi kuro;\nWon fo, ti a gbagbe, bi ala\nTi o ku ni ila oorun."
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
    solfa: `s s l s m d, r r m r d
s s l s m d, r r m d
m m f s l l, s f m r
s s l s m d, r r m d`,
    chords: "F - Bb F | C7 - F | Bb - F/C C7 | F - - |",
    verses: [
      {
        english: "Just obey, just obey,\nWhen the Lord commands you, just obey;\nNever stop to question, never pause to reason,\nWhen the Lord commands you, just obey.",
        yoruba: "Tele nikan, tele nikan,\nNigba ti Oluwa ba pase, tele nikan;\nMa duro lati bere, ma dake lati ronupiwada,\nNigba ti Oluwa ba pase, tele nikan."
      },
      {
        english: "Just obey, just obey,\nThough the path be rugged, just obey;\nHe will make the darkness light before thee,\nWhen the Lord commands you, just obey.",
        yoruba: "Tele nikan, tele nikan,\nBi ona ba ti le, tele nikan;\nYio mu okunkun di imole niwaju re,\nNigba ti Oluwa ba pase, tele nikan."
      },
      {
        english: "Just obey, just obey,\nThough the way seems lonely, just obey;\nHe who watches over Israel slumbers never,\nWhen the Lord commands you, just obey.",
        yoruba: "Tele nikan, tele nikan,\nBi ona ba dabi pe o da wa nikan, tele nikan;\nEniti o n ṣọ Israeli ko sun rara,\nNigba ti Oluwa ba pase, tele nikan."
      }
    ]
  },
  {
    number: 7,
    title: "O Worship the King",
    titleYoruba: "E Josin Fun Oba",
    key: "D Major",
    tempo: "Maestoso",
    solfa: `s d d r m, s d r t d
r m r d t, t d r d t l s
t d r m d l, f m r d s
s l t d r s, m l r t d`,
    chords: "D - G D | A7 - D | G - D/A A7 | D - - |",
    verses: [
      {
        english: "O worship the King, all-glorious above,\nO gratefully sing His power and His love;\nOur shield and Defender, the Ancient of Days,\nPavilioned in splendor, and girded with praise.",
        yoruba: "E josin fun Oba, ogo-nla loke,\nE korin oore fun agbara ati ife Re;\nAsabo ati Olugbeja wa, Arugbo Ojo,\nTi a de ni ogo, ti a si di pelu iyin."
      },
      {
        english: "O tell of His might, O sing of His grace,\nWhose robe is the light, whose canopy space,\nHis chariots of wrath the deep thunderclouds form,\nAnd dark is His path on the wings of the storm.",
        yoruba: "E so nipa agbara Re, e korin oore Re,\nEni ti aso re ni imole, ti ibori re ni sanma,\nKeke ibinu Re ni awon awosanma jinle n da,\nOkunkun si ni ona Re lori iye iji."
      },
      {
        english: "Thy bountiful care, what tongue can recite?\nIt breathes in the air, it shines in the light;\nIt streams from the hills, it descends to the plain,\nAnd sweetly distills in the dew and the rain.",
        yoruba: "Itoju Re oniruru, ahon wo le so re?\nO n mi ninu afefe, o n tan ninu imole;\nO n ṣan lati ori oke, o n sọkalẹ si pẹtẹlẹ,\nO si n rọ ni didun ninu iri ati ojo."
      },
      {
        english: "Frail children of dust, and feeble as frail,\nIn Thee do we trust, nor find Thee to fail;\nThy mercies, how tender, how firm to the end,\nOur Maker, Defender, Redeemer, and Friend!",
        yoruba: "Omo eruku alailera, ati arẹwẹsi bi alailera,\nNinu Re ni a gbẹkẹle, a ko si ri pe O kuna;\nAanu Re, bi o ṣe tutu to, bi o ṣe duro ṣinṣin titi de opin,\nEleda wa, Olugbeja, Olurande, ati Ore!"
      }
    ]
  },
  {
    number: 8,
    title: "O Happy Day",
    titleYoruba: "Ojo Ayo",
    key: "G Major",
    tempo: "Allegro",
    solfa: `d m s s l s, m m r d
d m s s l s, m r d
s s s s l s, m m r d
d m s s l s, m r d`,
    chords: "G - C G | D7 - G | C - G/D D7 | G - - |",
    verses: [
      {
        english: "O happy day that fixed my choice\nOn Thee, my Savior and my God!\nWell may this glowing heart rejoice,\nAnd tell its raptures all abroad.",
        yoruba: "Ojo ayo ti o fi ipinnu mi le\nLori Re, Olugbala mi ati Olorun mi!\nO ye ki okan gbigbona yi yo,\nKi o si so ayo re ni gbangba."
      },
      {
        english: "O happy bond, that seals my vows\nTo Him who merits all my love!\nLet cheerful anthems fill His house,\nWhile to that sacred shrine I move.",
        yoruba: "Adehun ayo, ti o fi edi mu eje mi\nFun Eni ti o ye ife mi gbogbo!\nJe ki orin ayo kun ile Re,\nNigba ti mo n lo si ibi ijosi mimo na."
      },
      {
        english: "'Tis done: the great transaction's done!\nI am my Lord's and He is mine;\nHe drew me and I followed on,\nCharmed to confess the voice divine.",
        yoruba: "O ti ṣe: iṣowo nla na ti ṣe!\nTi Oluwa mi ni mi, tire ni mi si jẹ;\nO fa mi, mo si tẹle,\nInudidun lati jẹwọ ohun atọrunwa."
      },
      {
        english: "Now rest, my long divided heart,\nFixed on this blissful center, rest;\nNor ever from thy Lord depart,\nWith Him of every good possessed.",
        yoruba: "Nisiyi sinmi, ọkan mi ti o ti pin pipẹ,\nTi o duro lori aarin ayọ yi, sinmi;\nMaṣe kuro lọdọ Oluwa rẹ,\nPẹlu Rẹ ti gbogbo ohun rere jẹ tirẹ."
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
    solfa: `d m s l s f m, r m f m r d
d m s l s f m, r m f m r d
m s l t d t l, s l t d
d m s l s f m, r m f m r d`,
    chords: "F - Bb F | C7 - F | Bb - C7 | F - - |",
    verses: [
      {
        english: "Through the love of God our Savior,\nAll will be well;\nFree and changeless is His favor,\nAll, all is well.",
        yoruba: "Nipa ife Olorun Olugbala wa,\nOhun gbogbo yio dara;\nOfe ati aiyipada ni ojurere Re,\nOhun gbogbo yio dara."
      },
      {
        english: "Though we pass through tribulation,\nAll will be well;\nOurs is such a full salvation,\nAll, all is well.",
        yoruba: "Bi a ba koja nipase wahala,\nOhun gbogbo yio dara;\nTiwa ni igbala ti o kun bayi,\nOhun gbogbo yio dara."
      },
      {
        english: "We expect a bright tomorrow;\nAll will be well;\nFaith can sing through days of sorrow,\nAll, all is well.",
        yoruba: "A n reti ola ti o mọlẹ;\nOhun gbogbo yio dara;\nIgbagbọ le korin nipasẹ ojo ibanuje,\nOhun gbogbo yio dara."
      },
      {
        english: "On our Father's love relying,\nJesus every need supplying;\nOr in living, or in dying,\nAll must be well.",
        yoruba: "Ti a fi ife Baba wa gbẹkẹle,\nJesu n pese ohun gbogbo ti a nilo;\nBoya ni gbigbe, tabi ni kiku,\nOhun gbogbo gbọdọ dara."
      }
    ]
  },
  {
    number: 10,
    title: "Not a Friend Like the Lowly Jesus",
    titleYoruba: "Ko Si Ore Bi Jesu Onirele",
    key: "Ab Major",
    tempo: "Moderato",
    solfa: `s f m r m s m, r r d r r m s
s f m r m s m, d d d r m m r d
s m r m s m, r r d r r m s
s m r m s m, d d d r m m r d`,
    chords: "Ab - Db Ab | Eb7 - Ab | Db - Ab/Eb Eb7 | Ab - - |",
    verses: [
      {
        english: "There's not a friend like the lowly Jesus,\nNo, not one! No, not one!\nNone else could heal all our soul's diseases,\nNo, not one! No, not one!",
        yoruba: "Ko si ore bi Jesu onirele,\nRara, ko si okan! Rara, ko si okan!\nKo si elomiran ti o le wo aisan okan wa san,\nRara, ko si okan! Rara, ko si okan!"
      },
      {
        english: "No friend like Him is so high and holy,\nNo, not one! No, not one!\nAnd yet no friend is so meek and lowly,\nNo, not one! No, not one!",
        yoruba: "Ko si ore bi Re ti o ga ati mimo,\nRara, ko si okan! Rara, ko si okan!\nSibẹ ko si ore ti o rẹlẹ ati oninu tutu,\nRara, ko si okan! Rara, ko si okan!"
      },
      {
        english: "There's not an hour that He is not near us,\nNo, not one! No, not one!\nNo night so dark but His love can cheer us,\nNo, not one! No, not one!",
        yoruba: "Ko si wakati ti ko wa nitosi wa,\nRara, ko si okan! Rara, ko si okan!\nKo si oru ti o sokunkun ti ife Re ko le tu wa ninu,\nRara, ko si okan! Rara, ko si okan!"
      },
      {
        english: "Did ever saint find this Friend forsake him?\nNo, not one! No, not one!\nOr sinner find that He would not take him?\nNo, not one! No, not one!",
        yoruba: "Njẹ ẹni mimo kan ri pe Ore yi fi i silẹ?\nRara, ko si okan! Rara, ko si okan!\nTabi ẹlẹsẹ ri pe ko fẹ gba a?\nRara, ko si okan! Rara, ko si okan!"
      },
      {
        english: "Was e'er a gift like the Savior given?\nNo, not one! No, not one!\nWill He refuse us a home in heaven?\nNo, not one! No, not one!",
        yoruba: "Njẹ ẹbun kan wa bi Olugbala ti a fi fun ni?\nRara, ko si okan! Rara, ko si okan!\nṢe yio kọ wa ile ni ọrun?\nRara, ko si okan! Rara, ko si okan!"
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
    solfa: `d d m s s, l l l s
f f m r r, m m r d
d d m s s, l l l s
f f m r r, m r d`,
    chords: "D - G D | Bm - Em A7 | D - G | D/A A7 D |",
    verses: [
      {
        english: "Great is Thy faithfulness, O God my Father;\nThere is no shadow of turning with Thee;\nThou changest not, Thy compassions, they fail not;\nAs Thou hast been, Thou forever wilt be.",
        yoruba: "Nla ni igbagbo Re, Olorun Baba mi;\nKo si ojiji iyipada lodo Re;\nIwo ko yipada, aanu Re ko kuna;\nBi O ti ri, bee ni yio ma ri titi."
      },
      {
        english: "Summer and winter and springtime and harvest,\nSun, moon, and stars in their courses above\nJoin with all nature in manifold witness\nTo Thy great faithfulness, mercy, and love.",
        yoruba: "Ooru ati otutu ati akoko irugbin ati ikore,\nOorun, osupa, ati irawo ninu ipa won loke\nDarapo mo eda gbogbo ni eri oniruru\nSi igbagbo nla Re, aanu, ati ife."
      },
      {
        english: "Pardon for sin and a peace that endureth,\nThine own dear presence to cheer and to guide;\nStrength for today and bright hope for tomorrow,\nBlessings all mine, with ten thousand beside!",
        yoruba: "Idariji fun ẹsẹ ati alafia ti o duro,\nWiwa ọwọn Tirẹ lati tu ninu ati lati tọ;\nAgbara fun oni ati ireti ti o mọlẹ fun ọla,\nIbukun gbogbo jẹ temi, pẹlu ẹgbẹrun mẹwa miran!"
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
    solfa: `d d r m m r, d t l l t d
d d r m f m r, d r m r d
m m f s s f, m r d d r m
d d r m m r, d t l l t d`,
    chords: "F - Bb F | C - Dm | Bb - F/C C7 | F - - |",
    verses: [
      {
        english: "Now thank we all our God,\nWith heart and hands and voices,\nWho wondrous things has done,\nIn whom His world rejoices;\nWho from our mothers' arms\nHas blessed us on our way\nWith countless gifts of love,\nAnd still is ours today.",
        yoruba: "E je ka dupe lowo Olorun wa,\nPelu okan ati owo ati ohun,\nEni ti o ti se ohun iyanu,\nEniti aiye Re n yo fun;\nEni ti lati apa iya wa\nTi bukun wa ni ona wa\nPelu ebun ife ti a ko le ka,\nTi o si jẹ tiwa loni."
      },
      {
        english: "O may this bounteous God\nThrough all our life be near us,\nWith ever joyful hearts\nAnd blessed peace to cheer us;\nAnd keep us in His grace,\nAnd guide us when perplexed;\nAnd free us from all ills,\nIn this world and the next!",
        yoruba: "Ki Olorun oninurere yi\nMaa wa nitosi wa ni gbogbo aye wa,\nPelu okan ayo nigbagbogbo\nAti alafia olubukun lati tu wa ninu;\nKi O si pa wa mo ninu oore-ọfẹ Rẹ,\nKi O si tọ wa nigba ti a ba daamu;\nKi O si da wa lọwọ gbogbo aisan,\nNi aiye yi ati ni eyi ti n bọ!"
      },
      {
        english: "All praise and thanks to God\nThe Father now be given;\nThe Son and Him who reigns\nWith Them in highest Heaven;\nThe one eternal God,\nWhom earth and Heaven adore;\nFor thus it was, is now,\nAnd shall be evermore.",
        yoruba: "Gbogbo iyin ati ope fun Olorun\nBaba ni a fi fun nisiyi;\nỌmọ ati Ẹni ti o jọba\nPẹlu Wọn ni Ọrun giga julọ;\nỌlọrun ayeraye kan,\nẸni ti aiye ati ọrun n jọsin fun;\nNitori bẹẹ ni o ti ri, o si ri nisiyi,\nYio si maa ri titi lai."
      }
    ]
  },
  {
    number: 13,
    title: "Abide with Me",
    titleYoruba: "Ba Mi Gbe",
    key: "Eb Major",
    tempo: "Adagio",
    solfa: `m m r d s l s, s f m
m m s l s f r, m fe s
m m r d s s f f m r
r m f m r d, f m r d`,
    chords: "Eb - Ab Eb | Cm - Fm Bb7 | Eb - Ab Eb | Cm - Bb7 Eb |",
    verses: [
      {
        english: "Abide with me; fast falls the eventide;\nThe darkness deepens; Lord, with me abide.\nWhen other helpers fail and comforts flee,\nHelp of the helpless, O abide with me.",
        yoruba: "Ba mi gbe; irole n ya ni kiakia;\nOkunkun n suru; Oluwa, ba mi gbe.\nNigba ti awon oluranlowo miran ba kuna ati itunu ba sa,\nIranlowo alainiranlowo, ba mi gbe."
      },
      {
        english: "Swift to its close ebbs out life's little day;\nEarth's joys grow dim; its glories pass away;\nChange and decay in all around I see;\nO Thou who changest not, abide with me.",
        yoruba: "Ni kiakia si opin re ojo kekere aye n lo;\nAyo aiye n rere; ogo re n koja lo;\nIyipada ati ibaje ni gbogbo ayika ni mo ri;\nIwo ti ko yipada, ba mi gbe."
      },
      {
        english: "I need Thy presence every passing hour.\nWhat but Thy grace can foil the tempter's power?\nWho, like Thyself, my guide and stay can be?\nThrough cloud and sunshine, Lord, abide with me.",
        yoruba: "Mo nilo wiwa Re ni wakati kookan ti o n kọja.\nKini bikoṣe oore-ọfẹ Re le ṣẹgun agbara adanwo?\nTa ni, bi Iwọ, ti o le jẹ oluto ati atilẹyin mi?\nNipasẹ awọsanma ati oorun, Oluwa, ba mi gbe."
      },
      {
        english: "I fear no foe, with Thee at hand to bless;\nIlls have no weight, and tears no bitterness.\nWhere is death's sting? Where, grave, thy victory?\nI triumph still, if Thou abide with me.",
        yoruba: "Emi ko bẹru ọta, pelu Iwọ ni ọwọ lati bukun;\nAisan ko ni iwuwo, omije ko si ni kikoro.\nNibo ni ita iku? Nibo, isà, ni iṣẹgun rẹ?\nMo ṣẹgun sibẹ, bi Iwọ ba ba mi gbe."
      },
      {
        english: "Hold Thou Thy cross before my closing eyes;\nShine through the gloom and point me to the skies.\nHeaven's morning breaks, and earth's vain shadows flee;\nIn life, in death, O Lord, abide with me.",
        yoruba: "Mu agbelebu Rẹ duro niwaju oju mi ti o n pa;\nTan nipasẹ okunkun ki O si tọka mi si ọrun.\nOwurọ ọrun ti la, ojiji asan aiye si ti salọ;\nNi iye, ni iku, Oluwa, ba mi gbe."
      }
    ]
  },
  {
    number: 14,
    title: "I'm Pressing on the Upward Way",
    titleYoruba: "Mo N Tẹsiwaju Ni Ona Oke",
    key: "G Major",
    tempo: "Allegro",
    solfa: `d d r m m r d, s s l s
d d r m m r d, s s l s
m m f s s f m, r d r m
d d r m m r d, s s l s`,
    chords: "G - C G | D7 - Em | C - G/D D7 | G - - |",
    verses: [
      {
        english: "I'm pressing on the upward way,\nNew heights I'm gaining every day;\nStill praying as I'm onward bound,\nLord, plant my feet on higher ground.",
        yoruba: "Mo n tesiwaju ni ona oke,\nGiga titun ni mo n de lojojumo;\nMo si n gbadura bi mo ti n tesiwaju,\nOluwa, fi ese mi le ilẹ giga."
      },
      {
        english: "My heart has no desire to stay\nWhere doubts arise and fears dismay;\nThough some may dwell where those abound,\nMy prayer, my aim, is higher ground.",
        yoruba: "Okan mi ko ni ifẹ lati duro\nNibi ti iyemeji dide ti iberu n dẹruba;\nBi awon kan ba gbe nibiti wọnni ti po,\nAdura mi, ero mi, ni ile giga."
      },
      {
        english: "I want to live above the world,\nThough Satan's darts at me are hurled;\nFor faith has caught the joyful sound,\nThe song of saints on higher ground.",
        yoruba: "Mo fẹ gbe loke aiye,\nBi Satani ba tilẹ ju ọfà si mi;\nNitori igbagbọ ti gba ohun ayo,\nOrin awon ẹni mimo lori ilẹ giga."
      },
      {
        english: "I want to scale the utmost height\nAnd catch a gleam of glory bright;\nBut still I'll pray till heaven I've found,\nLord, lead me on to higher ground.",
        yoruba: "Mo fẹ gun ibi giga julọ\nKi n si ri itanna ogo didan;\nṢugbọn mo ma gbadura titi ọrun yio fi de,\nOluwa, ṣe amọna mi si ilẹ giga."
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
    solfa: `d d r m m r, d t l l t d
d d r m f m r, d r m r d
m m f s s f, m r d d r m
d d r m m r, d t l l t d`,
    chords: "F - Bb F | C - Dm | Bb - F/C C7 | F - - |",
    verses: [
      {
        english: "Now thank we all our God,\nWith heart and hands and voices,\nWho wondrous things has done,\nIn whom His world rejoices;\nWho from our mothers' arms\nHas blessed us on our way\nWith countless gifts of love,\nAnd still is ours today.",
        yoruba: "Nisiyi e je ka dupẹ lowo Olorun wa,\nPelu okan ati owo ati ohun,\nEni ti o ti se ohun iyanu,\nEniti aiye Re n yo fun;\nEni ti lati apa iya wa\nTi bukun wa ni ona wa\nPelu ebun ife ti a ko le ka,\nTi o si jẹ tiwa loni."
      },
      {
        english: "O may this bounteous God\nThrough all our life be near us,\nWith ever joyful hearts\nAnd blessed peace to cheer us;\nAnd keep us still in grace,\nAnd guide us when perplexed;\nAnd free us from all ills,\nIn this world and the next!",
        yoruba: "Ki Olorun oninurere yi\nMaa wa nitosi wa ni gbogbo aye wa,\nPelu okan ayo nigbagbogbo\nAti alafia olubukun lati tu wa ninu;\nKi O si pa wa mo ninu oore-ọfẹ,\nKi O si tọ wa nigba ti a ba daamu;\nKi O si da wa lọwọ gbogbo aisan,\nNi aiye yi ati ni eyi ti n bọ!"
      }
    ]
  },
  {
    number: 16,
    title: "Begone Unbelief",
    titleYoruba: "Lọ, Aigbagbọ",
    key: "Bb Major",
    tempo: "Andante",
    solfa: `d d m s s l s, m r d
d d m s s l s, m r d
m m f s l s f, m r d
d d m s s l s, m r d`,
    chords: "Bb - Eb Bb | F7 - Bb | Eb - Bb/F F7 | Bb - - |",
    verses: [
      {
        english: "Begone, unbelief, my Savior is near,\nAnd for my relief will surely appear;\nBy prayer let me wrestle, and He will perform;\nWith Christ in the vessel, I smile at the storm.",
        yoruba: "Lọ, aigbagbọ, Olugbala mi wa nitosi,\nFun itunu mi yio han dajudaju;\nNipa adura je ki n ja, On yio si se;\nPelu Kristi ninu okọ, mo rerin si iji."
      },
      {
        english: "Though dark be my way, since He is my guide,\n'Tis mine to obey, 'tis His to provide;\nThough cisterns be broken, and creatures all fail,\nThe word He has spoken shall surely prevail.",
        yoruba: "Bi ona mi ba sokunkun, niwon igba ti O je oluto mi,\nTi emi ni lati tele, ti Re ni lati pese;\nBi ikoko ba fo, ati eda ba kuna,\nOro ti O ti so yio dajudaju bori."
      },
      {
        english: "His love in time past forbids me to think\nHe'll leave me at last in trouble to sink;\nEach sweet Ebenezer I have in review\nConfirms His good pleasure to help me quite through.",
        yoruba: "Ifẹ Rẹ ni igba atijọ ko jẹ ki n ro\nPe yio fi mi silẹ nikẹhin ninu wahala lati rì;\nEbeneseri didun kọọkan ti mo ni ni atunyẹwo\nFi idi mu idunnu Rẹ lati ran mi lọwọ patapata."
      },
      {
        english: "Since all that I meet shall work for my good,\nThe bitter is sweet, the medicine food;\nThough painful at present, 'twill cease before long,\nAnd then, O how pleasant the conqueror's song!",
        yoruba: "Niwọn bi ohun gbogbo ti mo ba pade yio ṣiṣẹ fun rere mi,\nKikoro di didun, oogun di ounjẹ;\nBi o tilẹ n dun nisiyi, yio dẹkun laipẹ,\nNigbana, o didun to ni orin aṣẹgun!"
      }
    ]
  },
  {
    number: 17,
    title: "There's a Stranger at the Door",
    titleYoruba: "Alejò Kan Wà Ni Ẹnu Ilẹkun",
    key: "G Major",
    tempo: "Moderato",
    solfa: `s s s s l s m, s s s s l s
s s s s l s m, s s f m r d
d d d d r d t, d d d d r d
s s s s l s m, s s f m r d`,
    chords: "G - C G | D7 - G | C - G/D D7 | G - - |",
    verses: [
      {
        english: "There's a Stranger at the door,\nLet Him in;\nHe has been there oft before,\nLet Him in;\nLet Him in, ere He is gone,\nLet Him in, the Holy One,\nJesus Christ, the Father's Son,\nLet Him in.",
        yoruba: "Alejò kan wà ni ẹnu ilẹkun,\nẸ je ki o wọle;\nO ti wa nibẹ nigba pupọ ri,\nẸ je ki o wọle;\nẸ je ki o wọle, ki o to lọ,\nẸ je ki Ẹni Mimo wọle,\nJesu Kristi, Ọmọ Baba,\nẸ je ki o wọle."
      },
      {
        english: "Open now to Him your heart,\nLet Him in;\nIf you wait He will depart,\nLet Him in;\nLet Him in, He is your Friend,\nHe your soul will sure defend,\nHe will keep you to the end,\nLet Him in.",
        yoruba: "Si okan re fun un nisiyi,\nẸ je ki o wọle;\nBi o ba duro dẹ yio lọ,\nẸ je ki o wọle;\nẸ je ki o wọle, Ore rẹ ni,\nYio daabobo ọkan rẹ dajudaju,\nYio pa ọ mọ titi de opin,\nẸ je ki o wọle."
      },
      {
        english: "Hear you now His loving voice?\nLet Him in;\nNow, oh, now make Him your choice,\nLet Him in;\nHe is standing at the door,\nJoy to you He will restore,\nAnd His Name you will adore,\nLet Him in.",
        yoruba: "Ṣe o n gbọ ohun ifẹ Rẹ?\nẸ je ki o wọle;\nNisiyi, yan Un nisiyi,\nẸ je ki o wọle;\nO duro ni ẹnu ilẹkun,\nAyọ ni yio mu pada fun ọ,\nOrukọ Rẹ ni yio si jọsin fun,\nẸ je ki o wọle."
      },
      {
        english: "Now admit the heavenly Guest,\nLet Him in;\nHe will make for you a feast,\nLet Him in;\nHe will speak your sins forgiven,\nAnd when earth ties all are riven,\nHe will take you home to heaven,\nLet Him in.",
        yoruba: "Gba alejo ọrun wọle nisiyi,\nẸ je ki o wọle;\nYio ṣe ase fun ọ,\nẸ je ki o wọle;\nYio sọ pe a ti dariji ẹsẹ rẹ,\nNigba ti asopọ aiye ba ya,\nYio mu ọ lọ si ile ni ọrun,\nẸ je ki o wọle."
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
    solfa: `d d r m s s l, s f m r d
d d r m s s l, s f m r d
m f s l s f m, r d r m
d d r m s s l, s f m r d`,
    chords: "C - F C | G7 - Am | F - G7 | C - - |",
    verses: [
      {
        english: "Just as God who reigns on high\nSent His Son for man to die,\nSo we ought to live and love,\nFollowing patterns from above.",
        yoruba: "Gẹgẹ bi Ọlọrun ti njọba loke\nRan Ọmọ Rẹ fun eniyan lati ku,\nBẹẹ ni a gbọdọ gbé àti nífẹ,\nTẹle apere lati oke."
      },
      {
        english: "He who sits upon the throne\nCalls us each to be His own;\nLet us answer to His call,\nGiving Him our life, our all.",
        yoruba: "Ẹni ti o joko lori itẹ\nN pe wa kọọkan lati jẹ tirẹ;\nẸ jẹ ka dahun si ipe Rẹ,\nKa fi aye wa, ohun gbogbo fun Un."
      }
    ]
  },
  {
    number: 19,
    title: "Stand Up, Stand Up for Jesus",
    titleYoruba: "Ẹ Dide, Ẹ Dide Fun Jesu",
    key: "Bb Major",
    tempo: "Maestoso",
    solfa: `s d d m d d l, d s r r m r
s d d m d d l, d s d m r d
d r r d r m m, m f m l r d t
s d d m d d l, d s d m r d`,
    chords: "Bb - Eb Bb | F7 - Bb | Eb - Bb/F F7 | Bb - - |",
    verses: [
      {
        english: "Stand up, stand up for Jesus,\nYe soldiers of the cross;\nLift high His royal banner,\nIt must not suffer loss.\nFrom victory unto victory\nHis army shall He lead,\nTill every foe is vanquished,\nAnd Christ is Lord indeed.",
        yoruba: "Ẹ dide, ẹ dide fun Jesu,\nẸyin omo ogun agbelebu;\nẸ gbe asia ọba Re soke,\nKo gbọdọ jiya pipadanu.\nLati iṣẹgun si iṣẹgun\nOgun Rẹ ni yio ṣe amọna,\nTiti gbogbo ọta yio fi ṣẹgun,\nKristi si jẹ Oluwa nitootọ."
      },
      {
        english: "Stand up, stand up for Jesus,\nThe trumpet call obey;\nForth to the mighty conflict,\nIn this His glorious day.\nYe that are brave now serve Him\nAgainst unnumbered foes;\nLet courage rise with danger,\nAnd strength to strength oppose.",
        yoruba: "Ẹ dide, ẹ dide fun Jesu,\nẸ tele ipe ipè;\nJade si ogun nla,\nNi ojo ogo Re yi.\nẸyin ti o ni igboya ṣiṣẹ fun Un nisiyi\nSi awon ọta ti a ko le ka;\nJẹ ki igboya pọ si pelu ewu,\nAti ki agbara doju agbara kọ."
      },
      {
        english: "Stand up, stand up for Jesus,\nStand in His strength alone;\nThe arm of flesh will fail you,\nYe dare not trust your own.\nPut on the Gospel armor,\nEach piece put on with prayer;\nWhere duty calls or danger,\nBe never wanting there.",
        yoruba: "Ẹ dide, ẹ dide fun Jesu,\nẸ duro ninu agbara Rẹ nikan;\nApa ara yio kuna fun yin,\nẸ ko gbọdọ gbẹkẹle tirẹ.\nẸ wọ aṣọ ogun Ihinrere,\nẸ wọ ọkọọkan pelu adura;\nIbi ti iṣẹ pe tabi ewu,\nMa ṣe kuna nibẹ."
      },
      {
        english: "Stand up, stand up for Jesus,\nThe strife will not be long;\nThis day the noise of battle,\nThe next the victor's song.\nTo those who vanquish evil\nA crown of life shall be;\nThey with the King of Glory\nShall reign eternally.",
        yoruba: "Ẹ dide, ẹ dide fun Jesu,\nIja na ko ni pẹ;\nLoni ariwo ogun,\nOla orin aṣẹgun.\nFun awon ti o ṣẹgun ibi\nAde iye ni yio jẹ;\nWọn pẹlu Ọba Ogo\nYio jọba titi lai."
      }
    ]
  },
  {
    number: 20,
    title: "Jesus Calls Us O'er the Tumult",
    titleYoruba: "Jesu N Pe Wa Lori Ariwo",
    key: "D Major",
    tempo: "Moderato",
    solfa: `d d d r m m, m f m r d t d
d d d r m r, r m r d t l s
s s s l t d, d t l s l t
d d d r m m, m f m r d`,
    chords: "D - G D | A7 - Bm | G - D/A A7 | D - - |",
    verses: [
      {
        english: "Jesus calls us o'er the tumult\nOf our life's wild, restless sea;\nDay by day His sweet voice soundeth,\nSaying, 'Christian, follow Me!'",
        yoruba: "Jesu n pe wa lori ariwo\nOkun aye wa ti o n ja lile;\nOjọ de ojo ohun didun Re n dun,\nO n wi pe, 'Kristiani, tele Mi!'"
      },
      {
        english: "As of old Saint Andrew heard it\nBy the Galilean lake,\nTurned from home and toil and kindred,\nLeaving all for His dear sake.",
        yoruba: "Bi Anderu atijọ ti gbọ\nLẹgbẹ adagun Galili,\nO yipada kuro ni ile ati iṣẹ ati ibatan,\nO fi gbogbo silẹ nitori Rẹ."
      },
      {
        english: "Jesus calls us from the worship\nOf the vain world's golden store;\nFrom each idol that would keep us,\nSaying, 'Christian, love Me more!'",
        yoruba: "Jesu n pe wa kuro ninu ijọsin\nOro wura aiye asan;\nKuro lodo oriSa kookan ti yio da wa duro,\nO n wi pe, 'Kristiani, fẹ Mi ju!'"
      },
      {
        english: "In our joys and in our sorrows,\nDays of toil and hours of ease,\nStill He calls, in cares and pleasures,\nChristian, love Me more than these.",
        yoruba: "Ninu ayọ wa ati ninu ibanuje wa,\nOjọ iṣẹ ati wakati isinmi,\nSi bẹ O n pe, ninu aniyan ati idunnu,\nKristiani, fẹ Mi ju iwọnyi lọ."
      },
      {
        english: "Jesus calls us! By Thy mercies,\nSavior, make us hear Thy call,\nGive our hearts to Thine obedience,\nServe and love Thee best of all.",
        yoruba: "Jesu n pe wa! Nipa aanu Rẹ,\nOlugbala, mu wa gbọ ipe Rẹ,\nFi okan wa fun igboran si Ọ,\nSin ki a si fẹ Ọ ju gbogbo lọ."
      }
    ]
  },
  {
    number: 21,
    title: "Take My Life and Let It Be",
    titleYoruba: "Gba Aye Mi Ki O Si Je",
    key: "C Major",
    tempo: "Andante",
    solfa: `d r m d m r, d r m s m r
d r m d m r, d r m f m
m f s m s f, m f s d t l
d r m d m r, d r m r d`,
    chords: "C - F C | Am - G | F - C/G G7 | C - - |",
    verses: [
      {
        english: "Take my life and let it be\nConsecrated, Lord, to Thee.\nTake my moments and my days,\nLet them flow in ceaseless praise.",
        yoruba: "Gba aye mi ki o si je\nMimo, Oluwa, fun O.\nGba akoko mi ati ojo mi,\nJe ki won san ni iyin ailododo."
      },
      {
        english: "Take my hands and let them move\nAt the impulse of Thy love.\nTake my feet and let them be\nSwift and beautiful for Thee.",
        yoruba: "Gba owo mi ki o je ki won sisẹ\nNi itara ife Re.\nGba ese mi ki o je ki won je\nKiakia ati lẹwa fun O."
      },
      {
        english: "Take my voice and let me sing,\nAlways, only for my King.\nTake my lips and let them be\nFilled with messages from Thee.",
        yoruba: "Gba ohun mi ki o jẹ ki n korin,\nNigbagbogbo, fun Ọba mi nikan.\nGba ete mi ki o jẹ ki wọn\nKun fun ifiranṣẹ lati ọdọ Rẹ."
      },
      {
        english: "Take my silver and my gold,\nNot a mite would I withhold.\nTake my intellect and use\nEvery power as Thou shalt choose.",
        yoruba: "Gba fadaka ati wura mi,\nEmi ko fẹ fi eyo kan pamọ.\nGba ọgbọn mi ki O si lo\nAgbara kọọkan bi O ba ti yan."
      },
      {
        english: "Take my will and make it Thine,\nIt shall be no longer mine.\nTake my heart, it is Thine own,\nIt shall be Thy royal throne.",
        yoruba: "Gba ifẹ mi ki O sọ di Tirẹ,\nKo ni jẹ temi mọ.\nGba ọkan mi, Tirẹ ni,\nYio jẹ itẹ ọba Rẹ."
      },
      {
        english: "Take my love, my Lord, I pour\nAt Thy feet its treasure store.\nTake myself and I will be\nEver, only, all for Thee.",
        yoruba: "Gba ifẹ mi, Oluwa mi, mo da\nNi ẹsẹ Rẹ ibi ipamọ rẹ.\nGba emi tikararẹ emi yio si jẹ\nTiti lai, nikan, gbogbo fun Ọ."
      }
    ]
  },
  {
    number: 22,
    title: "Jesus, I My Cross Have Taken",
    titleYoruba: "Jesu, Mo Ti Gbe Agbelebu Mi",
    key: "Eb Major",
    tempo: "Moderato",
    solfa: `d m s l s f m, r m f m r d
d m s l s f m, r m f m r d
m s l t d t l, s l t d
d m s l s f m, r m f m r d`,
    chords: "Eb - Ab Eb | Bb7 - Cm | Ab - Eb/Bb Bb7 | Eb - - |",
    verses: [
      {
        english: "Jesus, I my cross have taken,\nAll to leave and follow Thee;\nDestitute, despised, forsaken,\nThou, from hence, my all shalt be.\nPerish every fond ambition,\nAll I've sought and hoped and known;\nYet how rich is my condition,\nGod and Heaven are still my own!",
        yoruba: "Jesu, mo ti gbe agbelebu mi,\nLati fi gbogbo silẹ lati tele O;\nAláìní, ẹgàn, àìjẹ,\nIwọ, lati isisiyi, gbogbo mi ni yio je.\nJẹ ki ireti kookan parun,\nGbogbo ti mo wa ati ti mo nireti;\nSibẹ bi ipo mi ti pọn to,\nOlorun ati Ọrun si jẹ temi!"
      },
      {
        english: "Let the world despise and leave me,\nThey have left my Savior, too;\nHuman hearts and looks deceive me;\nThou art not, like man, untrue.\nAnd, while Thou shalt smile upon me,\nGod of wisdom, love and might,\nFoes may hate, and friends may shun me;\nShow Thy face, and all is bright.",
        yoruba: "Jẹ ki aiye ẹgan ki o fi mi silẹ,\nWọn ti fi Olugbala mi silẹ paapaa;\nỌkan eniyan ati oju wọn tan mi jẹ;\nIwọ ko ri, bi eniyan, eke.\nAti, nigba ti O ba rẹrin si mi,\nỌlọrun ọgbọn, ifẹ ati agbara,\nỌta le korira, ọrẹ le yago fun mi;\nFi oju Rẹ han, ohun gbogbo yio si mọlẹ."
      },
      {
        english: "Man may trouble and distress me,\n'Twill but drive me to Thy breast;\nLife with trials hard may press me,\nHeaven will bring me sweeter rest.\nO 'tis not in grief to harm me\nWhile Thy love is left to me;\nO 'twere not in joy to charm me,\nWere that joy unmixed with Thee.",
        yoruba: "Eniyan le yọ mi lẹnu ati damu mi,\nYio kan le mi si àyà Rẹ;\nAye pelu idanwo le tẹ mi mọlẹ,\nỌrun yio mu isinmi didun wa.\nKo si ninu ibanuje lati ṣe mi ni ipalara\nNigba ti ifẹ Rẹ ku fun mi;\nKo si ninu ayọ lati wu mi,\nBi ayọ na ko ba dapọ pẹlu Rẹ."
      }
    ]
  },
  {
    number: 23,
    title: "The Voice That Breathed O'er Eden",
    titleYoruba: "Ohun Ti O Mi Sori Edeni",
    key: "F Major",
    tempo: "Andante",
    solfa: `d d r m m r d, t l l t d
d d r m m r d, r m r d
m m f s s f m, r d r m
d d r m m r d, t l l t d`,
    chords: "F - Bb F | C7 - Dm | Bb - F/C C7 | F - - |",
    verses: [
      {
        english: "The voice that breathed o'er Eden,\nThat earliest wedding day,\nThe primal marriage blessing,\nIt hath not passed away.",
        yoruba: "Ohun ti o mi sori Edeni,\nOjo igbeyawo akoko na,\nIbukun igbeyawo akoko,\nKo ti koja lo."
      },
      {
        english: "Still in the pure espousal\nOf Christian man and maid,\nThe Holy Three are with us,\nThe threefold grace is said.",
        yoruba: "Si ninu igbeyawo mimo\nTi ọkunrin ati obinrin Kristiani,\nMẹtalokan Mimo wa pẹlu wa,\nOore-ọfẹ mẹtalọkan ni a sọ."
      },
      {
        english: "Be present, Holy Father,\nTo give away the bride,\nAs Eve Thou gavest to Adam\nOut of his own pierced side.",
        yoruba: "Wa, Baba Mimo,\nLati fi iyawo fun ọkọ,\nBi O ti fi Efa fun Adamu\nLati inu ẹgbẹ rẹ ti a gun."
      },
      {
        english: "Be present, Son of Mary,\nTo join their loving hands,\nAs Thou didst bind two natures\nIn Thine eternal bands.",
        yoruba: "Wa, Ọmọ Maria,\nLati so ọwọ ifẹ wọn papọ,\nBi O ti so ẹda meji\nNi okun ayeraye Rẹ."
      }
    ]
  },
  {
    number: 24,
    title: "Jesus, We Are Assembled",
    titleYoruba: "Jesu, A Ti Pejọ",
    key: "G Major",
    tempo: "Moderato",
    solfa: `d d m s s l s, m r d
d d m s s l s, m r d
m m f s l s f, m r d
d d m s s l s, m r d`,
    chords: "G - C G | D7 - Em | C - G/D D7 | G - - |",
    verses: [
      {
        english: "Jesus, we are assembled,\nIn Thy Name we meet;\nBless us with Thy presence,\nMake our joy complete.",
        yoruba: "Jesu, a ti pejọ,\nNi oruko Re ni a pade;\nBukun wa pelu wiwa Re,\nMu ayo wa pe."
      },
      {
        english: "Fill our hearts with gladness,\nChase away all fear;\nIn Thy loving presence,\nHeaven seems so near.",
        yoruba: "Kun okan wa pelu ayo,\nLe iberu kuro;\nNinu wiwa ife Re,\nOrun dabi pe o sunmọ."
      },
      {
        english: "Send Thy Holy Spirit,\nLet Him fill this place;\nWith Thy power and glory,\nShower us with grace.",
        yoruba: "Ran Ẹmi Mimo Rẹ,\nJẹ ki O kun ibi yi;\nPẹlu agbara ati ogo Rẹ,\nRọ oore-ọfẹ si wa."
      }
    ]
  },
  {
    number: 25,
    title: "Jesus Loves Me, This I Know",
    titleYoruba: "Jesu Fẹ Mi, Eyi Ni Mo Mọ",
    key: "C Major",
    tempo: "Allegretto",
    solfa: `s f m r, m s s
l l d' l, l s s
s f m r, m s s
l l s, d m r d`,
    chords: "C - - | F - C | G7 - C | F - G7 C |",
    verses: [
      {
        english: "Jesus loves me! This I know,\nFor the Bible tells me so;\nLittle ones to Him belong;\nThey are weak, but He is strong.",
        yoruba: "Jesu fẹ mi! Eyi ni mo mọ,\nNitori Bibeli sọ fun mi bẹẹ;\nAwon ọmọ kekere jẹ tire;\nWọn ailera, sugbon On lagbara."
      },
      {
        english: "Jesus loves me! He who died\nHeaven's gate to open wide;\nHe will wash away my sin,\nLet His little child come in.",
        yoruba: "Jesu fẹ mi! Eni ti o ku\nLati si ẹnu-ọna ọrun silẹ;\nYio wẹ ẹsẹ mi nu,\nJẹ ki ọmọ kekere Rẹ wọle."
      },
      {
        english: "Jesus loves me! He will stay\nClose beside me all the way;\nThou hast bled and died for me,\nI will henceforth live for Thee.",
        yoruba: "Jesu fẹ mi! Yio duro\nNitosi mi ni gbogbo ona;\nO ti ta ẹjẹ o si ku fun mi,\nEmi yio gbe fun Ọ lati isisiyi lọ."
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
    solfa: `d d d r m s m, d d d r m m r d
d d d r m s m, d d d r m m r d
s m r m s m, r r d r r m s
s m r m s m, d d d r m m r d`,
    chords: "Ab - Db Ab | Eb7 - Ab | Db - Ab/Eb Eb7 | Ab - - |",
    verses: [
      {
        english: "What can wash away my sin?\nNothing but the blood of Jesus;\nWhat can make me whole again?\nNothing but the blood of Jesus.",
        yoruba: "Kini le wẹ ẹsẹ mi nu?\nẸjẹ Jesu nikan ni;\nKini le mu mi pe mọ?\nẸjẹ Jesu nikan ni."
      },
      {
        english: "For my pardon, this I see,\nNothing but the blood of Jesus;\nFor my cleansing this my plea,\nNothing but the blood of Jesus.",
        yoruba: "Fun idariji mi, eyi ni mo ri,\nẸjẹ Jesu nikan ni;\nFun iwẹnu mi eyi ni ẹbẹ mi,\nẸjẹ Jesu nikan ni."
      },
      {
        english: "Nothing can for sin atone,\nNothing but the blood of Jesus;\nNaught of good that I have done,\nNothing but the blood of Jesus.",
        yoruba: "Ko si ohun ti o le tunsise fun ẹsẹ,\nẸjẹ Jesu nikan ni;\nKo si ohun rere ti mo ti ṣe,\nẸjẹ Jesu nikan ni."
      },
      {
        english: "This is all my hope and peace,\nNothing but the blood of Jesus;\nThis is all my righteousness,\nNothing but the blood of Jesus.",
        yoruba: "Eyi ni gbogbo ireti ati alafia mi,\nẸjẹ Jesu nikan ni;\nEyi ni gbogbo ododo mi,\nẸjẹ Jesu nikan ni."
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
    solfa: `d d r m m r, d t l l t d
d d r m f m r, d r m r d
m m f s s f, m r d d r m
d d r m m r, d t l l t d`,
    chords: "Dm - Gm Dm | A7 - Dm | Gm - Dm/A A7 | Dm - - |",
    verses: [
      {
        english: "Thy kingdom come, O God,\nThy rule, O Christ, begin;\nBreak with Thine iron rod\nThe tyrannies of sin.",
        yoruba: "Ijọba Rẹ de, Ọlọrun,\nIjọba Rẹ, Kristi, bẹrẹ;\nFi ọpa irin Rẹ fọ\nIjọba ẹsẹ."
      },
      {
        english: "Where is Thy reign of peace\nAnd purity and love?\nWhen shall all hatred cease,\nAs in the realms above?",
        yoruba: "Nibo ni ijọba alaafia Re\nAti mimọ ati ifẹ?\nNigba wo ni ikorira gbogbo yio dẹkun,\nBi ninu ijọba oke?"
      },
      {
        english: "When comes the promised time\nThat war shall be no more,\nAnd lust, oppression, crime,\nShall flee Thy face before?",
        yoruba: "Nigba wo ni akoko ileri na yio de\nTi ogun ko ni si mọ,\nAti ifẹkufẹ, inilara, iwa-ika,\nYio sa kuro niwaju Rẹ?"
      },
      {
        english: "We pray Thee, Lord, arise,\nAnd come in Thy great might;\nRevive our longing eyes,\nWhich languish for Thy sight.",
        yoruba: "A gbadura si Ọ, Oluwa, dide,\nKi O si wa ni agbara nla Rẹ;\nSọ oju wa ti o n reti di titun,\nTi o n rẹwẹsi fun iran Rẹ."
      }
    ]
  },
  {
    number: 28,
    title: "On the Resurrection Morning",
    titleYoruba: "Ni Owurọ Ajinde",
    key: "D Major",
    tempo: "Allegro",
    solfa: `d d r m s l s, m r d
d d r m s l s, m r d
m f s l s f m, r d r m
d d r m s l s, m r d`,
    chords: "D - G D | A7 - Bm | G - D/A A7 | D - - |",
    verses: [
      {
        english: "On the resurrection morning,\nSoul and body meet again;\nNo more sorrow, no more weeping,\nNo more pain.",
        yoruba: "Ni owurọ ajinde,\nỌkan ati ara yio tun pade;\nKo si ibanuje mọ, ko si ẹkun mọ,\nKo si irora mọ."
      },
      {
        english: "Here awhile they must be parted,\nAnd the flesh its sabbath keep;\nWaiting in a holy stillness,\nWrapped in sleep.",
        yoruba: "Nihin fun igba die a gbọdọ ya wọn sọtọ,\nAra si pa isimi rẹ mọ;\nNduro ni idakẹjẹ mimo,\nTi a we ninu oorun."
      },
      {
        english: "For a while the tired body\nLies with feet toward the morn;\nTill the last and brightest Easter\nDay is born.",
        yoruba: "Fun igba die ara ti o rẹ\nDubulẹ pẹlu ẹsẹ si owurọ;\nTiti di Ọjọ Ajinde ikẹhin ati didan julọ\nTi yio bi."
      },
      {
        english: "But the soul in contemplation,\nUtters earnest prayer and strong;\nBreaking at the resurrection,\nInto song.",
        yoruba: "Ṣugbọn ọkan ninu ero jinlẹ,\nN gbadura titọ ati alagbara;\nNi fifọ ni ajinde,\nSinu orin."
      }
    ]
  },
  {
    number: 29,
    title: "Loving Savior, Hear My Cry",
    titleYoruba: "Olugbala Olufẹ, Gbọ Igbe Mi",
    key: "F Major",
    tempo: "Adagio",
    solfa: `d m s l s f m, r m f m r d
d m s l s f m, r m f m r d
m s d t l s, l t d
d m s l s f m, r m f m r d`,
    chords: "F - Bb F | C7 - Dm | Bb - F/C C7 | F - - |",
    verses: [
      {
        english: "Loving Savior, hear my cry,\nBe Thou near when death is nigh;\nHold me close beneath Thy wing,\nTill the dawn of heaven I sing.",
        yoruba: "Olugbala olufẹ, gbọ igbe mi,\nWa nitosi nigba ti iku ba sunmọ;\nMu mi mọ labẹ iyẹ Rẹ,\nTiti di owurọ ti ma korin ọrun."
      },
      {
        english: "Though the valley dark I tread,\nI will fear no evil dread;\nFor Thy rod and staff are near,\nIn Thy presence, naught to fear.",
        yoruba: "Bi mo tilẹ rin ni afonifoji okunkun,\nEmi ko ni bẹru ohun buburu;\nNitori ọpa ati ọpá Rẹ wa nitosi,\nNi wiwa Rẹ, ko si ohun lati bẹru."
      },
      {
        english: "When at last I cross the tide,\nBe Thou standing by my side;\nLet me see Thy face so fair,\nAnd Thy glory, ever there.",
        yoruba: "Nigba ti mo ba kọja omi nikẹhin,\nDuro lẹgbẹ mi;\nJẹ ki n ri oju Rẹ lẹwa,\nAti ogo Rẹ, nibẹ titi lai."
      }
    ]
  },
  {
    number: 30,
    title: "O Troubled Heart, There Is a Home",
    titleYoruba: "Ọkan Ti O Ni Wahala, Ile Kan Wa",
    key: "Eb Major",
    tempo: "Andante",
    solfa: `d d m s s l s, m r d
d d m s s l s, m r d
m m f s l s f, m r d
d d m s s l s, m r d`,
    chords: "Eb - Ab Eb | Bb7 - Cm | Ab - Eb/Bb Bb7 | Eb - - |",
    verses: [
      {
        english: "O troubled heart, there is a home\nBeyond the reach of toil and care;\nA home where changes never come;\nWho would not fain be resting there?",
        yoruba: "Ọkan ti o ni wahala, ile kan wa\nTi o kọja ibi isẹ ati aniyan;\nIle ti iyipada ko wa si;\nTa ni ko fẹ lati sinmi nibẹ?"
      },
      {
        english: "O weary heart, there is a rest,\nRemaining for the truly blest,\nA rest where all the souls are free,\nAnd all the joys of heaven we see.",
        yoruba: "Ọkan ti o rẹ, isinmi kan wa,\nTi o ku fun awon olubukun nitootọ,\nIsinmi nibi ti gbogbo ọkan ni ominira,\nAti gbogbo ayọ ọrun ni a ri."
      }
    ]
  },
  {
    number: 31,
    title: "Praise, My Soul, the King of Heaven",
    titleYoruba: "Yin, Ọkan Mi, Ọba Ọrun",
    key: "D Major",
    tempo: "Maestoso",
    solfa: `s s s s d' t l s, f m l s m f r
m m m m l s s fe, s l t d' m fe s
d' t l s, d' t l s
l s f r d t d`,
    chords: "D - G D | A7 - Bm | G - D/A A7 | D - - |",
    verses: [
      {
        english: "Praise, my soul, the King of heaven;\nTo His feet thy tribute bring.\nRansomed, healed, restored, forgiven,\nEvermore His praises sing:\nAlleluia! Alleluia!\nPraise the everlasting King.",
        yoruba: "Yin, ọkan mi, Ọba ọrun;\nMu ọrẹ rẹ wa si ẹsẹ Rẹ.\nTi a ra pada, ti a wo san, ti a mu pada, ti a dari ji,\nMa korin iyin Rẹ titi lai:\nHaleluya! Haleluya!\nYin Ọba ayeraye."
      },
      {
        english: "Praise Him for His grace and favor\nTo our fathers in distress.\nPraise Him still the same as ever,\nSlow to chide, and swift to bless.\nAlleluia! Alleluia!\nGlorious in His faithfulness.",
        yoruba: "Yin I fun oore-ọfẹ ati ojurere Rẹ\nSi awon baba wa ninu ipọnju.\nYin I si bẹ bakanna titi lai,\nO lọra si ibawi, O si yara si ibukun.\nHaleluya! Haleluya!\nOgo ninu igbagbọ Rẹ."
      },
      {
        english: "Father-like He tends and spares us;\nWell our feeble frame He knows.\nIn His hands He gently bears us,\nRescues us from all our foes.\nAlleluia! Alleluia!\nWidely yet His mercy flows.",
        yoruba: "Bi baba O n tọju ati ṣaanu wa;\nO mọ apẹrẹ alailera wa daradara.\nNinu ọwọ Rẹ O fi tutu gbe wa,\nO gba wa lọwọ gbogbo ọta wa.\nHaleluya! Haleluya!\nSibẹ gbooro ni aanu Rẹ n ṣan."
      },
      {
        english: "Angels, help us to adore Him;\nYe behold Him face to face;\nSun and moon, bow down before Him,\nDwellers all in time and space.\nAlleluia! Alleluia!\nPraise with us the God of grace.",
        yoruba: "Ẹyin angeli, ẹ ran wa lọwọ lati jọsin fun Un;\nẸyin wo Oju Re ni oju kọju;\nOorun ati oṣupa, e tẹriba niwaju Rẹ,\nGbogbo olugbe ni akoko ati aaye.\nHaleluya! Haleluya!\nYin Ọlọrun oore-ọfẹ pẹlu wa."
      }
    ]
  },
  {
    number: 32,
    title: "Rescue the Perishing",
    titleYoruba: "Gba Awon Ti N Segbe",
    key: "Ab Major",
    tempo: "Moderato",
    solfa: `s s l s m d, s s l s m
s s l s m d, r m r d
d d r d t d, d d r d t
s s l s m d, r m r d`,
    chords: "Ab - Db Ab | Eb7 - Ab | Db - Ab/Eb Eb7 | Ab - - |",
    verses: [
      {
        english: "Rescue the perishing, care for the dying,\nSnatch them in pity from sin and the grave;\nWeep o'er the erring one, lift up the fallen,\nTell them of Jesus, the mighty to save.",
        yoruba: "Gba awon ti n segbe, toju awon ti n ku,\nFa wọn jade ninu aanu kuro ninu ẹsẹ ati isà;\nSọkun lori ẹni ti o sise, gbe ẹni ti o subu dide,\nSọ fun wọn nipa Jesu, alagbara lati gba la."
      },
      {
        english: "Though they are slighting Him, still He is waiting,\nWaiting the penitent child to receive;\nPlead with them earnestly, plead with them gently;\nHe will forgive if they only believe.",
        yoruba: "Bi wọn tilẹ n kẹgan Rẹ, sibẹ O n duro de,\nO n duro de ọmọ ironupiwada lati gba;\nBẹbẹ fun wọn ni titọ, bẹbẹ fun wọn ni irẹlẹ;\nYio dariji bi wọn ba gbagbọ nikan."
      },
      {
        english: "Down in the human heart, crushed by the tempter,\nFeelings lie buried that grace can restore;\nTouched by a loving heart, wakened by kindness,\nChords that were broken will vibrate once more.",
        yoruba: "Ni isalẹ ọkan eniyan, ti ẹni idanwo ti fọ,\nIkunsinu wa ti a sin ti oore-ọfẹ le mu pada;\nTi ọkan olufẹ ba fi ọwọ kan, ti oninurere ba ji,\nOkun ti o ti ya yio tun mi lẹẹkansi."
      },
      {
        english: "Rescue the perishing, duty demands it;\nStrength for thy labor the Lord will provide;\nBack to the narrow way patiently win them;\nTell the poor wanderer a Savior has died.",
        yoruba: "Gba awon ti n segbe, ojuse nilo rẹ;\nAgbara fun iṣẹ rẹ ni Oluwa yio pese;\nPadanu si ọna kekere ni suurù ṣẹgun wọn;\nSọ fun alarinkiri ọlọrọ pe Olugbala ti ku."
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
    solfa: `d d r m s s, l l s m r
d d r m s s, l l s m r
m m f s l l, s f m r
d d r m s s, l l s m r`,
    chords: "G - C G | D7 - Em | C - G/D D7 | G - - |",
    verses: [
      {
        english: "They that trust in the Lord are secure,\nThey shall never be put to shame;\nThey that trust in the Lord shall endure,\nBlessed forever be His Name.",
        yoruba: "Awon ti o gbẹkẹle Oluwa ni aabo,\nA ko ni fi wọn si itiju lailai;\nAwon ti o gbẹkẹle Oluwa yio farada,\nOlubukun lailai ni Orukọ Rẹ."
      },
      {
        english: "As the mountains stand around Jerusalem,\nSo the Lord surrounds His own;\nHe will guard and guide and keep them,\nThey shall never walk alone.",
        yoruba: "Bi awon oke ti duro yika Jerusalemu,\nBẹẹ ni Oluwa yi awon tirẹ ka;\nYio ṣọ wọn, yio tọ wọn, yio si pa wọn mọ,\nWọn ko ni rin nikan lailai."
      }
    ]
  },
  {
    number: 34,
    title: "Now the Laborer's Task Is O'er",
    titleYoruba: "Nisisiyi Isẹ Osisẹ Ti Pari",
    key: "Eb Major",
    tempo: "Adagio",
    solfa: `d d r m m r d, t l l t d
d d r m m r d, r m r d
m m f s s f m, r d r m
d d r m m r d, t l l t d`,
    chords: "Eb - Ab Eb | Bb7 - Cm | Ab - Eb/Bb Bb7 | Eb - - |",
    verses: [
      {
        english: "Now the laborer's task is o'er;\nNow the battle day is past;\nNow upon the farther shore\nLands the voyager at last.",
        yoruba: "Nisisiyi isẹ osisẹ ti pari;\nNisisiyi ojo ogun ti kọja;\nNisisiyi lori eti okun ọhun\nArinrinajo de nikẹhin."
      },
      {
        english: "There the tears of earth are dried;\nThere its hidden things are clear;\nThere the work of life is tried\nBy a juster Judge than here.",
        yoruba: "Nibẹ ni a ti nu omije aiye;\nNibẹ ni ohun ikọkọ rẹ han;\nNibẹ ni a ti dan isẹ aye wo\nLọwọ Adajo ododo ju nihin lọ."
      },
      {
        english: "There the penitents, forgiven,\nThrough their Savior's sacrifice,\nOpen wide the gates of heaven;\nClad in full and white array.",
        yoruba: "Nibẹ ni awon ironupiwada, ti a dariji,\nNipasẹ ẹbọ Olugbala wọn,\nṢi ẹnu-ọna ọrun silẹ gbangba;\nTi a wọ ọṣọ funfun ati pipe."
      },
      {
        english: "Father, in Thy gracious keeping\nLeave we now Thy servant sleeping.",
        yoruba: "Baba, ninu itọju oore-ọfẹ Rẹ\nA fi ọmọ-ọdọ Rẹ silẹ ti o n sun."
      }
    ]
  },
  {
    number: 35,
    title: "There Is Power in the Blood",
    titleYoruba: "Agbara Wa Ninu Ẹjẹ Jesu",
    key: "G Major",
    tempo: "Allegro",
    solfa: `d d d r m m m, m f m r d
d d d r m m m, m f m r d
s s s l s f m, r d r m
d d d r m m m, m f m r d`,
    chords: "G - C G | D7 - G | C - G/D D7 | G - - |",
    verses: [
      {
        english: "Would you be free from the burden of sin?\nThere's power in the blood, power in the blood;\nWould you o'er evil a victory win?\nThere's wonderful power in the blood.",
        yoruba: "Ṣe o fẹ di ominira kuro ninu ẹru ẹsẹ?\nAgbara wa ninu ẹjẹ, agbara ninu ẹjẹ;\nṢe o fẹ bori ibi?\nAgbara iyanu wa ninu ẹjẹ."
      },
      {
        english: "Would you be free from your passion and pride?\nThere's power in the blood, power in the blood;\nCome for a cleansing to Calvary's tide;\nThere's wonderful power in the blood.",
        yoruba: "Ṣe o fẹ di ominira kuro ninu ifẹkufẹ ati igberaga?\nAgbara wa ninu ẹjẹ, agbara ninu ẹjẹ;\nWa fun iwẹnu si odo Kalfari;\nAgbara iyanu wa ninu ẹjẹ."
      },
      {
        english: "Would you be whiter, much whiter than snow?\nThere's power in the blood, power in the blood;\nSin stains are lost in its life-giving flow.\nThere's wonderful power in the blood.",
        yoruba: "Ṣe o fẹ funfun, funfun ju yinyin lọ?\nAgbara wa ninu ẹjẹ, agbara ninu ẹjẹ;\nAbawọn ẹsẹ sọnu ninu ṣiṣan aye rẹ.\nAgbara iyanu wa ninu ẹjẹ."
      },
      {
        english: "Would you do service for Jesus your King?\nThere's power in the blood, power in the blood;\nWould you live daily His praises to sing?\nThere's wonderful power in the blood.",
        yoruba: "Ṣe o fẹ ṣiṣẹ fun Jesu Ọba rẹ?\nAgbara wa ninu ẹjẹ, agbara ninu ẹjẹ;\nṢe o fẹ gbe lọjọjumọ lati korin iyin Rẹ?\nAgbara iyanu wa ninu ẹjẹ."
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
    solfa: `d d r m m r d, s s l s
d d r m m r d, s s l s
m m f s s f m, r d r m
d d r m m r d, s s l s`,
    chords: "Db - Gb Db | Ab7 - Db | Gb - Db/Ab Ab7 | Db - - |",
    verses: [
      {
        english: "I am Thine, O Lord, I have heard Thy voice,\nAnd it told Thy love to me;\nBut I long to rise in the arms of faith\nAnd be closer drawn to Thee.",
        yoruba: "Tirẹ ni mi, Oluwa, mo ti gbọ ohun Rẹ,\nO si sọ ifẹ Rẹ fun mi;\nṢugbọn mo fẹ dide ninu apa igbagbọ\nKi a si fa mi sunmọ Ọ."
      },
      {
        english: "Consecrate me now to Thy service, Lord,\nBy the power of grace divine;\nLet my soul look up with a steadfast hope,\nAnd my will be lost in Thine.",
        yoruba: "Ya mi si mimo nisiyi fun isin Rẹ, Oluwa,\nNipa agbara oore-ọfẹ atọrunwa;\nJẹ ki ọkan mi wo soke pelu ireti ṣinṣin,\nKi ifẹ mi si sọnu ninu Tirẹ."
      },
      {
        english: "O the pure delight of a single hour\nThat before Thy throne I spend,\nWhen I kneel in prayer, and with Thee, my God,\nI commune as friend with friend!",
        yoruba: "O idunnu mimọ ti wakati kan\nTi mo lo niwaju itẹ Rẹ,\nNigba ti mo kunlẹ ni adura, ati pelu Rẹ, Ọlọrun mi,\nMo ba sọrọ bi ọrẹ pelu ọrẹ!"
      },
      {
        english: "There are depths of love that I yet may know\nEre Thee face to face I see;\nThere are heights of joy that I yet may reach\nEre I rest in peace with Thee.",
        yoruba: "Ijinle ifẹ wa ti mo le mọ sibẹ\nKi n to ri Ọ ni oju kọju;\nGiga ayọ wa ti mo le de sibẹ\nKi n to sinmi ni alafia pelu Rẹ."
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
    solfa: `m m r d s l s, s f m
m m s l s f r, m fe s
m m r d s s f f m r
r m f m r d, f m r d`,
    chords: "Eb - Ab Eb | Cm - Fm Bb7 | Eb - Ab Eb | Cm - Bb7 Eb |",
    verses: [
      {
        english: "Abide with me; fast falls the eventide;\nThe darkness deepens; Lord, with me abide.\nWhen other helpers fail and comforts flee,\nHelp of the helpless, O abide with me.",
        yoruba: "Ba mi gbe; irọlẹ n ya ni kiakia;\nOkunkun n jinlẹ; Oluwa, ba mi gbe.\nNigba ti awon oluranlọwọ miran ba kuna ati itunu ba salọ,\nIranlọwọ alainiranlọwọ, ba mi gbe."
      },
      {
        english: "I need Thy presence every passing hour.\nWhat but Thy grace can foil the tempter's power?\nWho, like Thyself, my guide and stay can be?\nThrough cloud and sunshine, Lord, abide with me.",
        yoruba: "Mo nilo wiwa Rẹ ni wakati kọọkan ti o n kọja.\nKini bikoṣe oore-ọfẹ Rẹ le ṣẹgun agbara adanwo?\nTa ni, bi Iwọ, ti o le jẹ oluto ati atilẹyin mi?\nNipasẹ awọsanma ati oorun, Oluwa, ba mi gbe."
      },
      {
        english: "I fear no foe, with Thee at hand to bless;\nIlls have no weight, and tears no bitterness.\nWhere is death's sting? Where, grave, thy victory?\nI triumph still, if Thou abide with me.",
        yoruba: "Emi ko bẹru ọta, pelu Iwọ ni ọwọ lati bukun;\nAisan ko ni iwuwo, omije ko ni kikoro.\nNibo ni ita iku? Nibo, isà, ni iṣẹgun rẹ?\nMo ṣẹgun sibẹ, bi O ba ba mi gbe."
      },
      {
        english: "Hold Thou Thy cross before my closing eyes;\nShine through the gloom and point me to the skies.\nHeaven's morning breaks, and earth's vain shadows flee;\nIn life, in death, O Lord, abide with me.",
        yoruba: "Mu agbelebu Rẹ duro niwaju oju mi ti o n pa;\nTan nipasẹ okunkun ki O si tọka mi si ọrun.\nOwurọ ọrun ti la, ojiji asan aiye si ti salọ;\nNi iye, ni iku, Oluwa, ba mi gbe."
      }
    ]
  },
  {
    number: 38,
    title: "How Sweet the Hour of Closing Day",
    titleYoruba: "Didun To Ni Wakati Ipari Ọjọ",
    key: "F Major",
    tempo: "Andante",
    solfa: `d d m s s l s, m r d
d d m s s l s, m r d
m m f s l s f, m r d
d d m s s l s, m r d`,
    chords: "F - Bb F | C7 - Dm | Bb - F/C C7 | F - - |",
    verses: [
      {
        english: "How sweet the hour of closing day,\nWhen all is peaceful and serene,\nAnd when the sun with cloudless ray,\nSheds golden light on all the scene!",
        yoruba: "Didun to ni wakati ipari ọjọ,\nNigba ti ohun gbogbo dara ati bàlẹ,\nAti nigba ti oorun pelu imọlẹ laisi awọsanma,\nTan imọlẹ wura si gbogbo ibi!"
      },
      {
        english: "So let my sun of life go down,\nIn calm serenity and peace;\nLord, let me gain the heavenly crown,\nWhere joy and love shall never cease.",
        yoruba: "Bẹẹ ni jẹ ki oorun aye mi wọ,\nNi idakẹjẹ ati alafia;\nOluwa, jẹ ki n gba ade ọrun,\nNibi ti ayọ ati ifẹ ko ni dẹkun."
      }
    ]
  },
  {
    number: 39,
    title: "O Happy Day That Fixed My Choice",
    titleYoruba: "Ọjọ Ayọ Ti O Fi Ipinnu Mi Lẹ",
    key: "G Major",
    tempo: "Allegro",
    solfa: `d m s s l s, m m r d
d m s s l s, m r d
s s s s l s, m m r d
d m s s l s, m r d`,
    chords: "G - C G | D7 - G | C - G/D D7 | G - - |",
    verses: [
      {
        english: "O happy day, that fixed my choice\nOn Thee, my Savior and my God!\nWell may this glowing heart rejoice,\nAnd tell its raptures all abroad.",
        yoruba: "Ọjọ ayọ, ti o fi ipinnu mi lẹ\nLori Rẹ, Olugbala ati Ọlọrun mi!\nO yẹ ki ọkan ti o n jo yi yọ,\nKi o si sọ ayọ rẹ ni gbangba."
      },
      {
        english: "'Tis done: the great transaction's done!\nI am my Lord's and He is mine;\nHe drew me and I followed on,\nCharmed to confess the voice divine.",
        yoruba: "O ti ṣe: iṣowo nla na ti ṣe!\nTi Oluwa mi ni mi, tire ni mi si jẹ;\nO fa mi, mo si tẹle,\nInudidun lati jẹwọ ohun atọrunwa."
      },
      {
        english: "Now rest, my long divided heart,\nFixed on this blissful center, rest;\nNor ever from thy Lord depart,\nWith Him of every good possessed.",
        yoruba: "Nisiyi sinmi, ọkan mi ti o ti pin pipẹ,\nTi o duro lori aarin ayọ yi, sinmi;\nMaṣe kuro lọdọ Oluwa rẹ,\nPẹlu Rẹ ti gbogbo ohun rere jẹ tirẹ."
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
    solfa: `d d m s s, l l l s
f f m r r, m m r d
d d m s s, l l l s
f f m r r, m r d`,
    chords: "Cm - Fm Cm | G7 - Cm | Fm - Cm/G G7 | Cm - - |",
    verses: [
      {
        english: "I gave My life for thee,\nMy precious blood I shed,\nThat thou might'st ransomed be,\nAnd quickened from the dead;\nI gave, I gave My life for thee,\nWhat hast thou given for Me?",
        yoruba: "Mo fi aye Mi fun ọ,\nẸjẹ iyebiye Mi ni Mo ta,\nKi a le ra ọ pada,\nKi a si ji ọ dide kuro ninu oku;\nMo fi, Mo fi aye Mi fun ọ,\nKini iwọ fi fun Mi?"
      },
      {
        english: "My Father's house of light,\nMy glory-circled throne\nI left for earthly night,\nFor wanderings sad and lone;\nI left, I left it all for thee,\nHast thou left aught for Me?",
        yoruba: "Ile Baba Mi ti imọlẹ,\nItẹ ogo mi ti o yi mi ka\nMo fi silẹ fun oru aiye,\nFun arinkiri ibanuje ati nikan;\nMo fi, mo fi gbogbo silẹ fun ọ,\nṢe o fi ohunkohun silẹ fun Mi?"
      },
      {
        english: "I suffered much for thee,\nMore than thy tongue can tell,\nOf bitterest agony,\nTo rescue thee from hell;\nI've borne, I've borne it all for thee,\nWhat hast thou borne for Me?",
        yoruba: "Mo jiya pupọ fun ọ,\nJu bi ahọn rẹ le sọ lọ,\nIrora ti o koro julọ,\nLati gba ọ kuro ni ọrun apadi;\nMo ru, mo ru gbogbo rẹ fun ọ,\nKini iwọ ru fun Mi?"
      },
      {
        english: "And I have brought to thee,\nDown from My home above,\nSalvation full and free,\nMy pardon and My love;\nI bring, I bring rich gifts to thee,\nWhat hast thou brought to Me?",
        yoruba: "Mo si ti mu wa fun ọ,\nLati ile Mi loke wa,\nIgbala ti o kun ati ọfẹ,\nIdariji ati Ifẹ Mi;\nMo mu, mo mu ẹbun ọlọrọ wa fun ọ,\nKini iwọ mu wa fun Mi?"
      }
    ]
  },
  {
    number: 41,
    title: "Christian, Seek Not Yet Repose",
    titleYoruba: "Kristiani, Ma Wa Isinmi Sibẹ",
    key: "Eb Major",
    tempo: "Moderato",
    solfa: `d d r m m r d, t l l t d
d d r m m r d, r m r d
m m f s s f m, r d r m
d d r m m r d, t l l t d`,
    chords: "Eb - Ab Eb | Bb7 - Cm | Ab - Eb/Bb Bb7 | Eb - - |",
    verses: [
      {
        english: "Christian, seek not yet repose,\nHear thy guardian angel say;\nThou art in the midst of foes;\nWatch and pray.",
        yoruba: "Kristiani, ma wa isinmi sibẹ,\nGbọ ohun ti angeli oluso rẹ n sọ;\nO wa larin awon ọta;\nṢọra ki o si gbadura."
      },
      {
        english: "Principalities and powers,\nMustering their unseen array,\nWait for thy unguarded hours;\nWatch and pray.",
        yoruba: "Awon alagbara ati awon agbara,\nN ko ogun wọn ti a ko ri jọ,\nN duro de wakati ti o ko ṣọra;\nṢọra ki o si gbadura."
      },
      {
        english: "Gird thy heavenly armor on,\nWear it ever night and day;\nAmbushed lies the evil one;\nWatch and pray.",
        yoruba: "Di aṣọ ogun ọrun mo ara rẹ,\nWọ ọ ni oru ati ni ọsan;\nẸni buburu ba pamọ;\nṢọra ki o si gbadura."
      },
      {
        english: "Hear the victors who o'ercame;\nStill they mark each warrior's way;\nAll with one sweet voice exclaim,\nWatch and pray.",
        yoruba: "Gbọ awon aṣẹgun ti o bori;\nSi bẹ wọn ṣe akiyesi ọna jagunjagun kọọkan;\nGbogbo wọn pelu ohun didun kan kigbe,\nṢọra ki o si gbadura."
      },
      {
        english: "Hear, above all, hear thy Lord,\nHim thou lovest to obey;\nHide within thy heart His word;\nWatch and pray.",
        yoruba: "Gbọ, ju gbogbo lọ, gbọ Oluwa rẹ,\nẸni ti o nifẹ lati tẹle;\nFi ọrọ Rẹ pamọ ninu ọkan rẹ;\nṢọra ki o si gbadura."
      }
    ]
  },
  {
    number: 42,
    title: "Christ the Lord Is Risen Today",
    titleYoruba: "Kristi Oluwa Ti Jinde Loni",
    key: "C Major",
    tempo: "Allegro Maestoso",
    solfa: `d m s d' d' t l s, l s f m
d m s d' d' t l s, l s f m
s s s l t d' d' t, l s l t
d m s d' d' t l s, l s f m`,
    chords: "C - F C | G7 - Am | F - C/G G7 | C - - |",
    verses: [
      {
        english: "Christ the Lord is risen today, Hallelujah!\nSons of men and angels say: Hallelujah!\nRaise your joys and triumphs high, Hallelujah!\nSing, ye heavens, and earth reply: Hallelujah!",
        yoruba: "Kristi Oluwa ti jinde loni, Hallelujah!\nAwon ọmọ eniyan ati awon angeli n sọ: Hallelujah!\nGbe ayo ati iṣẹgun yin soke, Hallelujah!\nKorin, ẹyin ọrun, ki aiye si dahun: Hallelujah!"
      },
      {
        english: "Lives again our glorious King, Hallelujah!\nWhere, O death, is now thy sting? Hallelujah!\nOnce He died our souls to save, Hallelujah!\nWhere's thy victory, boasting grave? Hallelujah!",
        yoruba: "Ọba ogo wa ti tun gbe, Hallelujah!\nNibo, iku, ni ita rẹ nisiyi? Hallelujah!\nLẹẹkan O ku lati gba ọkan wa la, Hallelujah!\nNibo ni iṣẹgun rẹ, isà ti o n ṣogo? Hallelujah!"
      },
      {
        english: "Love's redeeming work is done, Hallelujah!\nFought the fight, the battle won, Hallelujah!\nDeath in vain forbids Him rise, Hallelujah!\nChrist has opened paradise, Hallelujah!",
        yoruba: "Iṣẹ irapada ifẹ ti ṣe, Hallelujah!\nO ja ija na, ogun na ti ṣẹgun, Hallelujah!\nIku lasan kọ fun Un lati dide, Hallelujah!\nKristi ti ṣi paradisu silẹ, Hallelujah!"
      },
      {
        english: "Soar we now where Christ has led, Hallelujah!\nFollowing our exalted Head, Hallelujah!\nMade like Him, like Him we rise, Hallelujah!\nOurs the cross, the grave, the skies, Hallelujah!",
        yoruba: "A goke nisiyi nibi ti Kristi ti ṣe amọna, Hallelujah!\nN tẹle Olori giga wa, Hallelujah!\nTi a da bi On, bi On a dide, Hallelujah!\nTiwa ni agbelebu, isà, ọrun, Hallelujah!"
      }
    ]
  },
  {
    number: 43,
    title: "Revive Thy Work, O Lord",
    titleYoruba: "Sọ Iṣẹ Rẹ Di Titun, Oluwa",
    key: "Bb Major",
    tempo: "Moderato",
    solfa: `d d r m m r d, s s l s
d d r m m r d, s s l s
m m f s s f m, r d r m
d d r m m r d, s s l s`,
    chords: "Bb - Eb Bb | F7 - Bb | Eb - Bb/F F7 | Bb - - |",
    verses: [
      {
        english: "Revive Thy work, O Lord,\nThy mighty arm make bare;\nSpeak with the voice that wakes the dead,\nAnd make Thy people hear.",
        yoruba: "Sọ iṣẹ Rẹ di titun, Oluwa,\nMu apa alagbara Rẹ han;\nSọrọ pelu ohun ti o ji awon oku dide,\nKi O si mu awon eniyan Rẹ gbọ."
      },
      {
        english: "Revive Thy work, O Lord,\nDisturb this sleep of death;\nQuicken the smoldering embers now\nBy Thine almighty breath.",
        yoruba: "Sọ iṣẹ Rẹ di titun, Oluwa,\nDa orun iku yi lamu;\nJi ẹẹrẹ ti o n ku nisiyi\nNipa ẹmi olodumare Rẹ."
      },
      {
        english: "Revive Thy work, O Lord,\nCreate soul-thirst for Thee;\nAnd hungering for the Bread of Life,\nO may our spirits be!",
        yoruba: "Sọ iṣẹ Rẹ di titun, Oluwa,\nDa ongbẹ ọkan fun Ọ;\nAti ebi fun Burẹdi Iye,\nJẹ ki ẹmi wa ri bẹẹ!"
      },
      {
        english: "Revive Thy work, O Lord,\nExalt Thy precious Name;\nAnd, by the Holy Ghost, our love\nFor Thee and Thine inflame.",
        yoruba: "Sọ iṣẹ Rẹ di titun, Oluwa,\nGbe Orukọ iyebiye Rẹ ga;\nAti, nipa Ẹmi Mimo, ifẹ wa\nFun Ọ ati Tirẹ tan."
      }
    ]
  },
  {
    number: 44,
    title: "Jesus Lives! Thy Terrors Now",
    titleYoruba: "Jesu Wà! Ẹru Rẹ Nisiyi",
    key: "D Major",
    tempo: "Allegro",
    solfa: `d d m s s, l l l s
f f m r r, m m r d
d d m s s, l l l s
f f m r r, m r d`,
    chords: "D - G D | A7 - Bm | G - D/A A7 | D - - |",
    verses: [
      {
        english: "Jesus lives! thy terrors now\nCan no longer, death, appall us;\nJesus lives! by this we know\nThou, O grave, canst not enthrall us.\nAlleluia!",
        yoruba: "Jesu wà! ẹru rẹ nisiyi\nKo le dẹruba wa mọ, iku;\nJesu wà! nipa eyi a mọ\nIwọ, isà, ko le di wa mú.\nHaleluya!"
      },
      {
        english: "Jesus lives! henceforth is death\nBut the gate of life immortal;\nThis shall calm our trembling breath,\nWhen we pass its gloomy portal.\nAlleluia!",
        yoruba: "Jesu wà! lati isisiyi iku\nJẹ ẹnu-ọna iye ainiku nikan;\nEyi yio tu ẹmi wa ninu ti o n wariri,\nNigba ti a ba kọja ẹnu-ọna okunkun rẹ.\nHaleluya!"
      },
      {
        english: "Jesus lives! for us He died;\nThen, alone to Jesus living,\nPure in heart may we abide,\nGlory to our Savior giving.\nAlleluia!",
        yoruba: "Jesu wà! fun wa ni O ku;\nNigbana, fun Jesu nikan ni a gbe,\nMimọ ni ọkan ki a le gbe,\nA n fun Olugbala wa ni ogo.\nHaleluya!"
      },
      {
        english: "Jesus lives! our hearts know well\nNaught from us His love shall sever;\nLife, nor death, nor powers of hell\nTear us from His keeping ever.\nAlleluia!",
        yoruba: "Jesu wà! ọkan wa mọ daradara\nKo si ohun ti yio ya ifẹ Rẹ kuro lọdọ wa;\nIye, tabi iku, tabi agbara ọrun apadi\nKo le ya wa kuro ninu itọju Rẹ lailai.\nHaleluya!"
      }
    ]
  },
  {
    number: 45,
    title: "Jerusalem on High",
    titleYoruba: "Jerusalemu Loke",
    key: "G Major",
    tempo: "Maestoso",
    solfa: `d d m s s l s, m r d
d d m s s l s, m r d
m m f s l s f, m r d
d d m s s l s, m r d`,
    chords: "G - C G | D7 - Em | C - G/D D7 | G - - |",
    verses: [
      {
        english: "Jerusalem on high,\nMy song and city is,\nMy home whene'er I die,\nThe centre of my bliss.",
        yoruba: "Jerusalemu loke,\nOrin mi ati ilu mi ni,\nIle mi nigbakugba ti mo ba ku,\nAarin ayo mi."
      },
      {
        english: "O happy place! When shall I be,\nMy God, with Thee, to see Thy face?",
        yoruba: "Ibi ayo! Nigba wo ni yio jẹ,\nỌlọrun mi, pelu Rẹ, lati ri oju Rẹ?"
      },
      {
        english: "There dwells my Lord, my King,\nJudged here unfit to live;\nThere angels to Him sing,\nAnd lowly homage give.",
        yoruba: "Nibẹ ni Oluwa mi gbe, Ọba mi,\nTi a dajọ nihin pe ko yẹ lati gbe;\nNibẹ ni awon angeli n korin fun Un,\nTi wọn si n fi irẹlẹ jọsin."
      },
      {
        english: "The patriarchs of old\nThere from their travels cease;\nThe prophets there behold\nTheir longed-for Prince of Peace.",
        yoruba: "Awon baba nla atijọ\nNibẹ ni wọn ti sinmi kuro ninu irinajo wọn;\nAwon wolii nibẹ wo\nỌmọ-alade Alafia wọn ti wọn n reti."
      }
    ]
  },
  {
    number: 46,
    title: "Wonderful Story of Love",
    titleYoruba: "Itan Iyanu Ti Ifẹ",
    key: "F Major",
    tempo: "Allegretto",
    solfa: `s s s l s m d, s s s l s
s s s l s m d, r m r d
d d d d r d t, d d d d r d
s s s l s m d, r m r d`,
    chords: "F - Bb F | C7 - Dm | Bb - F/C C7 | F - - |",
    verses: [
      {
        english: "Wonderful story of love;\nTell it to me again;\nWonderful story of love;\nWake the immortal strain!\nAngels with rapture announce it,\nShepherds with wonder receive it;\nSinner, O won't you believe it?\nWonderful story of love.",
        yoruba: "Itan iyanu ti ifẹ;\nSọ fun mi lẹẹkansi;\nItan iyanu ti ifẹ;\nJi orin ainiku na!\nAngeli pelu ayo n kede re,\nAwon oluṣọ-agutan pelu iyanu gba;\nẸlẹṣẹ, ṣe o ko ni gbagbọ rẹ?\nItan iyanu ti ifẹ."
      },
      {
        english: "Wonderful story of love;\nThough you are far away;\nWonderful story of love;\nStill He doth call today;\nCalling from Calvary's mountain,\nDown from the crystal bright fountain,\nE'en from the dawn of creation,\nWonderful story of love.",
        yoruba: "Itan iyanu ti ifẹ;\nBi o tilẹ wa ni ọna jijin;\nItan iyanu ti ifẹ;\nSi bẹ O n pe loni;\nO n pe lati ori oke Kalfari,\nLati inu orisun kristali didan,\nLati ibẹrẹ ẹda,\nItan iyanu ti ifẹ."
      },
      {
        english: "Wonderful story of love;\nJesus provides a rest;\nWonderful story of love;\nFor all the pure and blest;\nRest in those mansions above us,\nWith those who've gone on before us,\nSinging the rapturous chorus,\nWonderful story of love.",
        yoruba: "Itan iyanu ti ifẹ;\nJesu pese isinmi;\nItan iyanu ti ifẹ;\nFun gbogbo mimọ ati olubukun;\nIsinmi ni ile nla wọnni loke wa,\nPelu awon ti o ti lọ siwaju wa,\nTi wọn n korin ayọ,\nItan iyanu ti ifẹ."
      }
    ]
  },
  {
    number: 47,
    title: "When the Trumpet of the Lord Shall Sound",
    titleYoruba: "Nigba Ti Ipè Oluwa Ba Dun",
    key: "Bb Major",
    tempo: "Maestoso",
    solfa: `d d d r m m m, m f m r d
d d d r m m m, m f m r d
s s l s f m r, d r m
d d d r m m m, m f m r d`,
    chords: "Bb - Eb Bb | F7 - Bb | Eb - Bb/F F7 | Bb - - |",
    verses: [
      {
        english: "When the trumpet of the Lord shall sound,\nAnd time shall be no more,\nAnd the morning breaks, eternal, bright and fair;\nWhen the saved of earth shall gather over on the other shore,\nAnd the roll is called up yonder, I'll be there.",
        yoruba: "Nigba ti ipè Oluwa ba dun,\nTi akoko ko si mọ,\nTi owurọ ba tan, ayeraye, imọlẹ ati lẹwa;\nNigba ti awon ti a gba la ni aiye ba pejọ ni apa keji,\nTi a si pe orukọ loke, emi yio wa nibẹ."
      },
      {
        english: "On that bright and cloudless morning when the dead in Christ shall rise,\nAnd the glory of His resurrection share;\nWhen His chosen ones shall gather to their home beyond the skies,\nAnd the roll is called up yonder, I'll be there.",
        yoruba: "Ni owurọ didan laisi awọsanma nigba ti oku ninu Kristi ba dide,\nTi wọn si pin ogo ajinde Rẹ;\nNigba ti awon ayanfẹ Rẹ ba pejọ si ile wọn kọja ọrun,\nTi a si pe orukọ loke, emi yio wa nibẹ."
      },
      {
        english: "Let us labor for the Master from the dawn till setting sun,\nLet us talk of all His wondrous love and care;\nThen when all of life is over, and our work on earth is done,\nAnd the roll is called up yonder, I'll be there.",
        yoruba: "Jẹ ka ṣiṣẹ fun Oluwa lati owurọ titi oorun fi wọ,\nJẹ ka sọrọ nipa gbogbo ifẹ iyanu ati itọju Rẹ;\nNigbana nigba ti gbogbo aye ba pari, iṣẹ wa ni aiye si ti ṣe tan,\nTi a si pe orukọ loke, emi yio wa nibẹ."
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
    key: "G Major",
    tempo: "Andante",
    solfa: `s d d m d d l, d s r r m r
s d d m d d l, d s d m r d
d r r d r m m, m f m l r d t
s d d m d d l, d s d m r d`,
    chords: `G - - | C - G | D7 - G |
G - - | C - G | D7 - G |`,
    verses: [
      {
        english: "O my comrade, see the signal\nWaving in the sky!\nReinforcements now appearing,\nVictory is nigh!",
        yoruba: "Ẹgbẹ mi, wo ami naa\nTi o n fọwọ ni ọrun!\nẸgbẹ ogun titun ti farahan,\nIṣẹgun sunmọ!"
      },
      {
        english: "See the mighty host advancing,\nSatan leading on;\nMighty ones around us falling,\nCourage almost gone!",
        yoruba: "Wo ogun nla ti o n tẹsiwaju,\nSatani n ṣe amọna;\nAwon alagbara n ṣubu ni ayika wa,\nIgboya fẹrẹ tan!"
      },
      {
        english: "See the glorious banner waving!\nHear the trumpet blow!\nIn our Leader's Name we triumph\nOver every foe.",
        yoruba: "Wo asia ogo ti o n fọwọ!\nGbọ ipè ti o n fun!\nNi orukọ Olori wa a ṣẹgun\nLori ọta gbogbo."
      },
      {
        english: "Fierce and long the battle rages,\nBut our help is near;\nOnward comes our great Commander,\nCheer, my comrades, cheer!",
        yoruba: "Lile ati pẹ ni ogun n ja,\nṢugbọn iranlọwọ wa sunmọ;\nOlori ogun nla wa n bọ siwaju,\nYọ, ẹgbẹ mi, yọ!"
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
    key: "F Major",
    tempo: "Allegro Moderato",
    solfa: `d m s s l s, m m r d
d m s s l s, m r d
s s s s l s, m m r d
d m s s l s, m r d`,
    chords: "F - Bb F | C7 - F | Bb - F/C C7 | F - - |",
    verses: [
      {
        english: "Be glad in the Lord and rejoice,\nAll ye that are upright in heart;\nAnd ye that have made Him your choice,\nBid sadness and sorrow depart.",
        yoruba: "Ẹ yọ ninu Oluwa ki ẹ si yọ,\nGbogbo ẹyin ti ọkan yin tọ;\nAti ẹyin ti o ti yan Un,\nẸ jẹ ki ibanuje ati ẹdun kuro."
      },
      {
        english: "Be joyful, for He is the Lord,\nOn earth and in heaven supreme;\nHe fashions and rules by His word,\nThe Mighty and strong to redeem.",
        yoruba: "Ẹ yọ, nitori Oluwa ni,\nLori aiye ati ni ọrun ni O ga julọ;\nO da ati ṣe akoso nipasẹ ọrọ Rẹ,\nAlagbara ati olokiki lati ra pada."
      },
      {
        english: "What though in the conflict for right\nYour enemies almost prevail!\nGod's armies, just hid from your sight,\nAre more than the foes which assail.",
        yoruba: "Kini bi ninu ija fun ohun ti o tọ\nAwon ọta rẹ fẹrẹ bori!\nOgun Ọlọrun, ti o fi pamọ kuro ni oju rẹ,\nPọ ju awon ọta ti o n kọlu lọ."
      },
      {
        english: "Then in the battle of life,\nIn every dark valley below;\nBe glad, and remember your Lord,\nHe conquers the deadliest foe.",
        yoruba: "Nigbana ninu ogun aye,\nNi gbogbo afonifoji okunkun nisalẹ;\nẸ yọ, ki ẹ si ranti Oluwa yin,\nO ṣẹgun ọta ti o buru julọ."
      }
    ]
  },
  {
    number: 50,
    title: "Just as God Who Reigns on High (II)",
    titleYoruba: "Gẹgẹ Bi Ọlọrun Ti Njọba Loke (II)",
    key: "Eb Major",
    tempo: "Maestoso",
    solfa: `d d r m s s l, s f m r d
d d r m s s l, s f m r d
m f s l s f m, r d r m
d d r m s s l, s f m r d`,
    chords: "Eb - Ab Eb | Bb7 - Eb | Ab - Eb/Bb Bb7 | Eb - - |",
    verses: [
      {
        english: "Just as God who reigns on high\nSent His Son for man to die,\nSo we ought to live for Him\nEvery day and every hour within.",
        yoruba: "Gẹgẹ bi Ọlọrun ti njọba loke\nRan Ọmọ Rẹ fun eniyan lati ku,\nBẹẹ ni a gbọdọ gbe fun Un\nLọjọjumọ ati ni wakati kọọkan."
      },
      {
        english: "He who made the earth and sky,\nHears the humble sinner's cry;\nGives salvation, full and free,\nTo all who come on bended knee.",
        yoruba: "Ẹni ti o da aiye ati ọrun,\nN gbọ igbe ẹlẹṣẹ onirẹlẹ;\nO n fun ni igbala, ti o kun ati ọfẹ,\nFun gbogbo ti o wa pelu ikunlẹ."
      }
    ]
  },
  {
    number: 51,
    title: "Yet There Is Room",
    titleYoruba: "Sibẹ Aye Wa",
    key: "D Major",
    tempo: "Maestoso",
    solfa: `d d m s s l s, m r d
d d m s s l s, m r d
m m f s l s f, m r d
d d m s s l s, m r d`,
    chords: "D - G D | A7 - D | G - D/A A7 | D - - |",
    verses: [
      {
        english: "Yet there is room! The Lamb's bright hall of song,\nWith its fair glory, beckons thee along;\nRoom, room, still room! O enter, enter now!",
        yoruba: "Sibẹ aye wa! Gbọngan orin imọlẹ Ọdọ-Agutan,\nPelu ogo lẹwa rẹ, n pe ọ lọ;\nAye, aye, si aye! Wọle, wọle nisiyi!"
      },
      {
        english: "Day is declining, and the sun is low;\nThe shadows lengthen, light makes haste to go;\nYet there is room! Still open stands the gate,\nThe great Physician waiteth: do not wait.",
        yoruba: "Ọjọ n rẹlẹ, oorun si wa ni isalẹ;\nAwon ojiji n gun, imọlẹ n yara lọ;\nSibẹ aye wa! Ẹnu-ọna si ṣi silẹ,\nOniṣegun nla n duro de: ma duro."
      },
      {
        english: "The bridal hall is filling for the feast;\nPass in, pass in, and be the Bridegroom's guest;\nIt fills, it fills, that hall of jubilee!\nMake haste, make haste! 'Tis room for thee!",
        yoruba: "Gbọngan igbeyawo n kun fun ajọ;\nWọle, wọle, ki o jẹ alejo Ọkọ iyawo;\nO n kun, o n kun, gbọngan ayọ nla na!\nYara, yara! Aye wa fun ọ!"
      }
    ]
  },
  {
    number: 52,
    title: "Art Thou Weary, Art Thou Languid",
    titleYoruba: "Njẹ O Rẹ, Njẹ O Ṣe Alailera",
    key: "D Major",
    tempo: "Maestoso",
    solfa: `d d r m m r d, t l l t d
d d r m m r d, r m r d
m m f s s f m, r d r m
d d r m m r d, t l l t d`,
    chords: "D - G D | A7 - Bm | G - D/A A7 | D - - |",
    verses: [
      {
        english: "Art thou weary, art thou languid,\nArt thou sore distressed?\nCome to Me, saith One, and coming,\nBe at rest.",
        yoruba: "Njẹ o rẹ, njẹ o ṣe alailera,\nNjẹ o ni ipọnju gidigidi?\nWa sọdọ Mi, ni Ẹnikan sọ, ki o si wa,\nSinmi."
      },
      {
        english: "Hath He marks to lead me to Him,\nIf He be my Guide?\nIn His feet and hands are wound-prints,\nAnd His side.",
        yoruba: "Njẹ O ni ami lati tọ mi sọdọ Rẹ,\nBi O ba jẹ Oluto mi?\nNi ẹsẹ ati ọwọ Rẹ ni ami ọgbẹ,\nAti ẹgbẹ Rẹ."
      },
      {
        english: "Is there diadem, as Monarch,\nThat His brow adorns?\nYea, a crown, in very surety,\nBut of thorns.",
        yoruba: "Njẹ diademu wa, bi Ọba,\nTi o ṣe ọṣọ iwaju Rẹ?\nBẹẹni, ade kan, ni otitọ,\nṢugbọn ti ẹgun."
      },
      {
        english: "If I find Him, if I follow,\nWhat His guerdon here?\nMany a sorrow, many a labor,\nMany a tear.",
        yoruba: "Bi mo ba ri I, bi mo ba tẹle,\nKini ẹsan Rẹ nihin?\nIbanuje pupọ, iṣẹ pupọ,\nOmije pupọ."
      },
      {
        english: "If I still hold closely to Him,\nWhat hath He at last?\nSorrow vanquished, labor ended,\nJordan passed!",
        yoruba: "Bi mo ba si mu On mọ ṣinṣin,\nKini O ni nikẹhin?\nIbanuje ti ṣẹgun, iṣẹ ti pari,\nJordani ti kọja!"
      }
    ]
  },
  {
    number: 53,
    title: "Shall We Gather at the River",
    titleYoruba: "Ṣe A O Pejọ Ni Odo",
    key: "Ab Major",
    tempo: "Moderato",
    solfa: `d d d r m m, r r r m f f
m m m f s s, f m r d r m
d d d r m m, r r r m f f
m m m f s s, d t l t d`,
    chords: "Ab - Db Ab | Eb7 - Ab | Db - Ab/Eb Eb7 | Ab - - |",
    verses: [
      {
        english: "Shall we gather at the river,\nWhere bright angel feet have trod,\nWith its crystal tide forever\nFlowing by the throne of God?",
        yoruba: "Ṣe a o pejọ ni odo,\nNibi ti ẹsẹ angeli didan ti tẹ,\nPelu ṣiṣan rẹ ti o mọ titi lai\nTi o n ṣan lẹgbẹ itẹ Ọlọrun?"
      },
      {
        english: "On the margin of the river,\nWashing up its silver spray,\nWe will talk and worship ever,\nAll the happy golden day.",
        yoruba: "Lori eti odo na,\nTi o n fọ omi fadaka rẹ,\nA o sọrọ ati jọsin titi lai,\nGbogbo ọjọ wura ayọ."
      },
      {
        english: "Ere we reach the shining river,\nLay we every burden down;\nGrace our spirits will deliver,\nAnd provide a robe and crown.",
        yoruba: "Ki a to de odo ti o n tan,\nJẹ ka fi gbogbo ẹru kalẹ;\nOore-ọfẹ yio gba ẹmi wa la,\nYio si pese aṣọ ati ade."
      },
      {
        english: "At the smiling of the river,\nMirror of the Savior's face,\nSaints, whom death will never sever,\nLift their songs of saving grace.",
        yoruba: "Ni ẹrin odo na,\nDigi oju Olugbala,\nAwon ẹni mimo, ti iku ko le ya sọtọ,\nGbe orin oore-ọfẹ igbala wọn soke."
      },
      {
        english: "Soon we'll reach the shining river,\nSoon our pilgrimage will cease;\nSoon our happy hearts will quiver\nWith the melody of peace.",
        yoruba: "Laipẹ a o de odo didan,\nLaipẹ irinajo wa yio pari;\nLaipẹ ọkan ayọ wa yio wariri\nPelu orin alafia."
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
    key: "F Major",
    tempo: "Moderato",
    solfa: `d d m s s l s, m r d
d d m s s l s, m r d
m m f s l s f, m r d
d d m s s l s, m r d`,
    chords: "F - Bb F | C7 - F | Bb - F/C C7 | F - - |",
    verses: [
      {
        english: "We speak of the realms of the blest,\nThat country so bright and so fair,\nAnd oft are its glories confessed;\nBut what must it be to be there!",
        yoruba: "A n sọ nipa ijọba olubukun,\nIlu ti o mọ ati ti o lẹwa,\nNigbagbogbo ni a jẹwọ ogo rẹ;\nṢugbọn kini yio dabi lati wa nibẹ!"
      },
      {
        english: "We speak of its pathways of gold,\nIts walls decked with jewels so rare,\nIts wonders and pleasures untold;\nBut what must it be to be there!",
        yoruba: "A n sọ nipa ọna wura rẹ,\nOdi rẹ ti a ṣe lọṣọ pelu iyebiye ti o ṣọwọn,\nIyanu ati idunnu rẹ ti a ko le sọ;\nṢugbọn kini yio dabi lati wa nibẹ!"
      },
      {
        english: "We speak of its freedom from sin,\nFrom sorrow, temptation, and care,\nFrom trials without and within;\nBut what must it be to be there!",
        yoruba: "A n sọ nipa ominira rẹ kuro ninu ẹsẹ,\nKuro ninu ibanuje, idanwo, ati aniyan,\nKuro ninu wahala lode ati ninu;\nṢugbọn kini yio dabi lati wa nibẹ!"
      },
      {
        english: "We speak of its service of love,\nThe robes which the glorified wear,\nThe church of the firstborn above;\nBut what must it be to be there!",
        yoruba: "A n sọ nipa isin ifẹ rẹ,\nAṣọ ti awon ti a ṣe logo n wọ,\nIjọ awon akọbi loke;\nṢugbọn kini yio dabi lati wa nibẹ!"
      }
    ]
  },
  {
    number: 55,
    title: "I Want to Be Like Jesus",
    titleYoruba: "Mo Fẹ Dabi Jesu",
    key: "F Major",
    tempo: "Moderato",
    solfa: `d d r m s s, l l s m r
d d r m s s, l l s m r
m m f s l l, s f m r
d d r m s s, l l s m r`,
    chords: "F - Bb F | C7 - Dm | Bb - F/C C7 | F - - |",
    verses: [
      {
        english: "I want to be like Jesus,\nSo lowly and so meek;\nFor no one marked an angry word\nThat ever heard Him speak.",
        yoruba: "Mo fẹ dabi Jesu,\nOnirẹlẹ ati oninuure bẹẹ;\nNitori ko si ẹnikan ti o ṣe akiyesi ọrọ ibinu\nTi o gbọ ni igba ti O sọrọ."
      },
      {
        english: "I want to be like Jesus,\nSo frequently in prayer;\nAlone upon the mountain top,\nHe met His Father there.",
        yoruba: "Mo fẹ dabi Jesu,\nTi o ma n gbadura nigbagbogbo;\nNikan lori oke giga,\nO pade Baba Rẹ nibẹ."
      },
      {
        english: "I want to be like Jesus;\nI never, never find\nThat He, though persecuted, was\nTo anyone unkind.",
        yoruba: "Mo fẹ dabi Jesu;\nEmi ko ri rara\nPe On, bi a tilẹ ṣe inunibini si,\nṢe aika si ẹnikẹni."
      },
      {
        english: "I want to be like Jesus,\nEngaged in doing good;\nSo that of me it may be said,\nShe followed as she should.",
        yoruba: "Mo fẹ dabi Jesu,\nTi o n ṣe rere;\nKi a le sọ nipa mi pe,\nO tẹle bi o ṣe yẹ."
      }
    ]
  },
  {
    number: 56,
    title: "My Faith Looks Up to Thee",
    titleYoruba: "Igbagbọ Mi Wo Ọ Soke",
    key: "Eb Major",
    tempo: "Adagio",
    solfa: `d d r m m r, d t l l t d
d d r m f m r, d r m r d
m m f s s f, m r d d r m
d d r m m r, d t l l t d`,
    chords: "Eb - Ab Eb | Bb7 - Cm | Ab - Eb/Bb Bb7 | Eb - - |",
    verses: [
      {
        english: "My faith looks up to Thee,\nThou Lamb of Calvary,\nSavior divine!\nNow hear me while I pray,\nTake all my guilt away,\nO let me from this day\nBe wholly Thine!",
        yoruba: "Igbagbọ mi wo Ọ soke,\nỌdọ-Agutan Kalfari,\nOlugbala atọrunwa!\nNisiyi gbọ mi bi mo ti n gbadura,\nMu gbogbo ẹbi mi kuro,\nJẹ ki n di ti Rẹ patapata\nLati ọjọ yi lọ!"
      },
      {
        english: "May Thy rich grace impart\nStrength to my fainting heart,\nMy zeal inspire!\nAs Thou hast died for me,\nO may my love to Thee\nPure, warm, and changeless be,\nA living fire!",
        yoruba: "Jẹ ki oore-ọfẹ ọlọrọ Rẹ fun\nAgbara si ọkan mi ti o n ṣubu,\nMu itara mi ji!\nBi O ti ku fun mi,\nJẹ ki ifẹ mi si Ọ\nMọ, gbona, ati aiyipada,\nIna alaye!"
      },
      {
        english: "While life's dark maze I tread,\nAnd griefs around me spread,\nBe Thou my Guide;\nBid darkness turn to day,\nWipe sorrow's tears away,\nNor let me ever stray\nFrom Thee aside.",
        yoruba: "Nigba ti mo n rin ọna okunkun aye,\nAti ibanuje ti o yi mi ka,\nJẹ Oluto mi;\nMu okunkun di ọsan,\nNu omije ibanuje,\nMa jẹ ki n ṣina\nKuro lọdọ Rẹ."
      },
      {
        english: "When ends life's transient dream,\nWhen death's cold, sullen stream\nShall o'er me roll;\nBlest Savior, then in love,\nFear and distrust remove;\nO bear me safe above,\nA ransomed soul!",
        yoruba: "Nigba ti ala aye ti o n kọja ba pari,\nNigba ti odo tutu iku\nBa yi mi ka;\nOlugbala olubukun, nigbana ni ifẹ,\nMu ibẹru ati iyemeji kuro;\nGbe mi lailewu loke,\nỌkan ti a ra pada!"
      }
    ]
  },
  {
    number: 57,
    title: "Jerusalem on High (II)",
    titleYoruba: "Jerusalemu Loke (II)",
    key: "G Major",
    tempo: "Maestoso",
    solfa: `d d m s s l s, m r d
d d m s s l s, m r d
m m f s l s f, m r d
d d m s s l s, m r d`,
    chords: "G - C G | D7 - Em | C - G/D D7 | G - - |",
    verses: [
      {
        english: "Jerusalem on high,\nMy song and city is,\nMy home whene'er I die,\nThe centre of my bliss.",
        yoruba: "Jerusalemu loke,\nOrin ati ilu mi ni,\nIle mi nigbakugba ti mo ba ku,\nAarin ayo mi."
      },
      {
        english: "O happy place! When shall I be,\nMy God, with Thee, to see Thy face?",
        yoruba: "Ibi ayo! Nigba wo ni yio jẹ,\nỌlọrun mi, pelu Rẹ, lati ri oju Rẹ?"
      },
      {
        english: "There dwells my Lord, my King,\nJudged here unfit to live;\nThere angels to Him sing,\nAnd lowly homage give.",
        yoruba: "Nibẹ ni Oluwa mi gbe, Ọba mi,\nTi a dajọ nihin pe ko yẹ lati gbe;\nNibẹ ni awon angeli n korin fun Un,\nTi wọn si n fi irẹlẹ jọsin."
      }
    ]
  },
  {
    number: 58,
    title: "O Lord, My God (How Great Thou Art)",
    titleYoruba: "Oluwa, Ọlọrun Mi",
    key: "Bb Major",
    tempo: "Maestoso",
    solfa: `d m s s, l l l s
d m s s, l l l s
s s s s, d' d' t l
s l s f, m m r d`,
    chords: "Bb - Eb Bb | F7 - Gm | Eb - Bb/F F7 | Bb - - |",
    verses: [
      {
        english: "O Lord, my God, when I in awesome wonder,\nConsider all the worlds Thy Hands have made;\nI see the stars, I hear the rolling thunder,\nThy power throughout the universe displayed.",
        yoruba: "Oluwa, Ọlọrun mi, nigba ti mo ba wo iyanu,\nMo ronu gbogbo aiye ti Ọwọ Rẹ da;\nMo ri irawo, mo gbọ ara ti n yi,\nAgbara Rẹ ni gbogbo aiye han."
      },
      {
        english: "When through the woods, and forest glades I wander,\nAnd hear the birds sing sweetly in the trees;\nWhen I look down, from lofty mountain grandeur\nAnd see the brook, and feel the gentle breeze.",
        yoruba: "Nigba ti mo rin nipasẹ igbo, ati aaye igbo,\nMo gbọ awon ẹiyẹ n korin ni didun ninu igi;\nNigba ti mo wo isalẹ, lati ori oke giga\nMo ri odo kekere, mo si ni afẹfẹ tutu."
      },
      {
        english: "And when I think, that God, His Son not sparing;\nSent Him to die, I scarce can take it in;\nThat on the Cross, my burden gladly bearing,\nHe bled and died to take away my sin.",
        yoruba: "Nigba ti mo ronu pe, Ọlọrun, ko da Ọmọ Rẹ si;\nO ran Un lati ku, o ṣòro fun mi lati gba;\nPe lori Agbelebu, O fi ayọ ru ẹru mi,\nO ta ẹjẹ O si ku lati mu ẹsẹ mi kuro."
      },
      {
        english: "When Christ shall come, with shout of acclamation,\nAnd take me home, what joy shall fill my heart.\nThen I shall bow, in humble adoration,\nAnd then proclaim: 'My God, how great Thou art!'",
        yoruba: "Nigba ti Kristi ba de, pelu igbe ayọ,\nTi O si mu mi lọ si ile, ayọ wo ni yio kun ọkan mi.\nNigbana ni yio tẹriba, ni ijọsin onirẹlẹ,\nNigbana yio kede pe: 'Ọlọrun mi, tobi to ni Iwọ!'"
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
    solfa: `d d r m m r, m f m r d
d d r m m r, m f m
m m f s s f, m r d t l
d d r m m r, m f m r d`,
    chords: "G - C G | D7 - Em | C - G/D D7 | G - - |",
    verses: [
      {
        english: "Nearer, my God, to Thee,\nNearer to Thee!\nE'en though it be a cross\nThat raiseth me,\nStill all my song shall be,\nNearer, my God, to Thee.",
        yoruba: "Sunmọ, Ọlọrun mi, si Ọ,\nSunmọ si Ọ!\nBi o tilẹ jẹ agbelebu\nTi o gbe mi soke,\nSibẹsi orin mi yio jẹ,\nSunmọ, Ọlọrun mi, si Ọ."
      },
      {
        english: "Though like the wanderer,\nThe sun gone down,\nDarkness be over me,\nMy rest a stone;\nYet in my dreams I'd be\nNearer, my God, to Thee.",
        yoruba: "Bi alarinkiri,\nTi oorun ti wọ,\nOkunkun bo mi,\nOkuta ni isinmi mi;\nSibẹ ninu ala mi yio jẹ\nSunmọ, Ọlọrun mi, si Ọ."
      },
      {
        english: "There let the way appear,\nSteps unto heaven;\nAll that Thou sendest me,\nIn mercy given;\nAngels to beckon me\nNearer, my God, to Thee.",
        yoruba: "Nibẹ jẹ ki ọna han,\nIgbesẹ si ọrun;\nGbogbo ohun ti O ran mi,\nNi aanu a fun;\nAngeli lati pe mi\nSunmọ, Ọlọrun mi, si Ọ."
      },
      {
        english: "Then, with my waking thoughts\nBright with Thy praise,\nOut of my stony griefs\nBethel I'll raise;\nSo by my woes to be\nNearer, my God, to Thee.",
        yoruba: "Nigbana, pelu ero mi nigba ti mo ba ji\nTi o mọlẹ pelu iyin Rẹ,\nLati inu ibanuje okuta mi\nBeteli ni yio kọ;\nBẹẹ nipa irora mi lati jẹ\nSunmọ, Ọlọrun mi, si Ọ."
      },
      {
        english: "Or, if on joyful wing\nCleaving the sky,\nSun, moon, and stars forgot,\nUpward I fly,\nStill all my song shall be,\nNearer, my God, to Thee.",
        yoruba: "Tabi, bi lori iyẹ ayọ\nTi n la ọrun,\nOorun, oṣupa, ati irawo gbagbe,\nMo fò soke,\nSibẹsi orin mi yio jẹ,\nSunmọ, Ọlọrun mi, si Ọ."
      }
    ]
  },
  {
    number: 60,
    title: "The Great Physician Now Is Near",
    titleYoruba: "Oniṣẹgun Nla Sunmọ Nisiyi",
    key: "Ab Major",
    tempo: "Moderato",
    solfa: `d d d r m m m, m f m r d
d d d r m m m, m f m r d
s s l s f m r, d r m
d d d r m m m, m f m r d`,
    chords: "Ab - Db Ab | Eb7 - Ab | Db - Ab/Eb Eb7 | Ab - - |",
    verses: [
      {
        english: "The great Physician now is near,\nThe sympathizing Jesus;\nHe speaks the drooping heart to cheer,\nOh, hear the voice of Jesus.",
        yoruba: "Oniṣẹgun nla sunmọ nisiyi,\nJesu abanike;\nO n sọrọ lati tu ọkan ti o rẹlẹ ninu,\nGbọ ohun Jesu."
      },
      {
        english: "Your many sins are all forgiven,\nOh, hear the voice of Jesus;\nGo on your way in peace to heaven,\nAnd wear a crown with Jesus.",
        yoruba: "Ẹsẹ rẹ pupọ ni a ti dariji gbogbo,\nGbọ ohun Jesu;\nMaa lọ ni ọna rẹ ni alafia si ọrun,\nKi o si wọ ade pelu Jesu."
      },
      {
        english: "All glory to the dying Lamb!\nI now believe in Jesus;\nI love the blessed Savior's Name,\nI love the Name of Jesus.",
        yoruba: "Gbogbo ogo fun Ọdọ-Agutan ti o ku!\nMo gbagbọ ninu Jesu nisiyi;\nMo nifẹ Orukọ Olugbala olubukun,\nMo nifẹ Orukọ Jesu."
      },
      {
        english: "His Name dispels my guilt and fear,\nNo other name but Jesus;\nOh! how my soul delights to hear\nThe charming Name of Jesus.",
        yoruba: "Orukọ Rẹ le ẹbi ati ibẹru mi kuro,\nKo si orukọ miran bikoṣe Jesu;\nO! bi ọkan mi ṣe n dunnu lati gbọ\nOrukọ lẹwa Jesu."
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
    solfa: `d d m s s l s, m r d
d d m s s l s, m r d
m m f s l s f, m r d
d d m s s l s, m r d`,
    chords: "D - G D | A7 - Bm | G - D/A A7 | D - - |",
    verses: [
      {
        english: "Conquerors and overcomers now are we,\nThrough the precious blood of Christ we've victory;\nIf God be for us, who can be against?\nWe are more than conquerors through Him.",
        yoruba: "Aṣẹgun ati abori ni awa nisiyi,\nNipasẹ ẹjẹ iyebiye Kristi a ni iṣẹgun;\nBi Ọlọrun ba wa fun wa, tani o le di wa lodi?\nA ju aṣẹgun lo nipasẹ Rẹ."
      },
      {
        english: "Through the trials and the tempests we will stand,\nFor our God holds us firmly in His hand;\nNothing can separate us from His love,\nWe are more than conquerors through Him.",
        yoruba: "Nipasẹ idanwo ati iji a o duro,\nNitori Ọlọrun wa mu wa ṣinṣin ni ọwọ Rẹ;\nKo si ohun ti o le ya wa kuro ninu ifẹ Rẹ,\nA ju aṣẹgun lo nipasẹ Rẹ."
      }
    ]
  },
  {
    number: 62,
    title: "O for a Thousand Tongues to Sing",
    titleYoruba: "Ẹgbẹrun Ahọn Lati Korin",
    key: "C Major",
    tempo: "Maestoso",
    solfa: `d d r m m r d, t l l t d
d d r m f m r, d r m r d
m m f s s f, m r d d r m
d d r m m r, d t l l t d`,
    chords: "C - F C | G7 - Am | F - C/G G7 | C - - |",
    verses: [
      {
        english: "O for a thousand tongues to sing\nMy great Redeemer's praise,\nThe glories of my God and King,\nThe triumphs of His grace!",
        yoruba: "Ẹgbẹrun ahọn lati korin\nIyin Olurande mi nla,\nOgo Ọlọrun mi ati Ọba mi,\nIṣẹgun oore-ọfẹ Rẹ!"
      },
      {
        english: "My gracious Master and my God,\nAssist me to proclaim,\nTo spread through all the earth abroad\nThe honors of Thy Name.",
        yoruba: "Oluwa oninurere mi ati Ọlọrun mi,\nRan mi lọwọ lati kede,\nLati tan ka gbogbo aiye\nỌla orukọ Rẹ."
      },
      {
        english: "Jesus! the Name that charms our fears,\nThat bids our sorrows cease;\n'Tis music in the sinner's ears,\n'Tis life, and health, and peace.",
        yoruba: "Jesu! Orukọ ti o le ibẹru wa kuro,\nTi o mu ibanuje wa dẹkun;\nOrin ni ninu eti ẹlẹṣẹ,\nIye ni, ati ilera, ati alafia."
      },
      {
        english: "He breaks the power of canceled sin,\nHe sets the prisoner free;\nHis blood can make the foulest clean,\nHis blood availed for me.",
        yoruba: "O fọ agbara ẹsẹ ti a ti paarẹ,\nO tu ẹlẹwọn silẹ;\nẸjẹ Rẹ le mu ẹni ẹlẹgbin julọ di mimọ,\nẸjẹ Rẹ to fun mi."
      },
      {
        english: "He speaks, and listening to His voice,\nNew life the dead receive,\nThe mournful, broken hearts rejoice,\nThe humble poor believe.",
        yoruba: "O sọrọ, ti a si n gbọ ohun Rẹ,\nIye titun ni oku gba,\nỌkan ibanuje ti o fọ yọ,\nAwon ọtọṣi onirẹlẹ gbagbọ."
      }
    ]
  },
  {
    number: 63,
    title: "Rock of Ages",
    titleYoruba: "Apata Ayeraye",
    key: "Bb Major",
    tempo: "Adagio",
    solfa: `d d d r m m, m f m r d t
d d d r m m, m f m r d
m m f s s f, m r d t l
d d d r m m, m f m r d`,
    chords: "Bb - Eb Bb | F7 - Gm | Eb - Bb/F F7 | Bb - - |",
    verses: [
      {
        english: "Rock of Ages, cleft for me,\nLet me hide myself in Thee;\nLet the water and the blood,\nFrom Thy wounded side which flowed,\nBe of sin the double cure;\nSave from wrath and make me pure.",
        yoruba: "Apata ayeraye, ti a la fun mi,\nJẹ ki n fi ara mi pamọ ninu Rẹ;\nJẹ ki omi ati ẹjẹ,\nLati ẹgbẹ Rẹ ti o farapa ti o n ṣan,\nJẹ iwosan ilọpo meji ẹsẹ;\nGba lọwọ ibinu ki O si mu mi mọ."
      },
      {
        english: "Not the labors of my hands\nCan fulfill Thy law's demands;\nCould my zeal no respite know,\nCould my tears forever flow,\nAll for sin could not atone;\nThou must save, and Thou alone.",
        yoruba: "Ki i se isẹ ọwọ mi\nLe mu ofin Rẹ ṣẹ;\nBi itara mi ko ba sinmi,\nBi omije mi ba ṣan titi lai,\nGbogbo rẹ ko le ṣe etunṣe fun ẹsẹ;\nIwọ gbọdọ gba la, ati Iwọ nikan."
      },
      {
        english: "Nothing in my hand I bring,\nSimply to the cross I cling;\nNaked, come to Thee for dress;\nHelpless, look to Thee for grace;\nFoul, I to the fountain fly;\nWash me, Savior, or I die.",
        yoruba: "Ko si ohun ninu ọwọ mi ti mo mu wa,\nNi irọrun ni mo di agbelebu mu;\nIhoho, mo wa sọdọ Rẹ fun aṣọ;\nAlainiranlọwọ, mo wo Ọ fun oore-ọfẹ;\nẸlẹgbin, mo sa si orisun;\nWẹ mi, Olugbala, tabi ki n ku."
      },
      {
        english: "While I draw this fleeting breath,\nWhen mine eyes shall close in death,\nWhen I soar to worlds unknown,\nSee Thee on Thy judgment throne,\nRock of Ages, cleft for me,\nLet me hide myself in Thee.",
        yoruba: "Nigba ti mo ba n mi ẹmi ti o n kọja yi,\nNigba ti oju mi ba pa ni iku,\nNigba ti mo ba fò si aiye ti a ko mọ,\nTi mo ri Ọ lori itẹ idajọ Rẹ,\nApata ayeraye, ti a la fun mi,\nJẹ ki n fi ara mi pamọ ninu Rẹ."
      }
    ]
  },
  {
    number: 64,
    title: "To God Be the Glory",
    titleYoruba: "Fun Ọlọrun Ni Ogo",
    key: "Ab Major",
    tempo: "Maestoso",
    solfa: `s s l t d s, d r s r m
m f l f m d, m m r l r
s s l t d s, d r s r m
m s f r d t, d m m r d`,
    chords: "Ab - Db Ab | Eb7 - Fm | Db - Ab/Eb Eb7 | Ab - - |",
    verses: [
      {
        english: "To God be the glory, great things He has done;\nSo loved He the world that He gave us His Son,\nWho yielded His life an atonement for sin,\nAnd opened the life gate that all may go in.",
        yoruba: "Fun Ọlọrun ni ogo, ohun nla ni O ti ṣe;\nO fẹ aiye tobẹẹ ti O fi Ọmọ Rẹ fun wa,\nTi O fi aye Rẹ silẹ gẹgẹ bi etunṣe fun ẹsẹ,\nO si ṣi ẹnu-ọna iye ki gbogbo wọn le wọle."
      },
      {
        english: "O perfect redemption, the purchase of blood,\nTo every believer the promise of God;\nThe vilest offender who truly believes,\nThat moment from Jesus a pardon receives.",
        yoruba: "Irapada pipe, ohun ti a ra pelu ẹjẹ,\nFun gbogbo onigbagbọ ileri Ọlọrun;\nẸni ti o ṣẹ julọ ti o gbagbọ nitootọ,\nNi akoko na lati ọdọ Jesu idariji gba."
      },
      {
        english: "Great things He has taught us, great things He has done,\nAnd great our rejoicing through Jesus the Son;\nBut purer, and higher, and greater will be\nOur wonder, our transport, when Jesus we see.",
        yoruba: "Ohun nla ni O ti kọ wa, ohun nla ni O ti ṣe,\nAti nla ni ayọ wa nipasẹ Jesu Ọmọ;\nṢugbọn mimọ ju, ati ga ju, ati nla ju ni yio jẹ\nIyanu wa, ayọ wa, nigba ti a ba ri Jesu."
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
    solfa: `s s s s d' t l s, f m l s m f r
m m m m l s s fe, s l t d' m fe s
d' t l s, d' t l s
l s f r d t d`,
    chords: "D - G D | A7 - Bm | G - D/A A7 | D - - |",
    verses: [
      {
        english: "Praise, my soul, the King of heaven;\nTo His feet thy tribute bring.\nRansomed, healed, restored, forgiven,\nEvermore His praises sing:\nAlleluia! Alleluia!\nPraise the everlasting King.",
        yoruba: "Yin, ọkan mi, Ọba ọrun;\nMu ọrẹ rẹ wa si ẹsẹ Rẹ.\nTi a ra pada, ti a wo san, ti a mu pada, ti a dari ji,\nMa korin iyin Rẹ titi lai:\nHaleluya! Haleluya!\nYin Ọba ayeraye."
      },
      {
        english: "Praise Him for His grace and favor\nTo our fathers in distress.\nPraise Him still the same as ever,\nSlow to chide, and swift to bless.\nAlleluia! Alleluia!\nGlorious in His faithfulness.",
        yoruba: "Yin I fun oore-ọfẹ ati ojurere Rẹ\nSi awon baba wa ninu ipọnju.\nYin I si bẹ bakanna titi lai,\nO lọra si ibawi, O si yara si ibukun.\nHaleluya! Haleluya!\nOgo ninu igbagbọ Rẹ."
      },
      {
        english: "Father-like He tends and spares us;\nWell our feeble frame He knows.\nIn His hands He gently bears us,\nRescues us from all our foes.\nAlleluia! Alleluia!\nWidely yet His mercy flows.",
        yoruba: "Bi baba O n tọju ati ṣaanu wa;\nO mọ apẹrẹ alailera wa daradara.\nNinu ọwọ Rẹ O fi tutu gbe wa,\nO gba wa lọwọ gbogbo ọta wa.\nHaleluya! Haleluya!\nSibẹ gbooro ni aanu Rẹ n ṣan."
      },
      {
        english: "Angels, help us to adore Him;\nYe behold Him face to face;\nSun and moon, bow down before Him,\nDwellers all in time and space.\nAlleluia! Alleluia!\nPraise with us the God of grace.",
        yoruba: "Ẹyin angeli, ẹ ran wa lọwọ lati jọsin fun Un;\nẸyin wo Oju Re ni oju kọju;\nOorun ati oṣupa, e tẹriba niwaju Rẹ,\nGbogbo olugbe ni akoko ati aaye.\nHaleluya! Haleluya!\nYin Ọlọrun oore-ọfẹ pẹlu wa."
      }
    ]
  },
  {
    number: 66,
    title: "O Come, All Ye Faithful",
    titleYoruba: "Ẹ Wá, Gbogbo Ẹyin Olọtitọ",
    key: "C Major",
    tempo: "Adagio",
    solfa: `d d s, d r s
m r m f m r, d d t l t d r t l s s
s f m f m, r m d r t l s
d d t d r d s, m m r m f m r
m f m r d t, d f m r d d`,
    chords: "C - F C | G7 - Am | F - C/G G7 | C - - |",
    verses: [
      {
        english: "O come, all ye faithful,\nJoyful and triumphant;\nO come ye, O come ye to Bethlehem;\nCome and behold Him,\nBorn the King of Angels.",
        yoruba: "Ẹ wá, gbogbo ẹyin olọtitọ,\nAyọ ati aṣẹgun;\nẸ wá, ẹ wá si Betlehemu;\nẸ wá ki ẹ wo Oun,\nTi a bi ni Ọba Awon Angeli."
      },
      {
        english: "God of God, Light of Light,\nLo, He abhors not the Virgin's womb;\nVery God, begotten, not created.",
        yoruba: "Ọlọrun lati ọdọ Ọlọrun, Imọlẹ lati Imọlẹ,\nWo, ko korira inu Wundia;\nỌlọrun tootọ, ti a bi, ti a ko da."
      },
      {
        english: "Sing, choirs of angels,\nSing in exultation,\nSing, all ye citizens of Heaven above!\nGlory to God\nIn the highest.",
        yoruba: "Ẹ korin, ẹgbẹ orin angeli,\nẸ korin ni ayọ nla,\nẸ korin, gbogbo ẹyin ara ilu Ọrun loke!\nOgo fun Ọlọrun\nNi ibi giga julọ."
      },
      {
        english: "Yea, Lord, we greet Thee,\nBorn this happy morning;\nJesus, to Thee be glory given!\nWord of the Father,\nNow in flesh appearing.",
        yoruba: "Bẹẹni, Oluwa, a ki O,\nTi a bi ni owurọ ayọ yi;\nJesu, fun Ọ ni ogo!\nỌrọ Baba,\nNisiyi ti o farahan ni ara."
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
    key: "D Major",
    tempo: "Allegro",
    solfa: `d d d r m m, r r r m f f
m m m f s s, f m r d r m
d d d r m m, r r r m f f
m m m f s s, d t l t d`,
    chords: "D - G D | A7 - D | G - D/A A7 | D - - |",
    verses: [
      {
        english: "There shall be showers of blessing:\nThis is the promise of love;\nThere shall be seasons refreshing,\nSent from the Savior above.",
        yoruba: "Ojo ibukun yio rọ:\nEyi ni ileri ifẹ;\nAkoko itutu yio wa,\nTi a ran lati ọdọ Olugbala loke."
      },
      {
        english: "There shall be showers of blessing,\nPrecious reviving again;\nOver the hills and the valleys,\nSound of abundance of rain.",
        yoruba: "Ojo ibukun yio rọ,\nIsoji iyebiye lẹẹkansi;\nLori awon oke ati awon afonifoji,\nOhun ojo pupọ."
      },
      {
        english: "There shall be showers of blessing;\nSend them upon us, O Lord;\nGrant to us now a refreshing,\nCome, and now honor Thy Word.",
        yoruba: "Ojo ibukun yio rọ;\nRan wọn si wa, Oluwa;\nFun wa ni itutu nisiyi,\nWa, ki O si bu ọla fun Ọrọ Rẹ."
      },
      {
        english: "There shall be showers of blessing:\nOh, that today they might fall,\nNow as to God we're confessing,\nNow as on Jesus we call!",
        yoruba: "Ojo ibukun yio rọ:\nO, ki won rọ loni,\nNisiyi bi a ṣe n jẹwọ fun Ọlọrun,\nNisiyi bi a ṣe n pe Jesu!"
      }
    ],
    chorus: {
      english: "Showers of blessing,\nShowers of blessing we need:\nMercy-drops round us are falling,\nBut for the showers we plead.",
      yoruba: "Ojo ibukun,\nOjo ibukun ni a nilo:\nỌwọ aanu n rọ si ayika wa,\nṢugbọn fun ojo nla ni a n bẹ."
    }
  },
  {
    number: 68,
    title: "All to Jesus I Surrender",
    titleYoruba: "Gbogbo Fun Jesu Ni Mo Fi Silẹ",
    key: "D Major",
    tempo: "Moderato",
    solfa: `d d r m s s, l l s m r
d d r m s s, l l s m r
m m f s l l, s f m r
d d r m s s, l l s m r`,
    chords: "D - G D | Em - A7 D | G - D/F# Bm | G - A7 D |",
    verses: [
      {
        english: "All to Jesus I surrender;\nAll to Him I freely give;\nI will ever love and trust Him,\nIn His presence daily live.",
        yoruba: "Gbogbo fun Jesu ni mo fi silẹ;\nGbogbo fun Un ni mo fi fun lọfẹ;\nEmi yio ma fẹ ati gbẹkẹle Rẹ,\nNinu wiwa Rẹ ni ma gbe lojojumo."
      },
      {
        english: "All to Jesus I surrender;\nHumbly at His feet I bow,\nWorldly pleasures all forsaken;\nTake me, Jesus, take me now.",
        yoruba: "Gbogbo fun Jesu ni mo fi silẹ;\nNi irẹlẹ ni ẹsẹ Rẹ ni mo tẹriba,\nIdunnu aiye gbogbo ti a fi silẹ;\nGba mi, Jesu, gba mi nisiyi."
      },
      {
        english: "All to Jesus I surrender;\nMake me, Savior, wholly Thine;\nLet me feel the Holy Spirit,\nTruly know that Thou art mine.",
        yoruba: "Gbogbo fun Jesu ni mo fi silẹ;\nMu mi, Olugbala, di Tirẹ patapata;\nJẹ ki n ni Ẹmi Mimo,\nMọ nitootọ pe Tirẹ ni mi."
      },
      {
        english: "All to Jesus I surrender;\nLord, I give myself to Thee;\nFill me with Thy love and power;\nLet Thy blessing fall on me.",
        yoruba: "Gbogbo fun Jesu ni mo fi silẹ;\nOluwa, mo fi ara mi fun Ọ;\nKun mi pelu ifẹ ati agbara Rẹ;\nJẹ ki ibukun Rẹ bọ si ori mi."
      },
      {
        english: "All to Jesus I surrender;\nNow I feel the sacred flame.\nO the joy of full salvation!\nGlory, glory, to His Name!",
        yoruba: "Gbogbo fun Jesu ni mo fi silẹ;\nNisiyi mo ni ina mimo.\nAyọ igbala ti o kun!\nOgo, ogo, fun Orukọ Rẹ!"
      }
    ],
    chorus: {
      english: "I surrender all, I surrender all,\nAll to Thee, my blessèd Savior,\nI surrender all.",
      yoruba: "Mo fi gbogbo silẹ, mo fi gbogbo silẹ,\nGbogbo fun Ọ, Olugbala olubukun mi,\nMo fi gbogbo silẹ."
    }
  },
  {
    number: 69,
    title: "Hallelujah, Hallelujah, Hallelujah",
    titleYoruba: "Haleluya, Haleluya, Haleluya",
    key: "D Major",
    tempo: "Allegretto",
    solfa: `d d m s s l s, m r d
m m f s l s f, m r d
s s l t d t l, s l t d
d m s l s f m, r m f m r d`,
    chords: "D - G D | A7 - D | G - D/F# Bm | Em - A7 D |",
    verses: [
      {
        english: "Hallelujah, hallelujah, hallelujah!\nPraise the Lord, the King of kings;\nHallelujah, hallelujah, hallelujah!\nLet creation rise and sing.",
        yoruba: "Haleluya, haleluya, haleluya!\nYin Oluwa, Ọba awon ọba;\nHaleluya, haleluya, haleluya!\nJẹ ki ẹda dide ki o si korin."
      },
      {
        english: "Hallelujah, hallelujah, hallelujah!\nHeaven and earth unite as one;\nHallelujah, hallelujah, hallelujah!\nVictory through the risen Son.",
        yoruba: "Haleluya, haleluya, haleluya!\nỌrun ati aiye darapọ bi ọkan;\nHaleluya, haleluya, haleluya!\nIṣẹgun nipasẹ Ọmọ ti o jinde."
      },
      {
        english: "Hallelujah, hallelujah, hallelujah!\nEverlasting praise we bring;\nHallelujah, hallelujah, hallelujah!\nWorthy is the Lamb, our King.",
        yoruba: "Haleluya, haleluya, haleluya!\nIyin ayeraye ni a mu wa;\nHaleluya, haleluya, haleluya!\nỌdọ-Agutan yẹ, Ọba wa."
      },
      {
        english: "Hallelujah, hallelujah, hallelujah!\nNow and forevermore we sing;\nHallelujah, hallelujah, hallelujah!\nGlory to our Lord and King.",
        yoruba: "Haleluya, haleluya, haleluya!\nNisiyi ati titi lai a korin;\nHaleluya, haleluya, haleluya!\nOgo fun Oluwa ati Ọba wa."
      }
    ],
    chorus: {
      english: "Hallelujah! Hallelujah!\nTo the Lamb upon the throne;\nHallelujah! Hallelujah!\nPraise Him, praise Him, Him alone!",
      yoruba: "Haleluya! Haleluya!\nFun Ọdọ-Agutan lori itẹ;\nHaleluya! Haleluya!\nYin I, yin I, On nikan!"
    }
  },
  {
    number: 70,
    title: "The Strife Is O'er, The Battle Done",
    titleYoruba: "Ija Ti Pari, Ogun Ti Tan",
    key: "C Major",
    tempo: "Allegro",
    solfa: `m r d m r d, m f s s f m
m r d m r d, m f s l s
m r d m r d, m f s s f m
m f s l s f, m r d`,
    chords: "C - F C | G7 - Am | F - C/G G7 | C - - |",
    verses: [
      {
        english: "Alleluia! Alleluia! Alleluia!\nThe strife is o'er, the battle done;\nThe victory of life is won;\nThe song of triumph has begun:\nAlleluia!",
        yoruba: "Haleluya! Haleluya! Haleluya!\nIja ti pari, ogun ti tan;\nIṣẹgun iyè ni a ti ṣẹgun;\nOrin iṣẹgun ti bẹrẹ:\nHaleluya!"
      },
      {
        english: "The powers of death have done their worst,\nBut Christ their legions hath dispersed;\nLet shouts of holy joy outburst:\nAlleluia!",
        yoruba: "Agbara iku ti ṣe ohun ti o buruju julọ,\nṢugbọn Kristi ti tú àwọn ọmọ-ogun wọn ka;\nJẹ ki ariwo ayọ mimọ ki o bu jade:\nHaleluya!"
      },
      {
        english: "The three sad days are quickly sped;\nHe rises glorious from the dead;\nAll glory to our risen Head!\nAlleluia!",
        yoruba: "Ọjọ mẹta ibanujẹ ti kọja lọ;\nO ji dide ninu oku pẹlu ogo;\nOgo ni fun Olori wa ti o ji dide!\nHaleluya!"
      },
      {
        english: "He closed the yawning gates of hell;\nThe bars from heaven's high portals fell;\nLet hymns of praise His triumphs tell:\nAlleluia!",
        yoruba: "O ti ẹnu-bode ọrun apadi;\nIdena ẹnu-bode ọrun ga wọ lulẹ;\nJẹ ki orin iyin sọ nipa iṣẹgun Rẹ:\nHaleluya!"
      },
      {
        english: "Lord, by the stripes which wounded Thee,\nFrom death's dread sting Thy servants free,\nThat we may live and sing to Thee:\nAlleluia!",
        yoruba: "Oluwa, nipa ọgbẹ ti o farapa fun wa,\nGba awọn iranṣẹ Rẹ kuro ninu iku,\nKi a le ye ki a si korin fun Ọ:\nHaleluya!"
      }
    ],
    chorus: {
      english: "Alleluia! Alleluia! Alleluia!\nPraise the Lord, the battle's won!\nAlleluia! Alleluia!\nVictory through God's own Son!",
      yoruba: "Haleluya! Haleluya! Haleluya!\nYin Oluwa, ogun ti ṣẹgun!\nHaleluya! Haleluya!\nIṣẹgun nipasẹ Ọmọ Ọlọrun!"
    }
  }
];
