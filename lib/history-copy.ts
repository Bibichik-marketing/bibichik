import type {Locale} from './i18n';

type Chapter = {id:string; eyebrow:string; title:string; body:readonly string[]; image:string; alt:string};
type HistoryCopy = {title:string; subtitle:string; intro:string; explore:string; chapters:readonly Chapter[]; closing:string; sources:string; sourceNote:string};

const ids=['meaning','crossroads','roots','everyday','kitchen','today'];
const images=['tiles','story-hero','tiffin','space','spice','feast'];
function chapters(rows:readonly (readonly [string,string,readonly string[],string])[]):Chapter[]{return rows.map(([eyebrow,title,body,alt],i)=>({id:ids[i],eyebrow,title,body,image:images[i],alt}));}

export const historyCopy:Record<Locale,HistoryCopy>={
  en:{
    title:'What is Nyonya?',subtitle:'A living history shaped by journeys, homes and the table.',
    intro:'A Nyonya dish can tell a story longer than its list of ingredients. Its flavours carry memories of family kitchens and centuries of exchange across Southeast Asia. To understand the food, we begin with the people and the name.',
    explore:'Explore the chapters',
    chapters:chapters([
      ['01 / A name and an identity','What does Nyonya mean?',['Nyonya generally refers to a woman of the Chinese Peranakan community; Baba is a corresponding term for a man. Chinese Peranakans are part of a wider Peranakan world, which includes communities of varied ancestry and local heritage.','Nyonya is therefore more than the name of a cuisine. It opens a window onto languages, customs, craft and food shaped by life between cultures.'],'Peranakan floral tiles and books'],
      ['02 / Journeys and encounters','Where cultures met',['For centuries, Southeast Asian ports connected merchants and travellers from many places. Some put down roots. As people shared a place and a life, inherited traditions met local languages, materials and ways of living.','Peranakan identities developed through these encounters. They cannot be traced to one person, one moment or one unchanging tradition.'],'Still life in warm window light'],
      ['03 / A sense of place','Rooted in the region',['Chinese Peranakan communities have long been associated with places such as Melaka, Penang and Singapore. Yet their histories are not identical. The languages spoken, customs practised and dishes prepared can differ between regions and families.','Baba Malay is one expression of this heritage; in Penang, many Baba-Nyonya families speak a variety of Hokkien. Place has always shaped the story.'],'Nyonya tiffin carrier and kuih'],
      ['04 / Life at home','History in everyday things',['Culture lives in objects as well as words. Patterned ceramics came to the table; textiles, embroidery and beadwork became part of dress and home life. At gatherings, food and the things used to serve it helped make memories.','These objects are admired for their colour and craftsmanship today. They also belonged to real lives: meals, celebrations, hospitality and the passing on of skills.'],'Warm interior with rattan seating'],
      ['05 / The family kitchen','A cuisine that kept changing',['Nyonya cooking developed in that same everyday world. Methods carried across generations met locally available ingredients and spices. Recipes were made again and again, changing with place and family preference.','No single recipe defines every Nyonya table. A dish may take different forms in different homes. The aroma of a spice paste and a relative’s instinctive seasoning can hold as much history as a written recipe.'],'Herbs and spices used in Malaysian cooking'],
      ['06 / A living heritage','The story continues',['Nyonya culture did not end in the past. People continue to cook, make, wear, speak about and reinterpret these traditions. Some practices retain familiar forms; others change as life changes.','To learn this history is not to find one “correct” version. It is to see how people made something of their own when cultures met—and how each retelling carries the story forward.'],'Nyonya food shared around a table']
    ]),
    closing:'A history still being made, one home and one table at a time.',sources:'Further reading',sourceNote:'Historical context from the Peranakan Museum, National Heritage Board of Singapore.'
  },
  zh:{
    title:'什么是娘惹？',subtitle:'一段由迁徙、家庭与餐桌共同写成的历史。',
    intro:'一道娘惹菜，常常能让人看见比食材更长久的故事。它的味道来自家庭的厨房，也来自东南亚港口之间持续数百年的往来与交流。要认识娘惹料理，可以先从“娘惹”这个称呼说起。',
    explore:'探索章节',
    chapters:chapters([
      ['01 / 一个称呼','从一个称呼开始',['“娘惹”（Nyonya）通常用来称呼土生华人社群中的女性；男性则常被称为“峇峇”（Baba）。土生华人属于范围更广的土生文化（Peranakan）的一部分。Peranakan 并非单指一种族群，它涵盖了融合祖辈文化与当地生活方式的不同社群。','因此，娘惹不只是某一种菜的名字。这个称呼也让我们看见一个社群如何在多种文化之间，逐渐形成自己的语言、习俗、审美与饮食记忆。'],'娘惹花纹瓷砖与书本'],
      ['02 / 海上往来','文化在此相遇',['东南亚的海港长期连接着不同地方的商人和旅人。有人在这里停留，有人在这里安家。随着不同背景的人们共同生活，原有的传统与当地的语言、材料和习惯相遇，慢慢发展出多样的土生文化。','这些文化并非在某一天突然诞生，也不能用一个人的故事概括。它们在一代又一代人的生活中逐渐形成。'],'温暖窗光中的静物'],
      ['03 / 在地扎根','在不同地方生长',['马六甲、槟城与新加坡等地，都留下了土生华人社群的生活痕迹。但各地的发展并不完全相同：说话的方式、家庭习俗，甚至餐桌上的味道，都可能因地方与家庭而异。','峇峇马来语是其中一种语言表达；在槟城，也有许多峇峇娘惹家庭使用槟城福建话。娘惹文化没有一个可以概括所有人的单一版本。'],'娘惹提盒与糕点'],
      ['04 / 家中岁月','历史藏在日常生活里',['文化的传承不只发生在重要节日，也存在于日常使用的物件之中。花纹瓷器被摆上餐桌；布料、刺绣与珠饰融入穿着和家居；家人相聚时，食物与餐具一起成为记忆的一部分。','这些物件今天看来色彩鲜明、工艺精细，但它们的意义不止于美丽。它们曾陪伴真实的人生活、待客、庆祝，也让一代人的审美和手艺传到下一代。'],'藤椅与木质细节交织的温暖空间'],
      ['05 / 家庭厨房','厨房里的文化交汇',['娘惹料理同样是在这样的生活中逐渐形成的。来自不同传统的做法，与当地可取得的食材和香料相遇；一道菜经过反复烹煮，也随着家人的口味改变。','因此，很难用一份固定食谱定义所有娘惹菜。同名的料理，在不同家庭或地区可能有不同做法。有人记得的是香料研磨时的气味，有人记得的是长辈在灶边凭经验调味的动作。食谱记录了做法，餐桌则保存了人与人之间的记忆。'],'马来西亚料理使用的香草与香料'],
      ['06 / 延续至今','一段仍在延续的历史',['娘惹文化并未停留在过去。今天，人们仍在穿着、制作、烹煮、讲述和重新理解这些传统。有些习惯延续了旧时的样貌，有些则随着生活改变。','认识娘惹历史，不是为了寻找唯一“正确”的模样，而是去理解：当不同文化在同一个地方相遇，人们如何从日常生活中创造出属于自己的表达。而每一次把故事讲给下一代听，都是这段历史的继续。'],'餐桌上分享的娘惹料理']
    ]),
    closing:'这段历史，仍在每个家庭与每张餐桌上继续。',sources:'延伸阅读',sourceNote:'历史背景参考新加坡国家文物局土生文化馆资料。'
  },
  ko:{
    title:'뇨냐란 무엇인가요?',subtitle:'여정과 가정, 식탁이 함께 써 내려온 살아 있는 역사.',
    intro:'뇨냐 음식 한 접시에는 재료 목록보다 긴 이야기가 담겨 있습니다. 그 맛에는 가족의 부엌과 동남아시아 항구를 오간 오랜 교류의 기억이 남아 있습니다. 음식을 이해하려면 먼저 사람들과 그 이름을 만나야 합니다.',
    explore:'이야기 살펴보기',
    chapters:chapters([
      ['01 / 이름과 정체성','뇨냐는 누구인가요?',['뇨냐(Nyonya)는 일반적으로 중국계 페라나칸 여성, 바바(Baba)는 남성을 가리킵니다. 중국계 페라나칸은 여러 혈통과 지역 문화가 어우러진 더 넓은 페라나칸 세계의 일부입니다.','따라서 뇨냐는 요리 이름만이 아닙니다. 문화가 만나는 자리에서 형성된 언어와 생활 방식, 공예와 음식의 역사를 들여다보게 합니다.'],'페라나칸 무늬 타일과 책'],
      ['02 / 바다를 건너','문화가 만난 곳',['동남아시아의 항구는 오랫동안 여러 지역의 상인과 여행자를 이어 주었습니다. 이곳에 정착한 사람들이 함께 살아가면서 조상에게서 물려받은 전통은 현지의 언어와 재료, 생활 방식과 만났습니다.','페라나칸 문화는 단 한 사람이나 한 시점에서 시작된 것이 아닙니다. 여러 세대에 걸친 일상 속에서 서서히 발전했습니다.'],'따뜻한 창가의 정물'],
      ['03 / 지역에 뿌리내리다','장소마다 다른 이야기',['말라카, 페낭, 싱가포르 등에는 오랜 중국계 페라나칸 공동체의 흔적이 남아 있습니다. 그러나 지역과 가정에 따라 사용하는 언어, 지키는 관습, 식탁의 맛은 서로 다릅니다.','바바 말레이어는 그중 하나이며, 페낭의 바바·뇨냐 공동체에서는 페낭 호키엔어도 사용합니다. 뇨냐 문화는 하나의 모습으로만 설명할 수 없습니다.'],'뇨냐 찬합과 쿠이'],
      ['04 / 집 안의 시간','일상에 남은 역사',['문화는 말뿐 아니라 사물에도 남습니다. 무늬가 있는 도자기는 식탁에 놓이고, 직물과 자수, 구슬 장식은 옷과 집을 꾸몄습니다. 가족이 모이는 날에는 음식과 그릇이 함께 추억이 되었습니다.','오늘날 이 물건들은 색채와 정교한 솜씨로 사랑받습니다. 동시에 누군가의 식사와 손님맞이, 축하와 기술의 전승에 함께한 생활의 흔적이기도 합니다.'],'라탄 의자가 있는 따뜻한 실내'],
      ['05 / 가족의 부엌','부엌에서 이어진 문화',['뇨냐 음식도 이러한 일상 속에서 자라났습니다. 대대로 전해진 조리법은 현지에서 구할 수 있는 재료와 향신료를 만났고, 가족의 입맛에 따라 조금씩 달라졌습니다.','모든 뇨냐 음식을 하나의 정해진 레시피로 설명할 수는 없습니다. 같은 이름의 음식도 집마다 다를 수 있습니다. 향신료를 찧던 냄새와 어른의 손맛은 기록된 조리법만큼 오래 남습니다.'],'말레이시아 요리의 허브와 향신료'],
      ['06 / 오늘까지 이어지다','계속되는 이야기',['뇨냐 문화는 과거에 머물지 않습니다. 오늘도 사람들은 이 전통을 요리하고 만들고 입으며, 이야기하고 새롭게 해석합니다. 익숙한 모습으로 남은 것도 있고 생활과 함께 변한 것도 있습니다.','이 역사를 알아간다는 것은 하나의 “정답”을 찾는 일이 아닙니다. 문화가 만난 곳에서 사람들이 자신의 삶을 만들어 온 방식을 이해하고, 그 이야기를 다음 세대로 이어 가는 일입니다.'],'식탁에서 나누는 뇨냐 음식']
    ]),
    closing:'이 역사는 지금도 가정과 식탁에서 이어집니다.',sources:'더 읽어보기',sourceNote:'역사적 배경은 싱가포르 국가유산위원회 페라나칸 박물관 자료를 참고했습니다.'
  },
  ja:{
    title:'ニョニャとは？',subtitle:'旅と家庭、食卓が紡いできた、今も続く歴史。',
    intro:'一皿のニョニャ料理には、材料だけでは語りきれない物語があります。その味には、家庭の台所と、東南アジアの港を行き交った長い交流の記憶が息づいています。料理を知るために、まず人々とその呼び名からたどってみましょう。',
    explore:'章をたどる',
    chapters:chapters([
      ['01 / 名前とアイデンティティ','ニョニャとは？',['「ニョニャ（Nyonya）」は一般に中国系プラナカンの女性を、「ババ（Baba）」は男性を指します。中国系プラナカンは、さまざまな祖先の文化と現地の文化が交わる、より広いプラナカンの世界の一部です。','ニョニャは料理の名前だけではありません。言葉や習慣、工芸、食が文化の出会いの中で育まれてきた歴史への入り口でもあります。'],'プラナカンの花柄タイルと本'],
      ['02 / 海を越えた交流','文化が出会う場所',['東南アジアの港は、長い間さまざまな土地の商人や旅人を結んできました。この地に根を下ろした人々が暮らしを共にする中で、受け継いだ伝統は現地の言葉や素材、生活の知恵と出会いました。','プラナカンの文化は、ひとりの人物やひとつの時代から突然生まれたものではありません。世代を重ねる日常の中で形づくられました。'],'温かな窓辺の静物'],
      ['03 / 土地に根づく','地域ごとに異なる物語',['マラッカ、ペナン、シンガポールなどには、中国系プラナカンの人々が暮らしてきた歴史があります。ただし、話す言葉や家庭の習慣、食卓の味は地域や家族によって異なります。','ババ・マレー語はその表れのひとつです。ペナンでは、ペナン福建語を話すババ・ニョニャの人々もいます。ニョニャ文化に、すべてを表すひとつの姿はありません。'],'ニョニャの重箱とクエ'],
      ['04 / 暮らしの記憶','日常に残る歴史',['文化は言葉だけでなく、身近な品々にも宿ります。模様のある陶器は食卓へ。布や刺繍、ビーズ細工は装いや住まいへ。人が集まる日には、料理と器が共に思い出になりました。','鮮やかな色と精巧な手仕事で知られる品々は、かつて誰かの暮らしの一部でした。食事や祝い、もてなしを支え、技を次の世代へ伝えてきたのです。'],'ラタンの椅子がある温かな室内'],
      ['05 / 家庭の台所','台所で交わる文化',['ニョニャ料理も、そんな日々の中で育ちました。受け継がれた調理法は地元の食材や香辛料と出会い、繰り返し作られるうちに家族の好みに合わせて変化しました。','すべてのニョニャ料理を、ひとつの決まったレシピで語ることはできません。同じ名の料理でも家庭ごとに作り方は異なります。香辛料をすりつぶす香りや、年長者の手加減もまた、記憶に残る歴史です。'],'マレーシア料理に使われるハーブと香辛料'],
      ['06 / 今に続く文化','物語は続いていく',['ニョニャ文化は過去だけのものではありません。今も人々は料理し、作り、身につけ、語り、新たな形で受け継いでいます。昔からの姿を残すものも、暮らしと共に変わるものもあります。','この歴史を知ることは、唯一の「正しい」形を探すことではありません。文化が出会う場所で人々が自分たちの暮らしを築き、その物語を次の世代へ伝えてきたことを知る旅なのです。'],'食卓で分かち合うニョニャ料理']
    ]),
    closing:'この歴史は、今も家庭と食卓の上で続いています。',sources:'参考資料',sourceNote:'歴史的背景はシンガポール国家遺産局プラナカン博物館の資料を参照しています。'
  }
};
