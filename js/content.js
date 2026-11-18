/* =====================================================================
   SITE CONTENT: edit text here. Every item has a Persian (fa) and English (en) version.
   - T       : interface text and section copy
   - FLOW    : the 6-step process strip in the hero
   - JOBS    : work experience (each line: [skill tags, {fa, en}])
   - MX      : traceability matrix rows: [tag, category, label, [Negargaran, Pargas, Bootcamp, Courses]]
               2 = used at work, 1 = training/course, 0 = none
   - UC      : use case ovals and their specifications
   - SKILLS, EDU, LANGS : appendix sections
   Note: strings use single quotes, so write an apostrophe as \' (e.g. I\'d).
   ===================================================================== */
const T={
fa:{brand:'تارا اسدی',n1:'خلاصه',n2:'سوابق',n3:'ماتریس ردیابی',n4:'یوزکیس',n5:'مهارت‌ها',n6:'تحصیلات',n7:'تماس',
ver:'نسخه <b>۲٫۰</b>',loc:'تهران، ایران',status:'آماده همکاری',name:'تارا اسدی',role:'تحلیل‌گر سیستم',role2:'System Analyst · ERP & Web',
lede:'نیاز مبهم کسب‌وکار را به مستندی دقیق تبدیل می‌کنم که تیم فنی بتواند بسازد و تست کند. از مصاحبه با ذی‌نفعان تا SRS، مدل داده، قرارداد API و تست پس از پیاده‌سازی.',
cta1:'ثبت درخواست همکاری',cta2:'یوزکیس «استخدام تارا»',tf1b:'۷+',tf1s:'نوع مستند تحلیلی',tf2s:'حوزه سیستم‌ها',flowT:'چرخه کاری من · PROCESS FLOW',
s1:'خلاصه حرفه‌ای',s1p:'تحلیل‌گر سیستم با پیش‌زمینه مهندسی نرم‌افزار و سابقه کار در تحلیل نیازمندی‌ها، مدل‌سازی فرآیندهای کسب‌وکار، طراحی مدل داده و مستندسازی سیستم‌های نرم‌افزاری (ERP و وب). دارای تجربه تست دستی و تست API، ارتباط مؤثر با تیم‌های فنی و ذی‌نفعان، و آشنایی با تحلیل داده و توسعه Front-end.',
k1:'شرکت، در نقش تحلیل‌گر سیستم',k2:'نوع مستند: Vision، SRS، FRS، HLP، PRT، Use Case، User Story',k3:'معدل کارشناسی مهندسی نرم‌افزار',k4:'IELTS Academic',
s2:'سوابق شغلی',s2p:'هر مسئولیت مثل یک نیازمندی شناسه دارد. در ماتریس ردیابی پایین روی یک مهارت کلیک کنید تا موارد مرتبط اینجا روشن شوند.',
s3:'ماتریس ردیابی مهارت‌ها',s3p:'همان ابزاری که برای ردیابی نیازمندی تا پیاده‌سازی استفاده می‌کنم، این بار برای ردیابی هر مهارت تا جایی که واقعاً به کار رفته.',
lg1:'استفاده مستقیم در کار',lg2:'آموزش / دوره',lg3:'روی هر ردیف کلیک کنید ↑',
s4:'یوزکیس: استخدام تارا',s4p:'اگر تارا یک سیستم بود، این دیاگرام یوزکیس او بود. روی هر بیضی کلیک کنید تا مشخصات یوزکیس را ببینید.',
s5:'واژه‌نامه مهارت‌ها',s5p:'فهرست کامل ابزارها و توانمندی‌ها، دسته‌بندی‌شده.',s6:'تحصیلات و گواهینامه‌ها',eduH:'تاریخچه نسخه‌ها',langH:'زبان‌ها',
s7:'تماس با من',s7p:'یک «درخواست تغییر» ثبت کنید: فرصت شغلی، پروژه یا مشاوره. فرم، متن ایمیل آماده تحویل می‌دهد.',
em:'ایمیل',ph:'تلفن',ct:'شهر',city:'تهران',copy:'کپی',crS:'وضعیت: پیش‌نویس',fName:'نام درخواست‌دهنده',fOrg:'سازمان',fType:'نوع درخواست',fMsg:'شرح درخواست',fSend:'ثبت درخواست',
outT:'پیش‌نویس ایمیل آماده است',outMail:'باز کردن در ایمیل',outCopy:'کپی متن',foot:'© ۱۴۰۵ تارا اسدی · تحلیل‌گر سیستم',
copied:'کپی شد',need:'لطفاً نام و شرح درخواست را وارد کنید',cmdPh:'جستجو در بخش‌ها و دستورها…',all:'همه',now:'اکنون',current:'شغل فعلی',past:'سابقه',
cmdLang:'تغییر زبان به English',cmdTheme:'تغییر پوشش روشن / تیره',cmdEmail:'کپی ایمیل',
types:['فرصت شغلی تمام‌وقت','پروژه / قرارداد','مشاوره تحلیل سیستم','سایر']},
en:{brand:'Tara Asadi',n1:'Scope',n2:'Experience',n3:'Traceability',n4:'Use case',n5:'Skills',n6:'Education',n7:'Contact',
ver:'Version <b>2.0</b>',loc:'Tehran, Iran',status:'Open to opportunities',name:'Tara Asadi',role:'System Analyst',role2:'تحلیل‌گر سیستم · ERP & Web',
lede:'I turn vague business needs into precise specifications that engineering teams can build and test: from stakeholder interviews to the SRS, the data model, the API contract and post-release testing.',
cta1:'Submit a request',cta2:'Use case: Hire Tara',tf1b:'7+',tf1s:'analysis document types',tf2s:'systems domain',flowT:'How I work · PROCESS FLOW',
s1:'Professional summary',s1p:'System analyst with a software-engineering background and hands-on experience in requirements analysis, business process modeling, data modeling and documentation of ERP and web systems. Experienced in manual and API testing, a clear communicator with technical teams and stakeholders, with working knowledge of data analysis and front-end development.',
k1:'companies as a system analyst',k2:'document types: Vision, SRS, FRS, HLP, PRT, Use Case, User Story',k3:'B.Sc. GPA in Software Engineering (out of 20)',k4:'IELTS Academic',
s2:'Experience',s2p:'Every responsibility carries an ID, like a requirement. Click a skill in the traceability matrix below to light up where it was used.',
s3:'Skills traceability matrix',s3p:'The tool I use to trace requirements to implementation, used here to trace each skill to where it was actually applied.',
lg1:'Used directly at work',lg2:'Training / course',lg3:'Click any row ↑',
s4:'Use case: Hire Tara',s4p:'If Tara were a system, this would be her use case diagram. Click an oval to open its use case specification.',
s5:'Skills glossary',s5p:'The full list of tools and capabilities, grouped.',s6:'Education & certifications',eduH:'Revision history',langH:'Languages',
s7:'Get in touch',s7p:'File a change request: a job opening, a project or a consultation. The form drafts the email for you.',
em:'Email',ph:'Phone',ct:'City',city:'Tehran',copy:'Copy',crS:'Status: draft',fName:'Requester name',fOrg:'Organization',fType:'Request type',fMsg:'Description',fSend:'Submit request',
outT:'Your email draft is ready',outMail:'Open in email app',outCopy:'Copy text',foot:'© 2026 Tara Asadi · System Analyst',
copied:'Copied',need:'Please add your name and a description',cmdPh:'Search sections and commands…',all:'All',now:'Present',current:'Current role',past:'Previous',
cmdLang:'Switch language to فارسی',cmdTheme:'Toggle light / dark',cmdEmail:'Copy email',
types:['Full-time position','Project / contract','System analysis consultation','Other']}
};

