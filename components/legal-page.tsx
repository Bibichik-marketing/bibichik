import type {Locale} from '@/lib/i18n';

type LegalContent={eyebrow:string;privacyTitle:string;termsTitle:string;privacy:readonly (readonly [string,string])[];terms:readonly (readonly [string,string])[];contactTitle:string;privacyContact:string;termsContact:string};

const content:Record<Locale,LegalContent>={
  en:{
    eyebrow:'Website information',privacyTitle:'Privacy Policy',termsTitle:'Terms & Conditions',
    privacy:[
      ['Contact form','The contact form uses a mailto: link to open your email application with the details you enter. You must choose to send the message from your email application. The form itself does not automatically submit your message to a website backend. This description applies to the contact form and is not a statement that the entire website never processes or stores data.'],
      ['Email enquiries','An email enquiry may include your name, email address, phone number if provided, and message content. Information you send by email may be used to respond to your enquiry and manage related correspondence.'],
      ['External reservations','Reservation links may take you to third-party booking services. Those services have their own privacy practices and notices, which you should review before providing personal information.'],
      ['Retention of correspondence','Enquiry emails and related correspondence may be retained to handle enquiries or meet applicable business and legal requirements.']
    ],
    terms:[
      ['Website information','Information on this website is provided for general reference. Menu items, prices, availability and operating hours may change. Please confirm current details directly with the restaurant before ordering or visiting.'],
      ['Email enquiries','The website’s email contact form opens your email application. You must choose to send the message. Using the form does not guarantee that an enquiry has been delivered to the restaurant.'],
      ['Reservations','Reservation links may take you to external booking services. A booking is not confirmed unless the restaurant or booking provider confirms it.'],
      ['Third-party websites','Third-party websites and booking services are subject to their respective terms and privacy notices. Please review those documents when using their services.']
    ],
    contactTitle:'Contact',privacyContact:'For privacy enquiries, please email',termsContact:'For questions about these terms or website information, please email'
  },
  zh:{
    eyebrow:'网站信息',privacyTitle:'隐私政策',termsTitle:'条款与细则',
    privacy:[
      ['联系表单','联系表单使用 mailto: 链接，将你填写的内容带入你的邮件应用。你必须自行选择在邮件应用中发送邮件。表单本身不会自动将留言提交至网站后台。这一说明仅针对联系表单，并不表示整个网站从不处理或存储数据。'],
      ['邮件咨询','咨询邮件可能包含你的姓名、电子邮箱地址、电话号码（如有提供）及留言内容。通过邮件发送的信息可能用于回复咨询及处理相关往来通信。'],
      ['外部预订服务','预订链接可能将你带至第三方预订服务。这些服务有各自的隐私处理方式及隐私声明，请在提供个人信息前查阅。'],
      ['通信资料的保留','咨询邮件及相关往来通信可能会被保留，以处理咨询或满足适用的业务及法律要求。']
    ],
    terms:[
      ['网站信息','本网站提供的信息仅供一般参考。菜品、价格、供应情况及营业时间可能发生变化。下单或到访前，请直接向餐厅确认最新信息。'],
      ['邮件咨询','网站的邮件联系表单会打开你的邮件应用，你必须自行选择发送邮件。使用表单并不保证餐厅已收到咨询。'],
      ['预订','预订链接可能将你带至外部预订服务。只有在餐厅或预订服务提供方确认后，预订才算成立。'],
      ['第三方网站','第三方网站及预订服务受其各自的条款及隐私声明约束。使用相关服务时，请查阅这些文件。']
    ],
    contactTitle:'联系我们',privacyContact:'如有隐私相关咨询，请发送邮件至',termsContact:'如对本条款或网站信息有疑问，请发送邮件至'
  },
  ms:{
    eyebrow:'Maklumat laman web',privacyTitle:'Dasar Privasi',termsTitle:'Terma & Syarat',
    privacy:[
      ['Borang hubungan','Borang hubungan menggunakan pautan mailto: untuk membuka aplikasi e-mel anda dengan maklumat yang anda isi. Anda perlu memilih sendiri untuk menghantar mesej melalui aplikasi e-mel tersebut. Borang itu sendiri tidak menghantar mesej secara automatik kepada sistem pelayan laman web. Penjelasan ini hanya berkaitan dengan borang hubungan dan tidak bermaksud bahawa keseluruhan laman web tidak pernah memproses atau menyimpan data.'],
      ['Pertanyaan melalui e-mel','E-mel pertanyaan mungkin mengandungi nama, alamat e-mel, nombor telefon jika diberikan, dan kandungan mesej anda. Maklumat yang dihantar melalui e-mel boleh digunakan untuk menjawab pertanyaan dan mengurus surat-menyurat berkaitan.'],
      ['Tempahan melalui perkhidmatan luar','Pautan tempahan mungkin membawa anda ke perkhidmatan tempahan pihak ketiga. Perkhidmatan tersebut mempunyai amalan dan notis privasi tersendiri. Sila semaknya sebelum memberikan maklumat peribadi.'],
      ['Penyimpanan surat-menyurat','E-mel pertanyaan dan surat-menyurat berkaitan boleh disimpan untuk mengendalikan pertanyaan atau memenuhi keperluan perniagaan dan undang-undang yang terpakai.']
    ],
    terms:[
      ['Maklumat laman web','Maklumat di laman web ini disediakan untuk rujukan umum. Hidangan, harga, ketersediaan dan waktu operasi boleh berubah. Sila sahkan maklumat terkini secara terus dengan restoran sebelum membuat pesanan atau berkunjung.'],
      ['Pertanyaan melalui e-mel','Borang hubungan e-mel laman web membuka aplikasi e-mel anda. Anda perlu memilih sendiri untuk menghantar mesej. Penggunaan borang tidak menjamin bahawa pertanyaan telah diterima oleh restoran.'],
      ['Tempahan','Pautan tempahan mungkin membawa anda ke perkhidmatan tempahan luar. Tempahan hanya disahkan apabila restoran atau penyedia perkhidmatan tempahan mengesahkannya.'],
      ['Laman web pihak ketiga','Laman web dan perkhidmatan tempahan pihak ketiga tertakluk pada terma dan notis privasi masing-masing. Sila semak dokumen tersebut semasa menggunakan perkhidmatan mereka.']
    ],
    contactTitle:'Hubungi kami',privacyContact:'Untuk pertanyaan berkaitan privasi, sila e-mel',termsContact:'Untuk pertanyaan tentang terma ini atau maklumat laman web, sila e-mel'
  },
  ko:{
    eyebrow:'웹사이트 안내',privacyTitle:'개인정보 처리방침',termsTitle:'이용약관',
    privacy:[
      ['문의 양식','문의 양식은 mailto: 링크를 사용하여 입력한 내용이 담긴 이메일 앱을 엽니다. 이용자가 이메일 앱에서 직접 전송을 선택해야 합니다. 양식 자체가 메시지를 웹사이트 서버에 자동으로 제출하지는 않습니다. 이 설명은 문의 양식에만 해당하며, 웹사이트 전체가 데이터를 전혀 처리하거나 저장하지 않는다는 의미는 아닙니다.'],
      ['이메일 문의 정보','문의 이메일에는 이름, 이메일 주소, 전화번호(제공한 경우), 메시지 내용이 포함될 수 있습니다. 이메일로 보내신 정보는 문의에 답변하고 관련 연락을 처리하는 데 사용될 수 있습니다.'],
      ['외부 예약 서비스','예약 링크를 통해 제3자 예약 서비스로 이동할 수 있습니다. 해당 서비스에는 자체적인 개인정보 처리 방식과 안내가 적용되므로 개인정보를 제공하기 전에 확인해 주세요.'],
      ['문의 내역 보관','문의 이메일과 관련 연락 내역은 문의 처리 또는 적용되는 업무상·법적 요구사항을 충족하기 위해 보관될 수 있습니다.']
    ],
    terms:[
      ['웹사이트 정보','이 웹사이트의 정보는 일반적인 참고용으로 제공됩니다. 메뉴, 가격, 제공 여부 및 영업시간은 변경될 수 있습니다. 주문하거나 방문하기 전에 최신 정보를 매장에 직접 확인해 주세요.'],
      ['이메일 문의','웹사이트의 이메일 문의 양식은 이용자의 이메일 앱을 엽니다. 이용자가 직접 메시지 전송을 선택해야 합니다. 양식을 사용했다고 해서 문의가 매장에 전달되었음을 보장하지는 않습니다.'],
      ['예약','예약 링크를 통해 외부 예약 서비스로 이동할 수 있습니다. 매장 또는 예약 서비스 제공업체가 확인하기 전까지 예약은 확정되지 않습니다.'],
      ['제3자 웹사이트','제3자 웹사이트와 예약 서비스에는 각각의 이용약관과 개인정보 처리 안내가 적용됩니다. 해당 서비스를 이용할 때 관련 문서를 확인해 주세요.']
    ],
    contactTitle:'문의',privacyContact:'개인정보 관련 문의는 다음 이메일 주소로 보내 주세요:',termsContact:'이 약관 또는 웹사이트 정보에 관한 문의는 다음 이메일 주소로 보내 주세요:'
  },
  ja:{
    eyebrow:'ウェブサイトのご案内',privacyTitle:'プライバシーポリシー',termsTitle:'利用規約',
    privacy:[
      ['お問い合わせフォーム','お問い合わせフォームは mailto: リンクを使用し、入力内容を反映したメールアプリを開きます。メールアプリで送信するかどうかは、ご利用者自身で選択する必要があります。フォーム自体がメッセージをウェブサイトのサーバーへ自動送信することはありません。この説明はお問い合わせフォームに関するものであり、ウェブサイト全体でデータの処理や保存が一切行われないことを意味するものではありません。'],
      ['お問い合わせメールの情報','お問い合わせメールには、お名前、メールアドレス、電話番号（ご提供いただいた場合）、メッセージ内容が含まれることがあります。メールでお送りいただいた情報は、お問い合わせへの回答および関連するやり取りのために使用される場合があります。'],
      ['外部の予約サービス','予約リンクから第三者の予約サービスへ移動する場合があります。各サービスには独自の個人情報の取り扱いおよびプライバシーに関する通知が適用されますので、個人情報を提供する前にご確認ください。'],
      ['お問い合わせ記録の保管','お問い合わせメールおよび関連するやり取りは、お問い合わせへの対応、または適用される業務上・法令上の要件を満たすために保管される場合があります。']
    ],
    terms:[
      ['ウェブサイトの情報','本ウェブサイトの情報は、一般的な参考情報として提供しています。メニュー、価格、提供状況および営業時間は変更される場合があります。ご注文やご来店の前に、最新の情報を店舗へ直接ご確認ください。'],
      ['メールでのお問い合わせ','ウェブサイトのメールお問い合わせフォームは、ご利用者のメールアプリを開きます。メッセージを送信するかどうかは、ご利用者自身で選択する必要があります。フォームの使用によって、お問い合わせが店舗に届いたことが保証されるものではありません。'],
      ['ご予約','予約リンクから外部の予約サービスへ移動する場合があります。店舗または予約サービス提供者による確認があるまでは、ご予約は確定しません。'],
      ['第三者のウェブサイト','第三者のウェブサイトおよび予約サービスには、それぞれの利用規約とプライバシーに関する通知が適用されます。ご利用の際は、これらの文書をご確認ください。']
    ],
    contactTitle:'お問い合わせ',privacyContact:'個人情報に関するお問い合わせは、次のメールアドレスへお送りください：',termsContact:'本規約またはウェブサイトの情報に関するお問い合わせは、次のメールアドレスへお送りください：'
  }
};

export default function LegalPage({locale,kind}:{locale:Locale;kind:'privacy'|'terms'}){
  const c=content[locale];
  return <main id="main" className="container section legal">
    <p className="eyebrow">{c.eyebrow}</p>
    <h1>{kind==='privacy'?c.privacyTitle:c.termsTitle}</h1>
    {c[kind].map(([heading,body])=><section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}
    <section><h2>{c.contactTitle}</h2><p>{kind==='privacy'?c.privacyContact:c.termsContact}{' '}<a href="mailto:marketing@bibichik.com">marketing@bibichik.com</a></p></section>
  </main>;
}
