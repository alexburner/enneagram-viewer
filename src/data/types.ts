interface TypeSummary {
  subtitle1: string
  subtitle2: string
  description: string
  problems: string
  best: string
  fear: string
  desire: string
  motivation: string
}

interface TypeRelation {
  title?: string
  description: string
  num: number
}

interface Type {
  num: number
  name: string
  summary: TypeSummary
  relations: {
    wingL: TypeRelation
    wingR: TypeRelation
    stress: TypeRelation
    growth: TypeRelation
  }
  detail: {
    overviewHtml: string
    addictions: string
    recommendations: string[]
  }
}

export const types: Type[] = [
  {
    num: 1,
    name: 'Reformer',
    summary: {
      subtitle1: 'Rational, Idealistic',
      subtitle2: 'Principled, Purposeful, Self-Controlled, and Perfectionistic',
      description:
        'Ones are conscientious and ethical, with a strong sense of right and wrong. They are teachers, crusaders, and advocates for change: always striving to improve things, but afraid of making a mistake. Well-organized, orderly, and fastidious, they try to maintain high standards, but can slip into being critical and perfectionistic.',
      problems: 'Resentment and impatience.',
      best: 'Wise, discerning, realistic, and noble. Can be morally heroic.',
      fear: 'Being corrupt/evil, defective',
      desire: 'To be good, to have integrity, to be balanced',
      motivation:
        'Want to be right, to strive higher and improve everything, to be consistent with their ideals, to justify themselves, to be beyond criticism so as not to be condemned by anyone.',
    },
    relations: {
      wingL: {
        title: 'Idealist',
        description: 'Type Nine makes Ones more introverted and relaxed.',
        num: 9,
      },
      wingR: {
        title: 'Advocate',
        description: 'Type Two makes Ones more extroverted and empathetic.',
        num: 2,
      },
      stress: {
        description:
          'methodical Ones become moody and irrational, like unhealthy Fours',
        num: 4,
      },
      growth: {
        description:
          'angry, critical Ones become more spontaneous and joyful, like healthy Sevens',
        num: 7,
      },
    },
    detail: {
      overviewHtml: `<p class="" style="white-space:pre-wrap;">We have named personality type One <strong>The Reformer</strong>&nbsp;because Ones have a “sense of mission” that leads them to want to improve the world in various ways, using whatever degree of influence they have. They strive to overcome adversity—particularly moral adversity—so that the human spirit can shine through and make a difference. They strive after “higher values,” even at the cost of great personal sacrifice.</p><p class="" style="white-space:pre-wrap;">History is full of Ones who have left comfortable lives to do something extraordinary because they felt that something higher was calling them. During the Second World War, Raoul Wallenburg left a comfortable middle-class life to work for the protection of thousands of European Jews from invading Nazis. In India, Gandhi left behind his wife and family and life as a successful lawyer to become an itinerant advocate of Indian independence and non-violent social changes. Joan of Arc left her village in France to restore the throne to the Dauphin and to expel the English from the country. The idealism of each of these Ones has inspired millions.</p><p class="" style="white-space:pre-wrap;">Ones are people of practical action—they wish to be <em>useful</em>&nbsp;in the best sense of the word. On some level of consciousness, they feel that they “have a mission” to fulfill in life, if only to try their best to reduce the disorder they see in their environment.</p><p class="" style="white-space:pre-wrap;">Although Ones have a strong sense of purpose, they also typically feel that they have to justify their actions to themselves, and often to others as well. This orientation causes Ones to spend a lot of time thinking about the consequences of their actions, as well as about how to keep from acting contrary to their convictions. Because of this, Ones often persuade themselves that they are “head” types, rationalists who proceed only on logic and objective truth. But, the real picture is somewhat different:&nbsp;<em>Ones are actually activists who are searching for an acceptable rationale for what they feel they must do</em>. They are people of instinct and passion who use convictions and judgments to control and direct themselves and their actions.</p><p class="" style="white-space:pre-wrap;">In the effort to stay true to their principles, Ones resist being affected by their instinctual drives, consciously not giving in to them or expressing them too freely. The result is a personality type that has problems with repression, resistance, and aggression. They are usually seen by others as highly self- controlled, even rigid, although this is not how Ones experience themselves. It seems to them that they are sitting on a cauldron of passions and desires, and they had better “keep the lid on” lest they and everyone else around them regret it.</p><p class="" style="white-space:pre-wrap;">Cassandra is a therapist in private practice who recalls the difficulty this caused her in her youth.</p><blockquote><p class="" style="white-space:pre-wrap;">“I remember in high school getting feedback that I had no feelings. Inside, I felt my feelings intensely and yet I just couldn’t let them out as intensely as I felt them. Even now, if I have a conflict with a friend and need to address an issue, I rehearse ahead of time how to express clearly what I want, need, and observe, and yet not be harsh or blaming in my anger which is often scathing.”</p></blockquote><p class="" style="white-space:pre-wrap;">Ones believe that being strict with themselves (and eventually becoming “perfect”) will justify them in their own eyes and in the eyes of others. But by attempting to create their own brand of perfection, they often create their own personal hell. Instead of agreeing with the statement in Genesis that God saw what He had created, “and it was good,” Ones intensely feel that “It wasn’t—there obviously have been some mistakes here!” This orientation makes it difficult for them to trust their inner guidance—indeed, to trust life—so Ones come to rely heavily on their superego, a learned voice from their childhood, to guide them toward “the greater good” which they so passionately seek. When Ones have gotten completely entranced in their personality, there is little distinction between them and this severe, unforgiving voice. Separating from it and seeing its genuine strengths and limitations is what growth for Ones is about.</p><p style="text-align:right;white-space:pre-wrap;" class="">(from <a href="/store"><em>The Wisdom of the Enneagram</em></a>, p. 99-100)</p>`,
      addictions:
        'Excessive use of diets, vitamins, and cleansing techniques (fasts, diet pills, enemas). Under-eating for self-control: in extreme cases anorexia and bulimia. Alcohol to relieve tension.',
      recommendations: [
        'Learn to relax. Take some time for yourself, without feeling that everything is up to you or that what you do not accomplish will result in chaos and disaster. Mercifully, the salvation of the world does not depend on you alone, even though you may sometimes feel it does.',
        'You have a lot to teach others and are probably a good teacher, but do not expect others to change immediately. What is obvious to you may not be as obvious to them, especially if they are not used to being as self-disciplined and objective about themselves as you are about yourself. Many people may also want to do what is right and may agree with you in principle but for various reasons simply cannot change right away. The fact that others do not change immediately according to your prescriptions does not mean that they will not change sometime in the future. Your words and above all, your example may do more good than you realize, although they may take longer than you expect. So have patience.',
        'It is easy for you to work yourself up into a lather about the wrongdoings of others. And it may sometimes be true that they are wrong. But what is it to you? Your irritation with them will do nothing to help them see another way of being. Similarly, beware of your constant irritation with your own "shortcomings." Does your own harsh self-criticism really help you to improve? Or does it simply make you tense, nervous, and self-doubting? Learn to recognize the attacks of your superego and how they undermine rather than help you.',
        'It is important for you to get in touch with your feelings, particularly your unconscious impulses. You may find that you are uneasy with your emotions and your sexual and aggressive impulses—in short, with the messy human things that make us human. It might be beneficial to keep a journal or to get into some kind of group therapy or other group work both to develop your emotions and to see that others will not condemn you for having human needs and limitations.',
        "Your Achilles' heel is your self-righteous anger. You get angry easily and are offended by what seems to you to be the perverse refusal of others to do the right thing—as you have defined it. Try to step back and see that your anger alienates people so that they cannot hear many of the good things you have to say. Further, your own repressed anger may well be giving you an ulcer or high blood pressure and is a harbinger of worse things to come.",
      ],
    },
  },
  {
    num: 2,
    name: 'Helper',
    summary: {
      subtitle1: 'Caring, Interpersonal',
      subtitle2: 'Generous, Demonstrative, People-Pleasing, and Possessive',
      description:
        'Twos are empathetic, sincere, and warm-hearted. They are friendly, generous, and self-sacrificing, but can also be sentimental, flattering, and people-pleasing. They are well-meaning and driven to be close to others, but can slip into doing things for others in order to be needed.',
      problems: 'Possessiveness and with acknowledging their own needs.',
      best: 'Unselfish and altruistic, they have unconditional love for others.',
      fear: 'Being unwanted, unworthy of being loved',
      desire: 'To feel loved',
      motivation:
        'Want to be loved, to express their feelings for others, to be needed and appreciated, to get others to respond to them, to vindicate their claims about themselves.',
    },
    relations: {
      wingL: {
        title: 'Servant',
        description:
          'Type One makes Twos more dutiful and better at setting boundaries.',
        num: 1,
      },
      wingR: {
        title: 'Host/ess',
        description: 'Type Three makes Twos more confident and ambitious.',
        num: 3,
      },
      stress: {
        description:
          'needy Twos become aggressive and dominating, like unhealthy Eights',
        num: 8,
      },
      growth: {
        description:
          'prideful, self-deceptive Twos become more self-nurturing and emotionally aware, like healthy Fours',
        num: 4,
      },
    },
    detail: {
      overviewHtml: `<p>We have named personality type Two <em>The Helper</em>&nbsp;because people of this type are either the most genuinely helpful to other people or, when they are less healthy they are the most highly invested in <em>seeing themselves </em>as helpful. Being generous and going out of their way for others makes Twos feel that theirs is the richest, most meaningful way to live. The love and concern they feel—and the genuine good they do—warms their hearts and makes them feel worthwhile. Twos are most interested in what they feel to be the “really, really good” things in life—love, closeness, sharing, family, and friendship.</p><p>Louise is a minister who shares the joy she finds in being a Two.</p><blockquote><p>“I cannot imagine being another type and I would not want to be another type. I like being involved in peoples’ lives. I like feeling compassionate, caring, nurturing. I like cooking and homemaking. I like having the confidence that anyone can tell me anything about themselves and I will be able to love them….I am really proud of myself and love myself for being able to be with people where they are. I really can, and do, love people, pets, and things. And I am a great cook!”</p></blockquote><p>When Twos are healthy and in balance, they really are loving, helpful, generous, and considerate. People are drawn to them like bees to honey. Healthy Twos warm others in the glow of their hearts. They enliven others with their appreciation and attention, helping people to see positive qualities in themselves that they had not previously recognized. In short, healthy Twos are the embodiment of “the good parent” that everyone wishes they had: someone who sees them as they are, understands them with immense compassion, helps and encourages with infinite patience, and is always willing to lend a hand—while knowing precisely how and when to let go. Healthy Twos open our hearts because theirs are already so open and they show us the way to be more deeply and richly human.</p><p>Louise continues:</p><blockquote><p>“All of my jobs revolved around helping people. I was a teacher who wanted to be sensitive to children and help them get off to a good start. I was a religious education director in a number of parishes. I thought that if people learned about the spiritual life, they’d be happier…The most important part of my life is my spiritual life. I was in a religious community for ten years. I married a former priest, and we both have our spirituality as the basis of our life together.”</p></blockquote><p>However, Twos’ inner development may be limited by their “shadow side”—pride, self-deception, the tendency to become over-involved in the lives of others, and the tendency to manipulate others to get their own emotional needs met. Transformational work entails going into dark places in ourselves, and this very much goes against the grain of the Two’s personality structure, which prefers to see itself in only the most positive, glowing terms.</p><p>Perhaps the biggest obstacle facing Twos, Threes, and Fours in their inner work is having to face their underlying Center fear of worthlessness. Beneath the surface, all three types fear that they are without value in themselves, and so they must be or do something extraordinary in order to win love and acceptance from others. In the average to unhealthy Levels, Twos present a false image of being completely generous and unselfish and of not wanting any kind of pay-off for themselves, when in fact, they can have enormous expectations and unacknowledged emotional needs.</p><p>Average to unhealthy <em>Twos seek validation of their worth by obeying their superego’s demands to sacrifice themselves for others.</em>&nbsp;They believe they must always put others first and be loving and unselfish if they want to get love. The problem is that “putting others first” makes Twos secretly angry and resentful, feelings they work hard to repress or deny. Nevertheless, they eventually erupt in various ways, disrupting Twos’ relationships and revealing the inauthenticity of many of the average to unhealthy Two’s claims about themselves and the depth of their “love.”</p><p>But in the healthy range, the picture is completely different. My own (Don's) maternal grandmother was an archetypal Two. During World War II, she was “Moms” to what seemed like half of Keesler Air Force Base in Biloxi, Mississippi, feeding the boys, allowing her home to be used as a “home away from home,” giving advice and consolation to anyone lonely or fearful about going to war. Although she and her husband were not wealthy and had two teenage children of their own, she cooked extra meals for the servicemen, put them up at night, and saw to it that their uniforms had all of their buttons and were well pressed. She lived until her 80’s, remembering those years as the happiest and most fulfilling of her life—probably because her healthy Two capacities were so fully and richly engaged.</p><p style="text-align:right">(from <a href="/store"><em>The Wisdom of the Enneagram</em></a>, p. 127-128)</p>`,
      addictions:
        'Abusing food and over-the-counter medications. Bingeing, especially on sweets and carbohydrates. Over-eating from feeling “love-starved;” in extreme cases bulimia. Hypochondria to look for sympathy. ',
      recommendations: [
        "First and foremost, remember that if you are not addressing your own needs, it is highly unlikely that you will be able to meet anyone else's needs without problems, underlying resentments, and continual frustration. Further, you will be less able to respond to people in a balanced way if you have not gotten adequate rest, and taken care of yourself properly. It is not selfish to make sure that you are okay before attending to others' needs—it is simply common sense.",
        'Try to become more conscious of your own motives when you decide to help someone. While doing good things for people is certainly an admirable trait, when you do so because you expect the other person to appreciate you or do something nice for you in return, you are setting yourself up for disappointments. Your type has a real danger of falling into unconscious codependent patterns with loved ones, and they almost never bring you what you really want.',
        `While there are many things you might want to do for people, it is often better to ask them what they really need first. You are gifted at accurately intuiting others' feelings and needs, but that does not necessarily mean that they want those needs remedied by you in the way you have in mind. Communicate your intentions, and be willing to accept a "no thank you." Someone deciding that they do not want your particular offer of help does not mean that they dislike you or are rejecting you.`,
        'Resist the temptation to call attention to yourself and your good works. After you have done something for others, do not remind them about it. Let it be: either they will remember your kindness themselves and thank you in their own way or they will not. Your calling attention to what you have done for them only puts people on the spot and makes them feel uneasy. It will not satisfy anyone or improve your relationships.',
        'Learn to recognize the affection and good wishes of others, even when these are not in terms that you are familiar with. Although others may not express their feelings in a way that you want, they may be letting you know in other ways how much they care about you. If you can recognize what others are giving you, you will rest more easily in the knowledge that you really are loved. Love is always available but only to the degree that we are present and therefore receptive to it.',
      ],
    },
  },
  {
    num: 3,
    name: 'Achiever',
    summary: {
      subtitle1: 'Success-Oriented, Pragmatic',
      subtitle2: 'Adaptable, Excelling, Driven, and Image-Conscious',
      description:
        'Threes are self-assured, attractive, and charming. Ambitious, competent, and energetic, they can also be status-conscious and highly driven for advancement. They are diplomatic and poised, but can also be overly concerned with their image and what others think of them.',
      problems: 'Workaholism and competitiveness.',
      best: 'Self-accepting, authentic, everything they seem to be—role models who inspire others.',
      fear: 'Being worthless',
      desire: 'To feel valuable and worthwhile',
      motivation:
        'Want to be affirmed, to distinguish themselves from others, to have attention, to be admired, and to impress others.',
    },
    relations: {
      wingL: {
        title: 'Charmer',
        description: 'Type Two makes Threes more people-oriented and generous.',
        num: 2,
      },
      wingR: {
        title: 'Professional',
        description:
          'Type Fours makes Threes more genuine and focused on their craft.',
        num: 4,
      },
      stress: {
        description:
          'driven Threes become disengaged and apathetic, like unhealthy Nines',
        num: 9,
      },
      growth: {
        description:
          'vain, deceitful Threes become more cooperative and committed to others, like healthy Sixes',
        num: 6,
      },
    },
    detail: {
      overviewHtml: `<p style="white-space: pre-wrap;">Threes are self-assured, attractive, and charming. Ambitious, competent, and energetic, they can also be status-conscious and highly driven for advancement. They are diplomatic and poised, but can also be overly concerned with their image and what others think of them. They typically have problems with workaholism and competitiveness.&nbsp;<em>At their Best</em>: self-accepting, authentic, everything they seem to be—role models who inspire others.</p><ul data-rte-list="default"><li><p style="white-space: pre-wrap;"><strong>Basic Fear:</strong> Of being worthless</p></li><li><p style="white-space: pre-wrap;"><strong>Basic Desire:</strong> To feel valuable and worthwhile</p></li><li><p style="white-space: pre-wrap;"><strong>Enneagram Three with a Two-Wing:</strong> "The Charmer"</p></li><li><p style="white-space: pre-wrap;"><strong>Enneagram Three with a Four-Wing:</strong> "The Professional"</p></li></ul><p style="white-space: pre-wrap;"><strong>Key Motivations:</strong>&nbsp;Want to be affirmed, to distinguish themselves from others, to have attention, to be admired, and to impress others.</p><h3 style="white-space: pre-wrap;">The Meaning of the Arrows (in brief)</h3><p style="white-space: pre-wrap;">When moving in their Direction of Disintegration (stress), driven Threes suddenly become disengaged and apathetic at <a href="https://www.enneagraminstitute.com/type-9">Nine</a>. However, when moving in their Direction of Integration (growth), vain, deceitful Threes become more cooperative and committed to others, like healthy <a href="https://www.enneagraminstitute.com/type-6">Sixes</a>.&nbsp;<a href="https://www.enneagraminstitute.com/how-the-enneagram-system-works">Learn more about the arrows</a>.&nbsp;</p><p style="white-space: pre-wrap;"><strong>Examples:</strong>&nbsp;Augustus Caesar, Emperor Constantine, Bill Clinton, Tony Blair, Prince William, Condoleeza Rice, Arnold Schwarzenegger, Carl Lewis, Muhammed Ali, John Edwards, Mitt Romney, Bill Wilson (AA Founder), Andy Warhol, Truman Capote, Werner Erhard, Oprah Winfrey, Deepak Chopra, Tony Robbins, Bernie Madoff, Bryant Gumbel, Michael Jordan, O.J. Simpson, Tiger Woods, Lance Armstrong, Elvis Presley, Paul McCartney, Madonna, Sting, Whitney Houston, Jon Bon Jovi, Lady Gaga, Taylor Swift, Justin Bieber, Brooke Shields, Cindy Crawford, Tom Cruise, Barbra Streisand, Ben Kingsley, Jamie Foxx, Richard Gere, Ken Watanabe, Will Smith, Courteney Cox, Demi Moore, Kevin Spacey, Reese Witherspoon, Anne Hathaway, Chef Daniel Boulud, Dick Clark, Ryan Seacrest, Cat Deeley, Mad Men’s “Don Draper,” Glee’s “Rachel Berry”</p><h2 style="white-space: pre-wrap;">Type Three Overview</h2><p style="white-space: pre-wrap;">We have named personality type Three <em>The Achiever</em>&nbsp;because when they are healthy, Threes really can and do achieve great things in the world. They are the "stars" of human nature, and people often look up to them because of their graciousness and personal accomplishments. Healthy Threes know how good it feels to develop themselves and contribute their abilities to the world, and also enjoy motivating others to greater personal achievements than others thought they were capable of. They are usually well regarded and popular among their peers, the type of person who is frequently voted “class president" or “home coming queen” because people feel they want to be associated with this kind of person who acts as a stand-in for them. Healthy Threes embody the best in a culture, and others are able to see their hopes and dreams mirrored in them.</p><p style="white-space: pre-wrap;">Threes are often successful and well liked because, of all the types, they most believe in themselves and in developing their talents and capacities. Threes act as living “role models” and paragons because of their extraordinary embodiment of socially valued qualities. Healthy Threes know that they are worth the effort it takes to be “the best that they can be.” Their success at doing so inspires others to invest in their own self-development.</p><p style="white-space: pre-wrap;">Threes want to make sure their lives are a success, however that is defined by their family, their culture, and their social sphere. In some families, success means having a lot of money, a grand house, a new, expensive car, and other status symbols. Others value ideas, and success to them means distinguishing oneself in academic or scientific worlds. Success in other circles might mean becoming famous as an actor, or model, or writer, or as a public figure of some kind, perhaps as a politician. A religious family might encourage a child to become a minister, priest, or rabbi since these professions have status in their community and in the eyes of the family. No matter how success is defined, Threes will try to become somebody noteworthy in their family and their community. They will not be a “nobody.”</p><p style="white-space: pre-wrap;">To this end, Threes learn to perform in ways that will garner them praise and positive attention. As children, they learned to recognize the activities that were valued by their parents or peers, and put their energies into excelling in those activities. Threes also learned how to cultivate and develop whatever about them is attractive or potentially impressive.</p><p style="white-space: pre-wrap;">Eve is a successful business-woman:</p><blockquote><p style="white-space: pre-wrap;">“My mother trained me to perform. I was about three when I performed my first solo in front of the church congregation. I got a lot of positive strokes for that and went on to perform in front of audiences throughout high school, either through music or debate. To this day, something mystical happens to me when I get in front of an audience. I ‘turn it on.’ I am called on frequently as a public speaker and some of my professional colleagues say that they hate following me on the program because I am such a hard act to follow!”</p></blockquote><p style="white-space: pre-wrap;">Everyone needs attention, encouragement, and the affirmation of their value in order to thrive, and Threes are the type which most exemplifies this universal human need. Threes want success not so much for the things that success will buy (like Sevens), or for the power and feeling of independence that it will bring (like Eights). They want success because they are afraid of disappearing into a chasm of emptiness and worthlessness: without the increased attention and feeling of accomplishment which success usually brings, Threes fear that they are nobody and have no value.</p><p style="white-space: pre-wrap;">The problem is that, in the headlong rush to achieve whatever they believe will make them more valuable, Threes can become so alienated from themselves that they no longer know what they truly want, or what their real feelings or interests are. In this state, they are easy prey to self–deception, deceit, and falseness of all kinds. Thus, the deeper problem is that their search for a way to be of value increasingly takes them further away from their own Essential Self with its core of real value. From their earliest years, as Threes become dependent on receiving attention from others and in pursuing the values that others reward, they gradually lose touch with themselves. Step by step, their own inner core, their “heart’s desire,” is left behind until they no longer recognize it.</p><p style="white-space: pre-wrap;">Thus, while they are the primary type in the Feeling Center, Threes, interestingly, are not known as “feeling” people; rather, they are people of action and achievement. It is as if they “put their feelings in a box” so that they can get ahead with what they want to achieve. Threes have come to believe that emotions get in the way of their performance, so they substitute thinking and practical action for feelings.</p><p style="white-space: pre-wrap;">Jarvis is a well-educated and accomplished business professional; he sees that this pattern developed in him at an early age.</p><blockquote><p style="white-space: pre-wrap;">“I had no conscious awareness of this at the time, but when I was a child, I wasn’t allowed to have my feelings at all. They counted for nothing in the framework of my stepfather’s concept of what it took to be successful. I developed the habit of denying my feelings and instead focused on performing and getting good marks in school.”</p></blockquote><p style="white-space: pre-wrap;">Threes report that when they realize to what extent they have adapted their lives to the expectations of others, the question arises, “Well, then, what do I want?” They often simply did not know; it was not a question that had ever come up before. Thus, the fundamental dilemma of Threes is that they have not been allowed to be who they really are and to manifest their own authentic qualities. At a young age, they got the message that they were not allowed to have feelings and be themselves: they must, in effect, be someone else to be accepted. To some degree, all of the personality types have been sent the same message, but because of their particular background and makeup, Threes not only heard it, they began to live by it. The attention they received by performing in a certain way was their oxygen, and they needed it to breathe. Unfortunately, it came at a high price.</p><p style="white-space: pre-wrap;">Marie, a skilled therapist describes the contradiction—and the pressure—of this orientation.</p><blockquote><p style="white-space: pre-wrap;">“For most of my life, people always noticed when I was involved in any kind of activity, and they have usually looked to me for some sort of direction. This has been a two-edged sword because while I wanted to be noticed and approved, the burden was that I had to be perfect—and that was tough.”</p></blockquote><p style="text-align: right; white-space: pre-wrap;">(from <a href="/store"><em>The Wisdom of the Enneagram</em></a>, p. 153-155)</p>`,
      addictions:
        'Over-stressing the body for recognition. Working out to exhaustion. Starvation diets. Workaholism. Excessive intake of coffee, stimulants, amphetamines, cocaine, steroids or excessive surgery for cosmetic improvement.',
      recommendations: [
        'For our real development, it is essential to be truthful. Be honest with yourself and others about your genuine feelings and needs. Likewise, resist the temptation to impress others or inflate your importance. You will impress people more deeply by being authentic than by bragging about your successes or exaggerating your accomplishments.',
        'Develop charity and cooperation in your relationships. You can do this by taking time to pause in a busy day to really connect with someone you care about. Nothing spectacular is required—simply a few moments of quiet appreciation. When you do so, you will become a more loving person, a more faithful friend—and a much more desirable individual. You will feel better about yourself.',
        'Take breaks. You can drive yourself and others to exhaustion with your relentless pursuit of your goals. Ambition and self-development are good qualities, but temper them with rest periods in which you reconnect more deeply with yourself. Sometimes taking three to five deep breaths is enough to recharge your battery and improve your outlook.',
        'Develop your social awareness. Many Threes have grown tremendously by getting involved in projects that had nothing to do with their own personal advancement. Working cooperatively with others toward goals that transcend personal interest is a powerful way of finding your true value and identity.',
        'In their desire to be accepted by others, some average Threes adapt so much to the expectations of others that they lose touch with what they are really feeling about the situation. Develop yourself by resisting doing what is acceptable just to be accepted. It is imperative that you invest time in discovering your own core values.',
      ],
    },
  },
  {
    num: 4,
    name: 'Individualist',
    summary: {
      subtitle1: 'Sensitive, Introspective',
      subtitle2: 'Expressive, Dramatic, Self-Absorbed, and Temperamental',
      description:
        'Fours are self-aware, sensitive, and reserved. They are emotionally honest, creative, and personal, but can also be moody and self-conscious. Withholding themselves from others due to feeling vulnerable and defective, they can also feel disdainful and exempt from ordinary ways of living.',
      problems: 'Melancholy, self-indulgence, and self-pity.',
      best: 'Inspired and highly creative, they are able to renew themselves and transform their experiences.',
      fear: 'That they have no identity or personal significance',
      desire:
        'To find themselves and their significance (to create an identity)',
      motivation:
        'Want to express themselves and their individuality, to create and surround themselves with beauty, to maintain certain moods and feelings, to withdraw to protect their self-image, to take care of emotional needs before attending to anything else, to attract a "rescuer."',
    },
    relations: {
      wingL: {
        title: 'Aristocrat',
        description: 'Type Three makes Fours more outgoing and efficient.',
        num: 3,
      },
      wingR: {
        title: 'Bohemian',
        description: 'Type Five makes Fours more detached and logical.',
        num: 5,
      },
      stress: {
        description:
          'aloof Fours become over-involved and clinging, like unhealthy Twos',
        num: 2,
      },
      growth: {
        description:
          'envious, emotionally turbulent Fours become more objective and principled, like healthy Ones',
        num: 1,
      },
    },
    detail: {
      overviewHtml: `<p>We have named this type <em>The Individualist </em>because Fours maintain their identity by seeing themselves as fundamentally different from others. Fours feel that they are unlike other human beings, and consequently, that no one can understand them or love them adequately. They often see themselves as uniquely talented, possessing special, one-of-a-kind gifts, but also as uniquely disadvantaged or flawed. More than any other type, Fours are acutely aware of and focused on their personal differences and deficiencies.</p><p>Healthy Fours are honest with themselves: they own all of their feelings and can look at their motives, contradictions, and emotional conflicts without denying or whitewashing them. They may not necessarily like what they discover, but they do not try to rationalize their states, nor do they try to hide them from themselves or others. They are not afraid to see themselves “warts and all.” Healthy Fours are willing to reveal highly personal and potentially shameful things about themselves because they are determined to understand the truth of their experience—so that they can discover who they are and come to terms with their emotional history. This ability also enables Fours to endure suffering with a quiet strength. Their familiarity with their own darker nature makes it easier for them to process painful experiences that might overwhelm other types.</p><p>Nevertheless, Fours often report that they feel they are missing something in themselves, although they may have difficulty identifying exactly what that “something” is. Is it will power? Social ease? Self-confidence? Emotional tranquility?—all of which they see in others, seemingly in abundance. Given time and sufficient perspective, Fours generally recognize that they are unsure about <em>aspects of their self-image</em>—their personality or ego-structure itself. They feel that they lack a clear and stable identity, particularly a social persona that they feel comfortable with.</p><p>While it is true that Fours often feel different from others, they do not really want to be alone. They may feel socially awkward or self-conscious, but they deeply wish to connect with people who understand them and their feelings. The “romantics” of the Enneagram, they long for someone to come into their lives and appreciate the secret self that they have privately nurtured and hidden from the world. If, over time, such validation remains out of reach, Fours begin to build their identity around <em>how unlike everyone else they are</em>. The outsider therefore comforts herself by becoming an insistent individualist: everything must be done on her own, in her own way, on her own terms. Fours’ mantra becomes “I am myself. Nobody understands me. I am different and special,” while they secretly wish they could enjoy the easiness and confidence that others seem to enjoy.</p><p>Fours typically have problems with a negative self-image and chronically low self-esteem. They attempt to compensate for this by cultivating a <em>Fantasy Self</em>—an idealized self-image which is built up primarily in their imaginations. A Four we know shared with us that he spent most of his spare time listening to classical music while fantasizing about being a great concert pianist—<em>à la</em>&nbsp;Vladimir Horowitz. Unfortunately, his commitment to practicing fell far short of his fantasized self-image, and he was often embarrassed when people asked him to play for them. His actual abilities, while not poor, became sources of shame.</p><p>In the course of their lives, Fours may try several different identities on for size, basing them on styles, preferences, or qualities they find attractive in others. But underneath the surface, they still feel uncertain about who they really are. The problem is that they base their identity largely on their feelings. When Fours look inward they see a kaleidoscopic, ever-shifting pattern of emotional reactions. Indeed, Fours accurately perceive a truth about human nature—that it is dynamic and ever changing. But because they want to create a stable, reliable identity from their emotions, they attempt to cultivate only certain feelings while rejecting others. Some feelings are seen as “me,” while others are “not me.” By attempting to hold on to specific moods and express others, Fours believe that they are being true to themselves.</p><p>One of the biggest challenges Fours face is learning to let go of feelings from the past; they tend to nurse wounds and hold onto negative feelings about those who have hurt them. Indeed, Fours can become so attached to longing and disappointment that they are unable to recognize the many treasures in their lives.</p><p>Leigh is a working mother who has struggled with these difficult feelings for many years.</p><blockquote><p>“I collapse when I am out in the world. I have had a trail of relationship disasters. I have hated my sister’s goodness—and hated goodness in general. I went years without joy in my life, just pretending to smile because real smiles would not come to me. I have had a constant longing for whatever I cannot have. My longings can never become fulfilled because I now realize that I am attached to ‘the longing’ and not to any specific end result.”</p></blockquote><p>There is a Sufi story that relates to this about an old dog that had been badly abused and was near starvation. One day, the dog found a bone, carried it to a safe spot, and started gnawing away. The dog was so hungry that it chewed on the bone for a long time and got every last bit of nourishment that it could out of it. After some time, a kind old man noticed the dog and its pathetic scrap and began quietly setting food out for it. But the poor hound was so attached to its bone that it refused to let go of it and soon starved to death.</p><p>Fours are in the same predicament. As long as they believe that there is something fundamentally wrong with them, they cannot allow themselves to experience or enjoy their many good qualities. To acknowledge their good qualities would be to lose their sense of identity (as a suffering victim) and to be without a relatively consistent personal identity (their Basic Fear). Fours grow by learning to see that much of their story is not true—or at least it is not true any more. The old feelings begin to fall away once they stop telling themselves their old tale: it is irrelevant to who they are right now.</p><p style="text-align:right">(from <a href="/store"><em>The Wisdom of the Enneagram</em></a>, p. 180-182)</p>`,
      addictions:
        'Over-indulgence in rich foods, sweets, alcohol to alter mood, to socialize, and for emotional consolation. Lack of physical activity. Bulimia. Depression. Tobacco, prescription drugs, or heroin for social anxiety. Cosmetic surgery to erase rejected features.',
      recommendations: [
        `Do not pay so much attention to your feelings; they are not a true source of support for you, as you probably already know. Remember this advice: "From our present perspective, we can also see that one of the most important mistakes Fours make is to equate themselves with their feelings. The fallacy is that to understand themselves they must understand their feelings, particularly their negative ones, before acting. Fours do not see that the self is not the same as its feelings or that the presence of negative feelings does not preclude the presence of good in themselves" (Personality Types, p. 172). Always remember that your feelings are telling you something about yourself as you are at this particular moment, not necessarily more than that.`,
        `Avoid putting off things until you are "in the right mood." Commit yourself to productive, meaningful work that will contribute to your good and that of others, no matter how small the contribution may be. Working consistently in the real world will create a context in which you can discover yourself and your talents. (Actually, you are happiest when you are working—that is, activating your potentials and realizing yourself. You will not "find yourself" in a vacuum or while waiting for inspiration to strike, so connect—and stay connected—with the real world.`,
        `Self-esteem and self-confidence will develop only from having positive experiences, whether or not you believe that you are ready to have them. Therefore, put yourself in the way of good. You may never feel that you are ready to take on a challenge of some sort, that you always need more time. (Fours typically never feel that they are sufficiently "together," but they must nevertheless have the courage to stop putting off their lives.) Even if you start small, commit yourself to doing something that will bring out the best in you.`,
        `A wholesome self-discipline takes many forms, from sleeping regular hours to working regularly to exercising regularly, and has a cumulative, strengthening effect. Since it comes from yourself, a healthy self-discipline is not contrary to your freedom or individuality. On the other hand, sensuality, excessive sexual experiences, alcohol, drugs, sleep, or fantasizing have a debilitating effect on you, as you already know. Therefore, practice healthy self-discipline and stay with it.`,
        `Avoid lengthy conversations in your imagination, particularly if they are negative, resentful, or even excessively romantic. These conversations are essentially unreal and at best only rehearsals for action—although, as you know, you almost never say or do what you imagine you will. Instead of spending time imagining your life and relationships, begin to live them.`,
      ],
    },
  },
  {
    num: 5,
    name: 'Investigator',
    summary: {
      subtitle1: 'Intense, Cerebral',
      subtitle2: 'Perceptive, Innovative, Secretive, and Isolated',
      description:
        'Fives are alert, insightful, and curious. They are able to concentrate and focus on developing complex ideas and skills. Independent, innovative, and inventive, they can also become preoccupied with their thoughts and imaginary constructs. They become detached, yet high-strung and intense.',
      problems: 'Eccentricity, nihilism, and isolation.',
      best: 'Visionary pioneers, often ahead of their time, and able to see the world in an entirely new way.',
      fear: 'Being useless, helpless, or incapable',
      desire: 'To be capable and competent',
      motivation:
        'Want to possess knowledge, to understand the environment, to have everything figured out as a way of defending the self from threats from the environment.',
    },
    relations: {
      wingL: {
        title: 'Iconoclast',
        description:
          'Type Four gives Fives better access to their emotions and their creativity.',
        num: 4,
      },
      wingR: {
        title: 'Problem Solver',
        description:
          'Type Six gives Fives greater persistence and makes them more social.',
        num: 6,
      },
      stress: {
        description:
          'detached Fives become hyperactive and scattered, like unhealthy Sevens',
        num: 7,
      },
      growth: {
        description:
          'avaricious, detached Fives become more self-confident and decisive, like healthy Eights',
        num: 8,
      },
    },
    detail: {
      overviewHtml: `<p class="" style="white-space:pre-wrap;">We have named personality type Five <em>The Investigator</em>&nbsp;because, more than any other type, Fives want to find out why things are the way they are. They want to understand how the world works, whether it is the cosmos, the microscopic world, the animal, vegetable, or mineral kingdoms—or the inner world of their imaginations. They are always searching, asking questions, and delving into things in depth. They do not accept received opinions and doctrines, feeling a strong need to test the truth of most assumptions for themselves.</p><p class="" style="white-space:pre-wrap;">John, a graphic artist, describes this approach to life.</p><blockquote><p class="" style="white-space:pre-wrap;">“Being a Five means always needing to learn, to take in information about the world. A day without learning is like a day without ‘sunshine.’ As a Five, I want to have an understanding of life. I like having a theoretical explanation about why things happen as they do. This understanding makes me feel in charge and in control. I most often learn from a distance as an observer and not a participant. Sometimes, it seems that understanding life is as good as living it. It is a difficult journey to learn that life must be lived and not just studied.”</p></blockquote><p class="" style="white-space:pre-wrap;">Behind Fives’ relentless pursuit of knowledge are deep insecurities about their ability to function successfully in the world.&nbsp;<em>Fives feel that they do not have an ability to do things as well as others</em>. But rather than engage directly with activities that might bolster their confidence, Fives “take a step back” into their minds where they feel more capable. Their belief is that from the safety of their minds they will eventually figure out how to do things—and one day rejoin the world.</p><p class="" style="white-space:pre-wrap;">Fives spend a lot of time observing and contemplating—listening to the sounds of wind or of a synthesizer, or taking notes on the activities in an anthill in their back yard. As they immerse themselves in their observations, they begin to internalize their knowledge and gain a feeling of self-confidence. They can then go out and play a piece on the synthesizer or tell people what they know about ants. They may also stumble across exciting new information or make new creative combinations (playing a piece of music based on recordings of wind and water). When they get verification of their observations and hypotheses, or see that others understand their work, it is a confirmation of their competency, and this fulfills their Basic Desire. (“You know what you are talking about.”)</p><p class="" style="white-space:pre-wrap;">Knowledge, understanding, and insight are thus highly valued by Fives, because their identity is built around “having ideas” and being someone who has something unusual and insightful to say. For this reason, Fives are not interested in exploring what is already familiar and well-established; rather, their attention is drawn to the unusual, the overlooked, the secret, the occult, the bizarre, the fantastic, the “unthinkable.” Investigating "unknown territory"—knowing something that others do not know, or creating something that no one has ever experienced—allows Fives to have a niche for themselves that no one else occupies. They believe that developing this niche is the best way that they can attain independence and confidence.</p><p class="" style="white-space:pre-wrap;">Thus, for their own security and self-esteem, Fives need to have at least one area in which they have a degree of expertise that will allow them to feel capable and connected with the world. Fives think, “I am going to find something that I can do really well, and then I will be able to meet the challenges of life. But I can’t have other things distracting me or getting in the way.” They therefore develop an intense focus on whatever they can master and feel secure about. It may be the world of mathematics, or the world of rock and roll, or classical music, or car mechanics, or horror and science fiction, or a world entirely created in their imagination. Not all Fives are scholars or Ph.Ds. But, depending on their intelligence and the resources available to them, they focus intensely on mastering something that has captured their interest.</p><p class="" style="white-space:pre-wrap;">For better or worse, the areas that Fives explore do not depend on social validation; indeed, if others agree with their ideas too readily, Fives tend to fear that their ideas might be too conventional. History is full of famous Fives who overturned accepted ways of understanding or doing things (Darwin, Einstein, Nietzsche). Many more Fives, however, have become lost in the byzantine complexities of their own thought processes, becoming merely eccentric and socially isolated.</p><p class="" style="white-space:pre-wrap;">The intense focus of Fives can thus lead to remarkable discoveries and innovations, but when the personality is more fixated, it can also create self-defeating problems. This is because their focus of attention unwittingly serves to distract them from their most pressing practical problems. Whatever the sources of their anxieties may be—relationships, lack of physical strength, inability to gain employment, and so forth—average Fives tend not to deal with these issues. Rather, they find something else to do that will make them feel more competent. The irony is that no matter what degree of mastery they develop in their area of expertise, this cannot solve their more basic insecurities about functioning in the world. For example, as a marine biologist, a Five could learn everything there is to know about a type of shellfish, but if her fear is that she is never going to be able to run her own household adequately, she will not have solved her underlying anxiety.</p><p class="" style="white-space:pre-wrap;">Dealing directly with physical matters can feel extremely daunting for Fives. Henry is a life scientist working in a major medical research lab:</p><blockquote><p class="" style="white-space:pre-wrap;">“Since I was a child, I have shied away from sports and strenuous physical activity whenever possible. I was never able to climb the ropes in gym class, stopped participating in sports as soon as it was feasible, and the smell of a gymnasium still makes me uncomfortable. At the same time, I have always had a very active mental life. I learned to read at the age of three, and in school I was always one of the smartest kids in academic subjects.”</p></blockquote><p class="" style="white-space:pre-wrap;">Thus, much of their time gets spent "collecting" and developing ideas and skills they believe will make them feel confident and prepared. They want to retain everything that they have learned and “carry it around in their heads.” The problem is that while they are engrossed in this process, they are not interacting with others or even increasing many other practical and social skills. They devote more and more time to collecting and attending to their collections, less to anything related to their real needs.</p><p class="" style="white-space:pre-wrap;">Thus, the challenge to Fives is to understand that they can pursue whatever questions or problems spark their imaginations <em>and</em>&nbsp;maintain relationships, take proper care of themselves, and do all of the things that are the hallmarks of a healthy life.</p><p style="text-align:right;white-space:pre-wrap;" class="">(from <a href="/store"><em>The Wisdom of the Enneagram</em></a>, p. 208-210)</p>`,
      addictions:
        'Poor eating and sleeping habits due to minimizing needs. Neglecting hygiene and nutrition. Lack of physical activity. Psychotropic drugs for mental stimulation and escape, narcotics for anxiety.',
      recommendations: [
        `Learn to notice when your thinking and speculating takes you out of the immediacy of your experience. Your mental capacities can be an extraordinary gift, but only can also be a trap when you use them to retreat from contact with yourself and others. Stay connected with your physicality.`,
        `You tend to be extremely intense and so high-strung that you find it difficult to relax and unwind. Make an effort to learn to calm down in a healthy way, without drugs or alcohol. Exercising or using biofeedback techniques will help channel some of your tremendous nervous energy. Meditation, jogging, yoga, and dancing are especially helpful for your type.`,
        `You see many possibilities but often do not know how to choose among them or judge which is more or less important. When you are caught in your fixation, a sense of perspective can be missing, and with it the ability to make accurate assessments. At such time, it can be helpful to get the advice of someone whose judgment you trust while you are gaining perspective on your situation. Doing this can also help you trust someone else, a difficulty for your type.`,
        `Notice when you are getting intensely involved in projects that do not necessarily support your self-esteem, confidence, or life situation. It is possible to follow many different fascinating subjects, games, and pastimes, but they can become huge distractions from what you know you really need to do. Decisive action will bring more confidence than learning more facts or acquiring more unrelated skills.`,
        `Fives tend to find it difficult to trust people, to open up to them emotionally, or to make themselves accessible in various ways. Their awareness of potential problems in relationships may tend to create a self-fulfilling prophecy. It is important to remember that having conflicts with others is not unusual and that the healthy thing is to work them out rather than reject attachments with people by withdrawing into isolation. Having one or two intimate friends whom you trust enough to have conflicts with will enrich your life greatly.`,
      ],
    },
  },
  {
    num: 6,
    name: 'Loyalist',
    summary: {
      subtitle1: 'Committed, Security-Oriented',
      subtitle2: 'Engaging, Responsible, Anxious, and Suspicious',
      description:
        'Sixes are reliable, hard-working, responsible, and trustworthy. Excellent "troubleshooters," they foresee problems and foster cooperation, but can also become defensive, evasive, and anxious—running on stress while complaining about it. They can be cautious and indecisive, but also reactive, defiant and rebellious.',
      problems: 'Self-doubt and suspicion.',
      best: 'Internally stable and self-reliant, courageously championing themselves and others.',
      fear: 'Being without support and guidance',
      desire: 'To have security and support',
      motivation:
        'Want to have security, to feel supported by others, to have certitude and reassurance, to test the attitudes of others toward them, to fight against anxiety and insecurity.',
    },
    relations: {
      wingL: {
        title: 'Defender',
        description: 'Type Five makes Sixes more analytical and introverted.',
        num: 5,
      },
      wingR: {
        title: 'Buddy',
        description:
          'Type Seven makes Sixes more risk-friendly and extroverted.',
        num: 7,
      },
      stress: {
        description:
          'dutiful Sixes become competitive and arrogant, like unhealthy Threes',
        num: 3,
      },
      growth: {
        description:
          'fearful, pessimistic Sixes become more relaxed and optimistic, like healthy Nines',
        num: 9,
      },
    },
    detail: {
      overviewHtml: `<p class="" style="white-space:pre-wrap;">We have named personality type Six <em>The Loyalist</em>&nbsp;because, of all the personality types, Sixes are the most loyal to their friends and to their beliefs. They will “go down with the ship” and hang on to relationships of all kinds far longer than most other types. Sixes are also loyal to ideas, systems, and beliefs—even to the belief that all ideas or authorities should be questioned or defied. Indeed, not all Sixes go along with the “status quo”: their beliefs may be rebellious and anti-authoritarian, even revolutionary. In any case, they will typically fight for their beliefs more fiercely than they will fight for themselves, and they will defend their community or family more tenaciously than they will defend themselves.</p><p class="" style="white-space:pre-wrap;">The reason Sixes are so loyal to others is that they do not want to be abandoned and left without support—their Basic Fear. Thus, the central issue for type Six is a failure of self-confidence. Sixes come to believe that they do not possess the internal resources to handle life’s challenges and vagaries alone, and so increasingly rely on structures, allies, beliefs, and supports outside themselves for guidance to survive. If suitable structures do not exist, they will help create and maintain them.</p><p class="" style="white-space:pre-wrap;">Sixes are the primary type in the Thinking Center, meaning that they have the most trouble contacting their own inner guidance. As a result,&nbsp;they do not have confidence in their own minds and judgments.</p><p class="" style="white-space:pre-wrap;">This does not mean that they do not think. On the contrary, they think—and worry—a lot! They also tend to fear making important decisions, although at the same time, they resist having anyone else make decisions for them. They want to avoid being controlled, but are also afraid of taking responsibility in a way that might put them “in the line of fire.” (The old Japanese adage that says, “The blade of grass that grows too high gets chopped off” relates to this idea.)</p><p class="" style="white-space:pre-wrap;">Sixes are always aware of their anxieties and are always looking for ways to construct “social security” bulwarks against them. If Sixes feel that they have sufficient back up, they can move forward with some degree of confidence. But if that crumbles, they become anxious and self-doubting, reawakening their Basic Fear. (“I’m on my own! What am I going to do now?”) A good question for Sixes might therefore be: “When will I know that I have enough security?” Or, to get right to the heart of it, “What is security?” Without Essential inner guidance and the deep sense of support that it brings, Sixes are constantly struggling to find firm ground.</p><p class="" style="white-space:pre-wrap;">Sixes attempt to build a network of trust over a background of unsteadiness and fear. They are often filled with a nameless anxiety and then try to find or create reasons why. Wanting to feel that there is something solid and clear-cut in their lives, they can become attached to explanations or positions that seem to explain their situation. Because “belief” (trust, faith, convictions, positions) is difficult for Sixes to achieve, and because it is so important to their sense of stability, once they establish a trustworthy belief, they do not easily question it, nor do they want others to do so. The same is true for individuals in a Six’s life: once Sixes feel they can trust someone, they go to great lengths to maintain connections with the person who acts as a sounding board, a mentor, or a regulator for the Six’s emotional reactions and behavior. They therefore do everything in their power to keep their affiliations going. (“If I don’t trust myself, then I have to find something in this world I <em>can</em>&nbsp;trust.”)</p><p class="" style="white-space:pre-wrap;">Although intelligent and accomplished, Connie still has to wrestle with the self-doubt of her type:</p><blockquote><p class="" style="white-space:pre-wrap;">“As my anxiety has come under control, so has my need to ‘check out’ everything with my friends. I used to have to get the nod of approval from several hundred (just joking!) ‘authorities.’ About nearly every decision would involve a council of my friends. I usually would do this one on one: ‘What do you think, Mary?’ ‘If I do this, then that might happen.’ Please make up my mind for me!’…Recently, I’ve narrowed my authorities to just one or two trusted friends, and on occasion, I’ve actually made up my own mind!“</p></blockquote><p class="" style="white-space:pre-wrap;">Until they can get in touch with their own inner guidance, Sixes are like a ping-pong ball that is constantly shuttling back and forth between whatever influence is hitting the hardest in any given moment. Because of this reactivity, no matter what we say about Sixes,&nbsp;<em>the opposite is often also as true</em>. They are both strong and weak, fearful and courageous, trusting and distrusting, defenders and provokers, sweet and sour, aggressive and passive, bullies and weaklings, on the defensive and on the offensive, thinkers and doers, group people and soloists, believers and doubters, cooperative and obstructionistic, tender and mean, generous and petty—and on and on. It is the contradictory picture that is the characteristic “fingerprint” of Sixes, the fact that they are a bundle of opposites.</p><p class="" style="white-space:pre-wrap;">The biggest problem for Sixes is that they try to build safety in the environment without resolving their own emotional insecurities. When they learn to face their anxieties, however, Sixes understand that although the world is always changing and is, by nature uncertain, they can be serene and courageous in any circumstance. And they can attain the greatest gift of all, a sense of peace with themselves despite the uncertainties of life.</p><p style="text-align:right;white-space:pre-wrap;" class="">(from <a href="/store"><em>The Wisdom of the Enneagram</em></a>, p. 235-236)</p>`,
      addictions: `Rigidity in diet causes nutritional imbalances ("I don't like vegetables"). Working excessively. Caffeine and amphetamines for stamina, but also alcohol and depressants to deaden anxiety. Higher susceptibility to alcoholism than many types.`,
      recommendations: [
        `Remember that there is nothing unusual about being anxious since everyone is anxious and much more often than you might think. Learn to be more present to your anxiety, to explore it, and to come to terms with it. Work creatively with your tensions without turning to excessive amounts of alcohol (or other drugs) to allay them. In fact, if you are present and breathing fully, anxiety can be energizing, a kind of tonic that can help make you more productive and aware of what you are doing.`,
        `You tend to get edgy and testy when you are upset or angry, and can even turn on others and blame them for things you have done or brought on yourself. Be aware of your pessimism: it causes you dark moods and negative thought patterns that you tend to project on reality. When you succumb to this self-doubt, you can become your own worst enemy and may harm yourself more than anyone else does.`,
        `Sixes tend to overreact when they are under stress and feeling anxious. Learn to identify what makes you overreact. Also realize that almost none of the things you have feared so much has actually come true. Even if things are as bad as you think, your fearful thoughts weaken you and your ability to change things for the better. You cannot always manage external events, but you can manage your own thoughts.`,
        `Work on becoming more trusting. There are doubtless several people in your life you can turn to who care about you and who are trustworthy. If not, go out of your way to find someone trustworthy, and allow yourself to get close to that person. This will mean risking rejection and stirring up some of your deepest fears, but the risk is worth taking. You have a gift for getting people to like you, but you are unsure of yourself and may be afraid of making a commitment to them. Therefore, come down clearly on one side or the other of the fence in your relationships. Let people know how you feel about them.`,
        `Others probably think better of you than you realize, and few people are really out to get you. In fact, your fears tell you more about your attitudes toward others than they indicate about others' attitudes toward you.`,
      ],
    },
  },
  {
    num: 7,
    name: 'Enthusiast',
    summary: {
      subtitle1: 'Busy, Variety-Seeking',
      subtitle2: 'Spontaneous, Versatile, Acquisitive, and Scattered',
      description:
        'Sevens are extroverted, optimistic, versatile, and spontaneous. Playful, high-spirited, and practical, they can also misapply their many talents, becoming over-extended, scattered, and undisciplined. They constantly seek new and exciting experiences, but can become distracted and exhausted by staying on the go.',
      problems: 'Impatience and impulsiveness.',
      best: 'They focus their talents on worthwhile goals, becoming appreciative, joyous, and satisfied.',
      fear: 'Being deprived and in pain',
      desire: 'To be satisfied and content—to have their needs fulfilled',
      motivation:
        'Want to maintain their freedom and happiness, to avoid missing out on worthwhile experiences, to keep themselves excited and occupied, to avoid and discharge pain.',
    },
    relations: {
      wingL: {
        title: 'Entertainer',
        description:
          'Type Six makes Sevens more responsible and focused on others.',
        num: 6,
      },
      wingR: {
        title: 'Realist',
        description: 'Type Eight makes Sevens more assertive and driven.',
        num: 8,
      },
      stress: {
        description:
          'scattered Sevens become perfectionistic and critical, like unhealthy Ones',
        num: 1,
      },
      growth: {
        description:
          'gluttonous, scattered Sevens become more focused and fascinated by life, like healthy Fives',
        num: 5,
      },
    },
    detail: {
      overviewHtml: `<p>We have named this personality type <em>The Enthusiast</em>&nbsp;because Sevens are enthusiastic about almost everything that catches their attention. They approach life with curiosity, optimism, and a sense of adventure, like “kids in a candy store” who look at the world in wide-eyed, rapt anticipation of all the good things they are about to experience. They are bold and vivacious, pursuing what they want in life with a cheerful determination. They have a quality best described by the Yiddish word “chutzpah”—a kind of brash “nerviness.”</p><p>Although Sevens are in the Thinking Center, this is not immediately apparent because they tend to be extremely practical and engaged in a multitude of projects at any given time. Their thinking is <em>anticipatory</em>: they foresee events and generate ideas “on the fly,” favoring activities that stimulate their minds—which in turn generate more things to do and think about. Sevens are not necessarily intellectual or studious by any standard definition, although they are often intelligent and can be widely read and highly verbal. Their minds move rapidly from one idea to the next, making Sevens gifted at brainstorming and synthesizing information. Sevens are exhilarated by the rush of ideas and by the pleasure of being spontaneous, preferring broad overviews and the excitement of the initial stages of the creative process to probing a single topic in depth.</p><p>Devon, a successful business woman, shares with us some of the inner workings of her Seven mindset.</p><blockquote><p>“I am definitely a list person. It’s not really for memory since I have a great memory. It’s more for down-loading information so that my mind won’t spin on it. For example, I was at a concert where the tickets were hard to get and very expensive. I couldn’t sit through it. My mind was torturing me with the things I needed to do. Finally, I had to get up and leave. This was very upsetting to the person I went with and I missed a good show.”</p></blockquote><p>Sevens are frequently endowed with quick, agile minds, and can be exceptionally fast learners. This is true both of their ability to absorb information (language, facts, and procedures) and their ability to learn new manual skills—they tend to have excellent mind-body coordination, and manual dexterity (typewriting, piano playing, tennis). All of this can combine to make a Seven into the quintessential "Renaissance person."</p><p>Ironically, Sevens' wide-ranging curiosity and ability to learn quickly can also create problems for them. Because they are able to pick up many different skills with relative ease, it becomes more difficult for them to decide what to do with themselves. As a result, they also do not always value their abilities as they would if they had to struggle to gain them. When Sevens are more balanced however, their versatility, curiosity, and ability to learn can lead them to extraordinary achievement.</p><p>The root of their problem is common to all of the types of the Thinking Center: they are out of touch with the inner guidance and support of their Essential nature. As with Fives and Sixes, this creates a deep anxiety in Sevens. They do not feel that they know what to do or how to make choices that will be beneficial to themselves and others. Sevens cope with this anxiety in two ways. First, they try to keep their minds busy all of the time. As long as Sevens can keep their minds occupied, especially with projects and positive ideas for the future, they can, to some extent, keep anxiety and negative feelings out of conscious awareness. Likewise, since their thinking is stimulated by activity, Sevens are compelled to stay on the go, moving from one experience to the next, searching for more stimulation. This is not to say that Sevens are "spinning their wheels." They generally enjoy being practical and getting things done.</p><p>Frances, a successful business consultant, sounds more energetic than is humanly possible—and yet, she is a typical Seven:</p><blockquote><p>“I am highly, highly productive. At the office, I am joyful and my mind is running at its best. I might create several marketing campaigns for a client, work on the outline for an upcoming seminar, talk out a difficult problem with a client on the telephone, close two deals, make a project list, dictate a few letters and look up to see that it’s 9:30 a.m. and my assistant is coming in to start our work for the day.”</p></blockquote><p>Second, Sevens cope with the loss of Essential guidance by using the “trial and error” method: they try everything to make sure they know what is best. On a very deep level,&nbsp;<em>Sevens do not feel that they can find what they really want in life.</em>&nbsp;They therefore tend to try everything—and ultimately may even resort to anything as a substitute for what they are really looking for. (“If I can’t have what will really satisfy me, I’ll enjoy myself anyway. I’ll have all kinds of experiences—that way I will not feel bad about not getting what I really want.”)</p><p>We can see this in action even in the most trivial areas of their daily lives. Unable to decide whether he wants vanilla, chocolate, or strawberry ice cream, a Seven will want all three flavors—just to be sure that he does not miss out on the “right” choice. Having two weeks for a vacation and a desire to visit Europe brings a similar quandary. Which countries and cities to visit? Which sites to see? The Seven’s way of dealing with this will be to cram as many different countries, cities, and attractions into his vacation as possible. While they are scrambling after exciting experiences, the real object of their heart’s desire (their personal Rosebud, as it were) may be so deeply buried in their unconscious that they are never really aware of precisely what it is.</p><p>Furthermore, as Sevens speed up their pursuit of whatever seems to offer freedom and satisfaction, they tend to make worse choices, and they are less able to be satisfied because everything is experienced indirectly, through the dense filter of their fast-paced mental activity. The result is that Sevens end up anxious, frustrated, and enraged, with fewer resources available to them physically, emotionally, or financially. They may end up ruining their health, their relationships, and their finances in their search for happiness.</p><p>Gertrude is busy establishing her career and family now, but she looks back at how this tendency contributed to her getting a rough start in life.</p><blockquote><p>“There wasn’t anything to do at home or in the tiny Southern town I grew up in. I was dying to get out of it and go someplace more exciting. When I was 16, I started dating, and before long I got pregnant, but the father didn’t want to marry me—which was okay since I didn’t want to marry him, either. It wasn’t too long before I found somebody else, and we got married, and I got to move to a larger city. But it didn’t really work out the way I wanted because after I had the baby, we broke up and I had to move back home. I stayed there for a year or two to get my feet on the ground. When things were looking bleak, I married someone else. I’m 19 now and I guess I’ve done a lot already.”</p></blockquote><p>On the positive side, however, Sevens are extremely optimistic people—exuberant and upbeat. They are endowed with abundant vitality and a desire to fully participate in their lives each day. They are naturally cheerful and good humored, not taking themselves too seriously, or anything else for that matter. As we have seen, the Basic Desire of Sevens is to be satisfied, happy, and fulfilled, and when they are balanced within themselves, their joy and enthusiasm for life naturally affect everyone around them. They remind us of the pure pleasure of existence—the greatest gift of all.</p><p style="text-align:right">(from <a href="/store"><em>The Wisdom of the Enneagram</em></a>, p. 262-264)</p>`,
      addictions: `The type most prone to addictions: stimulants (caffeine, cocaine, and amphetamines), Ecstasy, psychotropics, narcotics, and alcohol but tend to avoid other depressants. Wear body out with effort to stay "up." Excessive cosmetic surgery, pain killers. `,
      recommendations: [
        `Recognize your impulsiveness, and get in the habit of observing your impulses rather than giving in to them. This means letting most of your impulses pass and becoming a better judge of which ones are worth acting on. The more you can resist acting out your impulses, the more you will be able to focus on what is really good for you.`,
        `Learn to listen to other people. They are often interesting, and you may learn things that will open new doors for you. Also learn to appreciate silence and solitude: you do not have to distract yourself (and protect yourself from anxiety) with constant noise from the television or the stereo. By learning to live with less external stimulation, you will learn to trust yourself. You will be happier than you expect because you will be satisfied with whatever you do, even if it is less than you have been doing.`,
        `You do not have to have everything this very moment. That tempting new acquisition will most likely still be available tomorrow (this is certainly true of food, alcohol, and other common gratifications—that ice cream cone, for instance). Most good opportunities will come back again—and you will be in a better position to discern which opportunities really are best for you.`,
        `Always choose quality over quantity, especially in your experiences. The ability to have experiences of quality can be learned only by giving your full attention to the experience you are having now. If you keep anticipating future experiences, you will keep missing the present one and undermine the possibility of ever being satisfied.`,
        `Make sure that what you want will really be good for you in the long run. As the saying goes, watch what you pray for since your prayers may be answered. In the same vein, think about the long-term consequences of what you want since you may get it only to find that it becomes another disappointment—or even a source of unhappiness.`,
      ],
    },
  },
  {
    num: 8,
    name: 'Challenger',
    summary: {
      subtitle1: 'Powerful, Dominating',
      subtitle2: 'Self-Confident, Decisive, Willful, and Confrontational',
      description:
        'Eights are self-confident, strong, and assertive. Protective, resourceful, straight-talking, and decisive, but can also be ego-centric and domineering. Eights feel they must control their environment, especially people, sometimes becoming confrontational and intimidating.',
      problems: 'Tempers and with allowing themselves to be vulnerable.',
      best: "Self- mastering, they use their strength to improve others' lives, becoming heroic, magnanimous, and inspiring.",
      fear: 'Being harmed or controlled by others',
      desire:
        'To protect themselves (to be in control of their own life and destiny)',
      motivation:
        'Want to be self-reliant, to prove their strength and resist weakness, to be important in their world, to dominate the environment, and to stay in control of their situation.',
    },
    relations: {
      wingL: {
        title: 'Maverick',
        description: 'Type Seven makes Eights more light-hearted and outgoing.',
        num: 7,
      },
      wingR: {
        title: 'Bear',
        description: 'Type Nine makes Eights more relaxed and compassionate.',
        num: 9,
      },
      stress: {
        description:
          'self-confident Eights become secretive and fearful, like unhealthy Fives',
        num: 5,
      },
      growth: {
        description:
          'lustful, controlling Eights become more open-hearted and caring, like healthy Twos',
        num: 2,
      },
    },
    detail: {
      overviewHtml: `<p style="white-space: pre-wrap;">We have named personality type Eight <em>The Challenger</em>&nbsp;because, of all the types, Eights enjoy taking on challenges themselves as well as giving others opportunities that challenge them to exceed themselves in some way. Eights are charismatic and have the physical and psychological capacities to persuade others to follow them into all kinds of endeavors—from starting a company, to rebuilding a city, to running a household, to waging war, to making peace.</p><p style="white-space: pre-wrap;">Eights have enormous willpower and vitality, and they feel most alive when they are exercising these capacities in the world. They use their abundant energy to effect changes in their environment—to “leave their mark" on it—but also to keep the environment, and especially other people, from hurting them and those they care about. At an early age, Eights understand that this requires strength, will, persistence, and endurance—qualities that they develop in themselves and which they look for in others.</p><p style="white-space: pre-wrap;">Thayer is a stockbroker who has worked intensively on understanding her type Eight personality. She recounts a childhood incident in which she could clearly see the development of this pattern.</p><blockquote><p style="white-space: pre-wrap;">“Much of my tenacity and toughness comes from my Dad. He always told me not to ‘let anybody push you around.’ It was not okay to cry. I learned to master my weaker side early on. At the tender age of eight, a huge horse ran away with me. When an adult caught the horse, I resolutely dismounted without a tear. I could tell my father was proud.”</p></blockquote><p style="white-space: pre-wrap;">Eights do not want to be controlled or to allow others to have power over them (their Basic Fear), whether the power is psychological, sexual, social, or financial. Much of their behavior is involved with making sure that they retain and increase whatever power they have for as long as possible. An Eight may be a general or a gardener, a small businessman or a mogul, the mother of a family or the superior of a religious community. No matter: being “in charge” and leaving their imprint on their sphere is uniquely characteristic of them.</p><p style="white-space: pre-wrap;">Eights are the true “rugged individualists” of the Enneagram. More than any other type, they stand alone. They want to be independent, and resist being indebted to anyone. They often refuse to “give in” to social convention, and they can defy fear, shame, and concern about the consequences of their actions. Although they are usually aware of what people think of them, they do not let the opinions of others sway them. They go about their business with a steely determination that can be awe inspiring, even intimidating to others.</p><p style="white-space: pre-wrap;">Although, to some extent, Eights fear physical harm, far more important is their fear of being disempowered or controlled in some way. Eights are extraordinarily tough and can absorb a great deal of physical punishment without complaint—a double-edged blessing since they often take their health and stamina for granted and overlook the health and well-being of others as well. Yet they are desperately afraid of being hurt emotionally and will use their physical strength to protect their feelings and keep others at a safe emotional distance. Beneath the tough façade is vulnerability, although it has been covered over by layer of emotional armor.</p><p style="white-space: pre-wrap;">Thus, Eights are often extremely industrious, but at the price of losing emotional contact with many of the people in their lives. Those close to them may become increasingly dissatisfied with this state of affairs, which confounds Eights. (“I don't understand what my family is complaining about. I bust my hump to provide for them. Why are they disappointed with me?”)</p><p style="white-space: pre-wrap;">When this happens, Eights feel misunderstood and may distance themselves further. In fact, beneath their imposing exterior, Eights often feel hurt and rejected, although this is something they seldom talk about because they have trouble admitting their vulnerability to themselves, let alone to anyone else. Because they fear that they will be rejected (divorced, humiliated, criticized, fired, or harmed in some way), Eights attempt to defend themselves by rejecting others first. The result is that average Eights become <em>blocked in their ability to connect with people or to love</em>&nbsp;since love gives the other power over them, reawakening their Basic Fear.</p><p style="white-space: pre-wrap;">The more Eights build up their egos in order to protect themselves, the more sensitive they become to any real or imaginary slight to their self-respect, authority, or preeminence. The more they attempt to make themselves impervious to hurt or pain (whether physical or emotional), the more they “shut down” emotionally to become hardened and rock-like.</p><p style="white-space: pre-wrap;">When Eights are emotionally healthy, however, they have a resourceful, “can-do” attitude as well as a steady inner drive. They take the initiative and make things happen with a great passion for life. They are honorable and authoritative—natural leaders who have a solid, commanding presence. Their groundedness gives them abundant “common sense” as well as the ability to be decisive. Eights are willing to “take the heat,” knowing that any decision cannot please everyone. But as much as possible, they want to look after the interests of the people in their charge without playing favorites. They use their talents and fortitude to construct a better world for everyone in their lives.</p><p style="text-align: right; white-space: pre-wrap;">(from <a href="/store"><em>The Wisdom of the Enneagram</em></a>, p. 289-291)</p>`,
      addictions: `Ignore physical needs and problems: avoid medical visits and check-ups. Indulging in rich foods, alcohol, tobacco while pushing self too hard leads to high stress, strokes, and heart conditions. Control issues central, although alcoholism and narcotic addictions are possible.`,
      recommendations: [
        `It goes against the grain, but act with self-restraint. You show true power when you forbear from asserting your will with others, even when you could. Your real power lies in your ability to inspire and uplift people. You are at your best when you take charge and help everyone through a crisis. Few will take advantage of you when you are caring, and you will do more to secure the loyalty and devotion of others by showing the greatness of your heart than you ever could by displays of raw power.`,
        `It is difficult for Eights, but learn to yield to others, at least occasionally. Often, little is really at stake, and you can allow others to have their way without fear of sacrificing your power, or your real needs. The desire to dominate everyone all the time is a sign that your ego is beginning to inflate—a danger signal that more serious conflicts with others are inevitable.`,
        `Remember that the world is not against you. Many people in your life care about you and look up to you, but when you are in your fixation, you do not make this easy for them. Let in the affection that is available. Doing this will not make you weak, but will confirm the strength and support in yourself and your life. Also remember that by believing that others are against you and reacting against them, you tend to alienate them and confirm your own fears. Take stock of the people who truly are on your side, and let them know how important they are to you.`,
        `Eights typically want to be self-reliant and depend on no one. But, ironically, they depend on many people. For example, you may think that you are not dependent on your employees because they depend on you for their jobs. You could dismiss them at any time and hire other workers. Everyone is expendable in your little kingdom—except you. But the fact is that you are dependent on others to do their jobs too, especially if your business concerns grow beyond what you can manage alone. But if you alienate everyone associated with you, you will eventually be forced to employ the most obsequious and untrustworthy operatives. When you do, you will have reason to question their loyalty and to fear losing your position. The fact is that whether in your business world or your domestic life, your self-sufficiency is largely an illusion.`,
        `Eights typically overvalue power. Having power, whether through wealth, position, or simple brute force, allows them to do whatever they want, to feel important, to be feared and obeyed. But those who are attracted to you because of your power do not love you for yourself, nor do you love or respect them. While this may be the Faustian bargain you have made, you will nevertheless have to pay the price that whatever power you accumulated will inevitably be at a cost to you, physically and emotionally.`,
      ],
    },
  },
  {
    num: 9,
    name: 'Peacemaker',
    summary: {
      subtitle1: 'Easygoing, Self-Effacing',
      subtitle2: 'Receptive, Reassuring Agreeable, and Complacent',
      description:
        'Nines are accepting, trusting, and stable. They are usually creative, optimistic, and supportive, but can also be too willing to go along with others to keep the peace. They want everything to go smoothly and be without conflict, but they can also tend to be complacent, simplifying problems and minimizing anything upsetting.',
      problems: 'Inertia and stubbornness.',
      best: 'Indomitable and all-embracing, they are able to bring people together and heal conflicts.',
      fear: 'Loss and separation',
      desire: 'To have inner stability "peace of mind"',
      motivation:
        'Want to create harmony in their environment, to avoid conflicts and tension, to preserve things as they are, to resist whatever would upset or disturb them.',
    },
    relations: {
      wingL: {
        title: 'Referee',
        description: 'Type Eight makes Nines more energetic and confident.',
        num: 8,
      },
      wingR: {
        title: 'Dreamer',
        description: 'Type One makes Nines more idealistic and disciplined.',
        num: 1,
      },
      stress: {
        description:
          'complacent Nines become anxious and worried, like unhealthy Sixes',
        num: 6,
      },
      growth: {
        description:
          'slothful, self-neglecting Nines become more self-developing and energetic, like healthy Threes',
        num: 3,
      },
    },
    detail: {
      overviewHtml: `<p class="" style="white-space:pre-wrap;">We have called personality type Nine <em>The Peacemaker </em>because no type is more devoted to the quest for internal and external peace for themselves and others. They are typically “spiritual seekers” who have a great yearning for connection with the cosmos, as well as with other people. They work to maintain their peace of mind just as they work to establish peace and harmony in their world. The issues encountered in the Nine are fundamental to all psychological and spiritual work—being awake versus falling asleep to our true nature; presence versus entrancement, openness versus blockage, tension versus relaxation, peace versus pain, union versus separation.</p><p class="" style="white-space:pre-wrap;">Ironically, for a type so oriented to the spiritual world, Nine is the center of the Instinctive Center, and is the type that is potentially most grounded in the physical world and in their own bodies. The contradiction is resolved when we realize that Nines are either in touch with their instinctive qualities and have tremendous elemental power and personal magnetism, or they are cut off from their instinctual strengths and can be disengaged and remote, even lightweight.</p><p class="" style="white-space:pre-wrap;">To compensate for being out of touch with their instinctual energies, Nines also retreat into their minds and their emotional fantasies. (This is why Nines can sometimes misidentify themselves as Fives and Sevens, “head types,” or as Twos and Fours, “feeling types.”) Furthermore, when their instinctive energies are out of balance, Nines use these very energies against themselves, damming up their own power so that everything in their psyches becomes static and inert. When their energy is not used, it stagnates like a spring-fed lake that becomes so full that its own weight dams up the springs that feed it. When Nines are in balance with their Instinctive Center and its energy, however, they are like a great river, carrying everything along with it effortlessly.</p><p class="" style="white-space:pre-wrap;">We have sometimes called the Nine <em>the crown of the Enneagram</em>&nbsp;because it is at the top of the symbol and because it seems to include the whole of it. Nines can have the strength of Eights, the sense of fun and adventure of Sevens, the dutifulness of Sixes, the intellectualism of Fives, the creativity of Fours, the attractiveness of Threes, the generosity of Twos, and the idealism of Ones. However, what they generally do not have is a sense of really inhabiting themselves—<em>a strong sense of their own identity</em>.</p><p class="" style="white-space:pre-wrap;">Ironically, therefore, the only type the Nine is not like is the Nine itself. Being a separate self, an individual who must assert herself against others, is terrifying to Nines. They would rather melt into someone else or quietly follow their idyllic daydreams.</p><p class="" style="white-space:pre-wrap;">Red, a nationally known business consultant, comments on this tendency:</p><blockquote><p class="" style="white-space:pre-wrap;">“I am aware of focusing on other people, wondering what they are like, how and where they live, etc. In a relationship with others, I often give up my own agenda in favor of the other person’s. I have to be on guard about giving in to other’s demands and discounting my own legitimate needs.”</p></blockquote><p class="" style="white-space:pre-wrap;">Nines demonstrate the universal temptation to ignore the disturbing aspects of life and to seek some degree of peace and comfort by “numbing out.” They respond to pain and suffering by attempting to live in a state of premature peacefulness, whether it is in a state of false spiritual attainment, or in more gross denial. More than any other type, Nines demonstrate the tendency to run away from the paradoxes and tensions of life by attempting to transcend them or by seeking to find simple and painless solutions to their problems.</p><p class="" style="white-space:pre-wrap;">To emphasize the pleasant in life is not a bad thing, of course—it is simply a limited and limiting approach to life. If Nines see the silver lining in every cloud as a way of protecting themselves from the cold and rain, other types have their distorting viewpoints, too. For example, Fours focus on their own woundedness and victimization, Ones on what is wrong with how things are, and so forth. By contrast, Nines tend to focus on the “bright side of life” so that their peace of mind will not be shaken. But rather than deny the dark side of life, what Nines must understand is that <em>all of the perspectives presented by the other types are true, too</em>. Nines must resist the urge to escape into “premature Buddhahood” or the “white light” of the Divine and away from the mundane world. They must remember that “the only way out is through.”</p><p style="text-align:right;white-space:pre-wrap;" class="">(from <a href="/store"><em>The Wisdom of the Enneagram</em></a>, p. 316-317)</p>`,
      addictions: `Over-eating or under-eating due to lack of self-awareness and repressed anger. Lack of physical activity. Depressants and psychotropics, alcohol, marijuana, narcotics to deaden loneliness and anxiety.`,
      recommendations: [
        `It is worth examining your type's tendency to go along with others, doing what they want to keep the peace and be nice. Will constantly acquiescing to the wishes of others provide the kind of relationships that will really satisfy you? Remember, it is impossible to love others if you are not truly present to them. This means that you have to be yourself, that you (paradoxically) have to be independent so that you can really be there for others when they need you.`,
        `Exert yourself. Force yourself to pay attention to what is going on. Do not drift off or tune out people, or daydream. Work on focusing your attention to become an active participant in the world around you. Try to become more mentally and emotionally engaged.`,
        `Recognize that you also have aggressions, anxieties, and other feelings that you must deal with. Negative feelings and impulses are a part of you and they affect you emotionally and physically whether or not you acknowledge them. Furthermore, your negative emotions are often expressed inadvertently and get in the way of the peace and harmony you want in your relationships. It is best to get things out in the open first, at least by allowing yourself to become aware of your feelings.`,
        `Although this will be very painful for you, if your marriage has ended in divorce or if you are having problems with your children, you must honestly examine how you have contributed to these problems. Examining troubled relationships will be extremely difficult because the people involved have been close to your heart. The feelings you have for others endow you with much of your identity and self-esteem. But if you really love others, you can do no less than examine the role you have played in whatever conflicts that have arisen. In the last analysis, the choice is simple: you must sacrifice your peace of mind (in the short run) for the satisfaction of genuine relationships (in the long run.)`,
        `Exercise frequently to become more aware of your body and emotions. (Some Nines run around doing errands and think that they are getting enough exercise.) Regular exercise is a healthy form of self-discipline and will increase your awareness of your feelings and other sensations. Developing body-awareness will help teach you to concentrate and focus your attention in other areas of your life as well. Exercise is also a good way to get in touch with and express some aggressions.`,
      ],
    },
  },
]