const FLOW={fa:[['ذی‌نفعان','مصاحبه و کارگاه'],['نیازمندی','عملکردی / غیرعملکردی'],['مدل‌سازی','BPMN · Use Case · ERD'],['مستندسازی','Vision · SRS · FRS'],['تحویل','API Contract به تیم'],['تست','Manual · Postman']],
en:[['Stakeholders','interviews & workshops'],['Requirements','functional / non-functional'],['Modeling','BPMN · Use Case · ERD'],['Specification','Vision · SRS · FRS'],['Handoff','API contracts to devs'],['Testing','manual · Postman']]};

const JOBS=[
{id:'NG',when:{fa:'خرداد ۱۴۰۵ – اکنون',en:'May 2026 – Present'},now:true,
 title:{fa:'تحلیل‌گر سیستم',en:'System Analyst'},co:{fa:'شرکت نگارگران فناوری کسب‌وکار · تهران',en:'Negargaran Business Technology · Tehran'},
 items:[
 ['req',{fa:'تحلیل و استخراج نیازمندی‌های کارفرما و نیازمندی‌های عملکردی و غیرعملکردی سیستم',en:'Elicit and analyze client requirements, both functional and non-functional'}],
 ['doc',{fa:'تهیه و تدوین مستندات Vision، SRS، FRS، HLP و PRT',en:'Write and maintain Vision, SRS, FRS, HLP and PRT documents'}],
 ['uc',{fa:'طراحی Use Case Diagram و تدوین Use Case Specification',en:'Design use case diagrams and write use case specifications'}],
 ['bpm',{fa:'تحلیل و مستندسازی فرآیندهای کسب‌وکار',en:'Analyze and document business processes'}],
 ['data',{fa:'طراحی Data Model و ساختار پایگاه داده',en:'Design the data model and database structure'}],
 ['comm',{fa:'تعامل با کارفرما و ذی‌نفعان برای شفاف‌سازی نیازمندی‌ها و انتقال مستندات به تیم‌های فنی',en:'Work with the client and stakeholders to clarify requirements and hand documents off to engineering'}],
 ['test',{fa:'انجام تست دستی پس از پیاده‌سازی و بررسی صحت عملکرد سیستم',en:'Run manual testing after implementation to verify system behavior'}]]},
{id:'PG',when:{fa:'مهر ۱۴۰۳ – بهمن ۱۴۰۴',en:'Sep 2024 – Jan 2026'},
 title:{fa:'تحلیل‌گر سیستم',en:'System Analyst'},co:{fa:'شرکت پرگاس · تهران',en:'Pargas · Tehran'},
 items:[
 ['grow',{fa:'شروع به‌عنوان پشتیبان نرم‌افزار و ارتقا به نقش تحلیل‌گر سیستم',en:'Joined as software support and was promoted to system analyst'}],
 ['req doc',{fa:'تحلیل، طراحی و مستندسازی پروژه LiveLife (سیستم بازاریابی شبکه‌ای)',en:'Analyzed, designed and documented LiveLife, a network-marketing system'}],
 ['erp bpm',{fa:'همکاری در تحلیل و توسعه ماژول‌های سیستم‌های ERP و بهینه‌سازی فرآیندها',en:'Analyzed and helped develop ERP modules and optimized processes'}],
 ['uc doc',{fa:'تهیه مستندات Use Case، User Story، Process Flow و Functional Specification',en:'Wrote use cases, user stories, process flows and functional specifications'}],
 ['test api',{fa:'تست دستی وب‌سایت و تست API با Postman برای سناریوها، ورودی‌ها، خروجی‌ها و خطاها',en:'Manually tested the website and tested APIs in Postman: scenarios, inputs, outputs and errors'}],
 ['api fe',{fa:'آماده‌سازی و تحویل Requestها و API Contractها به تیم Front-end',en:'Prepared and delivered requests and API contracts to the front-end team'}],
 ['comm',{fa:'رابط میان تیم‌های Front-end، Back-end، UI/UX و Product Management برای کاهش خطاهای اجرایی',en:'Acted as the bridge between front-end, back-end, UI/UX and product to cut execution errors'}],
 ['comm cx',{fa:'مدیریت ارتباط با تیم‌های لجستیک و آموزش و نظارت بر فرآیندهای تجربه مشتری',en:'Coordinated logistics and training teams and oversaw customer-experience processes'}],
 ['cx',{fa:'نظارت End-to-End بر انجام به‌موقع تعهدات عملیاتی و سطح کیفی خدمات',en:'Owned end-to-end follow-through on operational commitments and service quality'}]]}
];

