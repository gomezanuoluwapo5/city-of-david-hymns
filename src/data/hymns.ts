export interface Hymn {
  number: number;
  title: string;
  titleYoruba: string;
  verses: { english: string; yoruba: string }[];
}

export const hymns: Hymn[] = [
  {
    number: 1,
    title: "Holy, Holy, Holy",
    titleYoruba: "Mimo, Mimo, Mimo",
    verses: [
      {
        english: "Holy, holy, holy! Lord God Almighty!\nEarly in the morning our song shall rise to Thee;\nHoly, holy, holy, merciful and mighty!\nGod in three Persons, blessèd Trinity!",
        yoruba: "Mimo, mimo, mimo! Oluwa Olodumare!\nNi kutukutu owuro a korin fun O;\nMimo, mimo, mimo, alanu ati alagbara!\nOlorun ni eniyan meta, Metalokan olubukun!"
      },
      {
        english: "Holy, holy, holy! All the saints adore Thee,\nCasting down their golden crowns around the glassy sea;\nCherubim and seraphim falling down before Thee,\nWhich wert, and art, and evermore shalt be.",
        yoruba: "Mimo, mimo, mimo! Gbogbo enia mimo n josin fun O,\nWon n ju ade wura won si okun digi;\nKerubu ati Serafu n wolule niwaju Re,\nIwo ti wa, ti wa, ti yio ma wa titi."
      },
    ],
  },
  {
    number: 2,
    title: "Great Is Thy Faithfulness",
    titleYoruba: "Nla Ni Igbagbo Re",
    verses: [
      {
        english: "Great is Thy faithfulness, O God my Father;\nThere is no shadow of turning with Thee;\nThou changest not, Thy compassions, they fail not;\nAs Thou hast been, Thou forever wilt be.",
        yoruba: "Nla ni igbagbo Re, Olorun Baba mi;\nKo si ojiji iyipada lodo Re;\nIwo ko yipada, aanu Re ko kuna;\nBi O ti ri, bee ni yio ma ri titi."
      },
      {
        english: "Great is Thy faithfulness!\nGreat is Thy faithfulness!\nMorning by morning new mercies I see.\nAll I have needed Thy hand hath provided;\nGreat is Thy faithfulness, Lord, unto me!",
        yoruba: "Nla ni igbagbo Re!\nNla ni igbagbo Re!\nOwuro de owuro aanu titun ni mo ri.\nOhun gbogbo ti mo nilo owo Re ti pese;\nNla ni igbagbo Re, Oluwa, fun mi!"
      },
    ],
  },
  {
    number: 3,
    title: "Amazing Grace",
    titleYoruba: "Oore-Ofe Iyanu",
    verses: [
      {
        english: "Amazing grace! How sweet the sound\nThat saved a wretch like me!\nI once was lost, but now am found;\nWas blind, but now I see.",
        yoruba: "Oore-ofe iyanu! Ohun didun to\nTi gba elese bi emi la!\nMo ti sonu, sugbon a ti ri mi;\nMo ti foju, sugbon mo ti ri."
      },
      {
        english: "'Twas grace that taught my heart to fear,\nAnd grace my fears relieved;\nHow precious did that grace appear\nThe hour I first believed!",
        yoruba: "Oore-ofe lo ko okan mi lati beru,\nOore-ofe si tu iberu mi;\nIyebiye ni oore-ofe naa han\nNi wakati ti mo koko gbagbo!"
      },
    ],
  },
  {
    number: 4,
    title: "What a Friend We Have in Jesus",
    titleYoruba: "Ore Wo Ni A Ni Ni Jesu",
    verses: [
      {
        english: "What a friend we have in Jesus,\nAll our sins and griefs to bear!\nWhat a privilege to carry\nEverything to God in prayer!",
        yoruba: "Ore wo ni a ni ni Jesu,\nO ru ese ati irora wa!\nAnfaani wo ni lati gbe\nOhun gbogbo lo si Olorun ninu adura!"
      },
      {
        english: "Have we trials and temptations?\nIs there trouble anywhere?\nWe should never be discouraged;\nTake it to the Lord in prayer.",
        yoruba: "Nje a ni idanwo ati idanwo?\nNje wahala wa nibikibi?\nA ko gbodo ni ireti;\nGbe e lo si Oluwa ninu adura."
      },
    ],
  },
  {
    number: 5,
    title: "Blessed Assurance",
    titleYoruba: "Idaniloju Olubukun",
    verses: [
      {
        english: "Blessed assurance, Jesus is mine!\nO what a foretaste of glory divine!\nHeir of salvation, purchase of God,\nBorn of His Spirit, washed in His blood.",
        yoruba: "Idaniloju olubukun, Jesu je temi!\nO itowo iyin Olorun!\nArole igbala, ohun-ini Olorun,\nA bi nipa Emi Re, a we ninu eje Re."
      },
      {
        english: "This is my story, this is my song,\nPraising my Savior, all the day long;\nThis is my story, this is my song,\nPraising my Savior, all the day long.",
        yoruba: "Eyi ni itan mi, eyi ni orin mi,\nYin Olugbala mi, ni gbogbo ojo;\nEyi ni itan mi, eyi ni orin mi,\nYin Olugbala mi, ni gbogbo ojo."
      },
    ],
  },
  {
    number: 6,
    title: "How Great Thou Art",
    titleYoruba: "Tobi To Ni Iwo",
    verses: [
      {
        english: "O Lord, my God, when I in awesome wonder,\nConsider all the worlds Thy Hands have made;\nI see the stars, I hear the rolling thunder,\nThy power throughout the universe displayed.",
        yoruba: "Oluwa, Olorun mi, nigba ti mo ba wo iyanu,\nMo ronu gbogbo aye ti Owo Re da;\nMo ri irawo, mo gbo ara ti n yi,\nAgbara Re ni gbogbo aiye han."
      },
      {
        english: "Then sings my soul, my Saviour God, to Thee,\nHow great Thou art, how great Thou art.\nThen sings my soul, my Saviour God, to Thee,\nHow great Thou art, how great Thou art!",
        yoruba: "Okan mi n korin, Olorun Olugbala mi, fun O,\nTobi to ni Iwo, tobi to ni Iwo.\nOkan mi n korin, Olorun Olugbala mi, fun O,\nTobi to ni Iwo, tobi to ni Iwo!"
      },
    ],
  },
  {
    number: 7,
    title: "Rock of Ages",
    titleYoruba: "Apata Ayeraye",
    verses: [
      {
        english: "Rock of Ages, cleft for me,\nLet me hide myself in Thee;\nLet the water and the blood,\nFrom Thy wounded side which flowed,\nBe of sin the double cure;\nSave from wrath and make me pure.",
        yoruba: "Apata ayeraye, ti a la fun mi,\nJe ki n fi ara mi pamo ninu Re;\nJe ki omi ati eje,\nLati egbe Re ti o farapa ti n san,\nJe iwosan ilopo meji ese;\nGba lowo ibinu ki o si mu mi mo."
      },
    ],
  },
  {
    number: 8,
    title: "It Is Well with My Soul",
    titleYoruba: "O Dara Fun Okan Mi",
    verses: [
      {
        english: "When peace, like a river, attendeth my way,\nWhen sorrows like sea billows roll;\nWhatever my lot, Thou hast taught me to say,\nIt is well, it is well, with my soul.",
        yoruba: "Nigba ti alafia, bi odo, ba tele ona mi,\nNigba ti ibanuje bi igbi okun ba yi;\nOhunkohun ti o ba je ipin mi, O ti ko mi lati so,\nO dara, o dara, fun okan mi."
      },
      {
        english: "It is well, with my soul,\nIt is well, it is well, with my soul.",
        yoruba: "O dara, fun okan mi,\nO dara, o dara, fun okan mi."
      },
    ],
  },
  {
    number: 9,
    title: "Nearer My God to Thee",
    titleYoruba: "Sunmo Olorun Mi",
    verses: [
      {
        english: "Nearer, my God, to Thee,\nNearer to Thee!\nE'en though it be a cross\nThat raiseth me,\nStill all my song shall be,\nNearer, my God, to Thee.",
        yoruba: "Sunmo, Olorun mi, si O,\nSunmo si O!\nBi o ti le je agbelebu\nTi o gbe mi soke,\nSibesi orin mi yio je,\nSunmo, Olorun mi, si O."
      },
    ],
  },
  {
    number: 10,
    title: "All Hail the Power of Jesus' Name",
    titleYoruba: "E Ku Orire Agbara Oruko Jesu",
    verses: [
      {
        english: "All hail the power of Jesus' Name!\nLet angels prostrate fall;\nBring forth the royal diadem,\nAnd crown Him Lord of all.",
        yoruba: "E ku orire agbara oruko Jesu!\nJe ki awon angeli wolule;\nMu ade oba jade,\nKi e si fi de ori Re gege bi Oluwa gbogbo."
      },
    ],
  },
];