/* matrix: skill key, category, label, [NG, PG, Bootcamp, Tech courses]; 2=work 1=training 0=none */
const COLS={fa:['نگارگران','پرگاس','بوت‌کمپ تحلیل داده','دوره‌های مجتمع فنی'],en:['Negargaran','Pargas','Data Analysis Bootcamp','Tehran Tech. courses']};
const CATS={fa:{an:'تحلیل',qa:'تست',da:'داده',web:'وب',soft:'ارتباط'},en:{an:'Analysis',qa:'Testing',da:'Data',web:'Web',soft:'People'}};
const MX=[
['req','an','Requirement Analysis',[2,2,0,0]],
['doc','an','SRS / FRS / Vision',[2,2,0,0]],
['uc','an','Use Case & User Story',[2,2,0,0]],
['bpm','an','BPMN & Process Modeling',[2,2,0,0]],
['data','da','Data Modeling & DB Design',[2,0,1,0]],
['erp','an','ERP Systems',[0,2,0,0]],
['test','qa','Manual Testing',[2,2,0,0]],
['api','qa','API Testing · Postman',[0,2,0,0]],
['eda','da','Python · EDA · Statistics',[0,0,1,0]],
['fe','web','React · HTML · CSS',[0,2,0,1]],
['comm','soft','Stakeholder Communication',[2,2,0,0]],
['cx','soft','Customer Experience Ops',[0,2,0,0]]
];

const UC=[
{k:'elicit',x:250,y:70,fa:'استخراج نیازمندی',en:'Elicit requirements',actors:[0],
 spec:{fa:{actor:'کارفرما / ذی‌نفع',pre:'یک نیاز کسب‌وکاری هنوز شفاف نیست.',flow:['برگزاری جلسه و مصاحبه با ذی‌نفعان','تفکیک نیازمندی‌های عملکردی و غیرعملکردی','اولویت‌بندی و تأیید با کارفرما'],post:'فهرست نیازمندی شفاف و تأییدشده.'},
       en:{actor:'Client / stakeholder',pre:'A business need exists but is not yet clear.',flow:['Run interviews and workshops with stakeholders','Separate functional from non-functional requirements','Prioritize and confirm with the client'],post:'A clear, signed-off list of requirements.'}}},
{k:'model',x:250,y:140,fa:'مدل‌سازی فرآیند و داده',en:'Model process & data',actors:[0,1],
 spec:{fa:{actor:'کارفرما، تیم توسعه',pre:'نیازمندی‌ها تأیید شده‌اند.',flow:['ترسیم فرآیندهای As-Is و To-Be','طراحی Use Case Diagram','طراحی Data Model و ساختار پایگاه داده'],post:'مدل مشترکی که کسب‌وکار و تیم فنی هر دو می‌فهمند.'},
       en:{actor:'Client, engineering team',pre:'Requirements are approved.',flow:['Map as-is and to-be processes','Draw the use case diagram','Design the data model and database structure'],post:'One model both the business and engineers understand.'}}},
{k:'spec',x:250,y:210,fa:'تدوین SRS / FRS',en:'Write the SRS / FRS',actors:[1],
 spec:{fa:{actor:'تیم توسعه',pre:'مدل‌ها نهایی شده‌اند.',flow:['نگارش Vision و SRS','جزئیات عملکردی در FRS و Use Case Specification','بازبینی با تیم فنی'],post:'مستندی که تیم می‌تواند مستقیم از روی آن بسازد.'},
       en:{actor:'Engineering team',pre:'Models are final.',flow:['Write the Vision and SRS','Detail behavior in the FRS and use case specs','Review with the engineering team'],post:'A spec the team can build from directly.'}}},
{k:'api',x:250,y:280,fa:'تحویل قرارداد API',en:'Hand off API contracts',actors:[1,2],
 spec:{fa:{actor:'تیم Front-end و Back-end',pre:'سرویس‌ها طراحی شده‌اند.',flow:['تعریف Requestها و پاسخ‌ها','تحویل API Contract به Front-end','پیگیری پیاده‌سازی صحیح درخواست‌ها'],post:'تیم‌ها بدون ابهام به هم وصل می‌شوند.'},
       en:{actor:'Front-end & back-end teams',pre:'Services are designed.',flow:['Define requests and responses','Deliver API contracts to the front-end','Check requests are implemented correctly'],post:'Teams integrate without guesswork.'}}},
{k:'test',x:250,y:350,fa:'تست و تأیید',en:'Test & verify',actors:[2],
 spec:{fa:{actor:'تیم QA / محصول',pre:'قابلیت پیاده‌سازی شده است.',flow:['اجرای سناریوهای تست دستی','تست API با Postman: ورودی، خروجی و خطاها','گزارش و پیگیری اشکال‌ها'],post:'سیستم همان کاری را می‌کند که در SRS آمده.'},
       en:{actor:'QA / product',pre:'The feature is implemented.',flow:['Run manual test scenarios','Test APIs in Postman: inputs, outputs, errors','Report and follow up on defects'],post:'The system does what the SRS says.'}}}
];
const ACT={fa:['کارفرما','تیم توسعه','QA / محصول'],en:['Client','Dev team','QA / Product']};

const SKILLS=[
{fa:'تحلیل سیستم',en:'System analysis',t:['System & Business Analysis','Requirement Analysis','SRS / FRS / Vision Documentation','BPMN & Process Modeling','Use Case & User Story','ERP Systems','Data Modeling','Database Design']},
{fa:'تست',en:'Testing',t:['Manual Testing','API Testing','Postman']},
{fa:'تحلیل داده',en:'Data analysis',t:['EDA','Statistical Analysis','Probability & Statistics','A/B Testing','Data Cleaning & Preprocessing','Feature Engineering','Regression & Classification','ML Model Evaluation','Data-Driven Decision Making']},
{fa:'توسعه وب',en:'Web development',t:['HTML','CSS','JavaScript','React.js','Bootstrap','WordPress','API Integration','LLM & MCP Integration']},
{fa:'ابزارها',en:'Tools',t:['Jira','Visual Paradigm','DB Architect','MySQL','Python (Pandas, NumPy)','Matplotlib','Seaborn','Jupyter Notebook','Microsoft Office']},
{fa:'طراحی',en:'Design',t:['UI / Wireframing','Figma','Adobe XD','Photoshop','Illustrator']},
{fa:'مهارت‌های فردی',en:'Soft skills',t:['Analytical Thinking','Problem Solving','Attention to Detail','Team Collaboration','Continuous Learning']}
];

const EDU=[
{deg:1,v:'v2.0',w:{fa:'مهر ۱۴۰۳ – اکنون',en:'2024 – Present'},h:{fa:'کارشناسی ارشد مهندسی کامپیوتر – نرم‌افزار',en:'M.Sc. Computer Engineering, Software'},p:{fa:'دانشگاه آزاد اسلامی، واحد علوم و تحقیقات – تهران',en:'Islamic Azad University, Science & Research Branch, Tehran'}},
{deg:0,v:'v1.4',w:{fa:'۱۴۰۵',en:'2026'},h:{fa:'Data Analysis Bootcamp · کلاسور',en:'Data Analysis Bootcamp · Kelasor'},p:{fa:'تحلیل داده‌های موجود، شناسایی مشکلات و طراحی مدل داده با هدف کارایی، توسعه‌پذیری و یکپارچگی داده‌ها',en:'Analyzing existing data, diagnosing problems and designing data models for efficiency, scalability and integrity'}},
{deg:1,v:'v1.0',w:{fa:'بهمن ۱۳۹۸ – بهمن ۱۴۰۱',en:'2020 – 2023'},h:{fa:'کارشناسی مهندسی کامپیوتر – نرم‌افزار',en:'B.Sc. Computer Engineering, Software'},p:{fa:'مؤسسه آموزش عالی ادیبان – گرمسار · معدل ۱۸٫۳۰',en:'Adiban Institute of Higher Education, Garmsar · GPA 18.30 / 20'}},
{deg:0,v:'v0.9',w:{fa:'۱۴۰۲',en:'2023'},h:{fa:'React JS · مجتمع فنی تهران',en:'React JS · Tehran Technical Institute'},p:{fa:'درک ساختار Front-end برای ارتباط مؤثر با تیم فرانت‌اند و بررسی پیاده‌سازی صحیح APIها',en:'Understanding front-end structure to work closely with front-end teams and verify API implementation'}},
{deg:0,v:'v0.5',w:{fa:'۱۳۹۹',en:'2020'},h:{fa:'C++ و Web Design Pack (HTML, CSS) · مجتمع فنی تهران',en:'C++ and Web Design Pack (HTML, CSS) · Tehran Technical Institute'},p:{fa:'',en:''}},
{deg:0,v:'v0.1',w:{fa:'۱۳۹۶',en:'2017'},h:{fa:'ICDL · مجتمع فنی تهران',en:'ICDL · Tehran Technical Institute'},p:{fa:'',en:''}}
];
const LANGS=[{fa:'انگلیسی',en:'English',lv:{fa:'پیشرفته · IELTS 6.5',en:'Advanced · IELTS 6.5'},w:80},{fa:'فرانسوی',en:'French',lv:{fa:'مقدماتی',en:'Beginner'},w:25},{fa:'فارسی',en:'Persian',lv:{fa:'زبان مادری',en:'Native'},w:100}];

window.SITE={T,FLOW,JOBS,COLS,CATS,MX,UC,ACT,SKILLS,EDU,LANGS};
