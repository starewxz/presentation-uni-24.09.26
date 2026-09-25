import React, { useState } from 'react';
import { 
  X, 
  BookMarked, 
  GraduationCap, 
  Scroll, 
  Library, 
  ExternalLink, 
  CheckCircle2, 
  HelpCircle,
  FileText
} from 'lucide-react';

export default function SourcesModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('nalanda');

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-gupta-dark/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in select-text"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl max-h-[90vh] bg-gupta-card border border-gupta-gold/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-gupta-border flex items-center justify-between bg-gupta-cardLight/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-gupta-gold/15 text-gupta-gold border border-gupta-gold/30">
              <BookMarked className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-gupta-sandstone flex items-center gap-2">
                <span>Джерельна база та література</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-gupta-gold/15 text-gupta-gold border border-gupta-gold/30 font-sans font-medium">
                  Для семінару 1-го курсу
                </span>
              </h2>
              <p className="text-xs text-gupta-sandstoneMuted">
                Звідки взяті факти про університет Наланда, реформи та правителів Гуптів
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gupta-sandstoneMuted hover:text-gupta-sandstone hover:bg-gupta-dark border border-transparent hover:border-gupta-border transition-all"
            title="Закрити (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gupta-border bg-gupta-dark/60 overflow-x-auto text-xs font-medium">
          <button
            onClick={() => setActiveTab('nalanda')}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'nalanda'
                ? 'border-gupta-gold text-gupta-gold bg-gupta-card/60 font-semibold'
                : 'border-transparent text-gupta-sandstoneMuted hover:text-gupta-sandstone'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Звідки дані про Наланду?</span>
          </button>

          <button
            onClick={() => setActiveTab('textbook')}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'textbook'
                ? 'border-gupta-gold text-gupta-gold bg-gupta-card/60 font-semibold'
                : 'border-transparent text-gupta-sandstoneMuted hover:text-gupta-sandstone'
            }`}
          >
            <Library className="w-4 h-4" />
            <span>Основний підручник (Крижанівський)</span>
          </button>

          <button
            onClick={() => setActiveTab('primary')}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'primary'
                ? 'border-gupta-gold text-gupta-gold bg-gupta-card/60 font-semibold'
                : 'border-transparent text-gupta-sandstoneMuted hover:text-gupta-sandstone'
            }`}
          >
            <Scroll className="w-4 h-4" />
            <span>Історичні першоджерела</span>
          </button>

          <button
            onClick={() => setActiveTab('academic')}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'academic'
                ? 'border-gupta-gold text-gupta-gold bg-gupta-card/60 font-semibold'
                : 'border-transparent text-gupta-sandstoneMuted hover:text-gupta-sandstone'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Наукові праці індологів</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-xs sm:text-sm">
          {/* TAB 1: NALANDA EXPLANATION */}
          {activeTab === 'nalanda' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-gupta-gold/10 border border-gupta-gold/30">
                <h3 className="text-sm sm:text-base font-serif font-bold text-gupta-gold flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-gupta-gold" />
                  <span>Звідки в істориків інформація про університет Наланда?</span>
                </h3>
                <p className="mt-2 text-gupta-sandstone leading-relaxed">
                  Інформація про заснування та функціонування університету Наланда є загальновизнаним фактом у світовій сходознавчій науці та базується на трьох взаємодоповнюючих групах джерел:
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-gupta-dark/80 border border-gupta-border">
                  <div className="flex items-center gap-2 text-gupta-gold font-semibold mb-1">
                    <span className="w-5 h-5 rounded-full bg-gupta-gold/20 flex items-center justify-center text-xs">1</span>
                    <span>Підручник О. П. Крижанівського (с. 407–408):</span>
                  </div>
                  <p className="text-gupta-sandstone/90 pl-7 leading-relaxed">
                    Олег Петрович Крижанівський у розділі про імперію Гуптів прямо зазначає, що за правління <strong>Кумарагупти I (415–455 рр.)</strong> відбулося заснування грандіозного буддійського монастирського комплексу в <strong>Наланді</strong> (сучасний штат Біхар), який перетворився на найбільший інтелектуальний та освітній осередок стародавньої Азії.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-gupta-dark/80 border border-gupta-border">
                  <div className="flex items-center gap-2 text-gupta-gold font-semibold mb-1">
                    <span className="w-5 h-5 rounded-full bg-gupta-gold/20 flex items-center justify-center text-xs">2</span>
                    <span>Щоденники очевидця — китайського ченця Сюаньцзана (Xuanzang, VII ст.):</span>
                  </div>
                  <p className="text-gupta-sandstone/90 pl-7 leading-relaxed">
                    Сюаньцзан навчався в Наланді близько 5 років і залишив детальну хроніку «Да Тан Сі юй цзі» («Записки про Західні країни»): саме він зафіксував кількість у <strong>10 000 студентів</strong>, <strong>2 000 викладачів</strong>, бібліотеку «Дхармаганджа» з трьома дев'ятиповерховими корпусами, безкоштовне житло та харчування за рахунок доходів зі 100 навколишніх сіл, подарованих царями.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-gupta-dark/80 border border-gupta-border">
                  <div className="flex items-center gap-2 text-gupta-gold font-semibold mb-1">
                    <span className="w-5 h-5 rounded-full bg-gupta-gold/20 flex items-center justify-center text-xs">3</span>
                    <span>Археологічні розкопки Археологічної служби Індії (ASI) та ЮНЕСКО:</span>
                  </div>
                  <p className="text-gupta-sandstone/90 pl-7 leading-relaxed">
                    Під час розкопок на площі 14 гектарів було відкрито 11 монастирів і 6 цегляних храмів, а також знайдено глиняні імперські печатки із зображенням царів династії Гуптів (зокрема Шукрадітьї/Кумарагупти I та Будхагупти), що остаточно підтвердило дату заснування у V столітті. Комплекс визнано Світовою спадщиною ЮНЕСКО.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MAIN TEXTBOOK */}
          {activeTab === 'textbook' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-gupta-dark/90 border border-gupta-gold/30">
                <div className="flex items-start gap-3">
                  <Library className="w-6 h-6 text-gupta-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif font-bold text-base text-gupta-gold">
                      Крижанівський О. П. Історія Стародавнього Сходу: Підручник
                    </h3>
                    <p className="text-xs text-gupta-sandstoneMuted mt-0.5">
                      К.: Либідь, 2000 (перевидання: 2002, 2006, 2009, 2022). — 592 с.
                    </p>
                  </div>
                </div>
                <div className="mt-3 text-gupta-sandstone/90 leading-relaxed text-xs sm:text-sm pl-9 space-y-2">
                  <p>
                    <strong>Чому саме цей підручник:</strong> Це офіційний базовий навчальний посібник, затверджений Міністерством освіти і науки України для історичних факультетів університетів України (зокрема КНУ ім. Тараса Шевченка, ЛНУ ім. Івана Франка, ХНУ ім. В. Н. Каразіна).
                  </p>
                  <p>
                    <strong>Ключовий розділ у підручнику:</strong> «Держава Гуптів» (сторінки 396–412). Саме за його структурою побудовано всі 10 слайдів нашої презентації:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-gupta-sandstoneMuted pt-1">
                    <li>с. 396–397: розпад Кушанського царства, перші предки (Шрі-Гупта, Гхатоткача);</li>
                    <li>с. 397–398: шлюб Чандрагупти I з принцесою Ліччхавів, ера 320 року;</li>
                    <li>с. 398–401: завоювання Самудрагупти (Аллахабадська колона, обряд Ашвамедха);</li>
                    <li>с. 401–405: Чандрагупта II Вікрамадітья, розгром саків та порти Гуджарату;</li>
                    <li>с. 405–407: адміністрація (бхукті, вішая, ради купців адхікарана, саманти);</li>
                    <li>с. 407–412: правління Кумарагупти I (Наланда), навала ефталітів і занепад за Скандагупти.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PRIMARY SOURCES */}
          {activeTab === 'primary' && (
            <div className="space-y-3">
              <p className="text-xs text-gupta-sandstoneMuted">
                Першоджерела — це автентичні пам'ятки самої епохи Гуптів, на які спирався О. П. Крижанівський:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-gupta-dark/80 border border-gupta-border">
                  <h4 className="font-semibold text-gupta-gold text-xs sm:text-sm flex items-center gap-1.5">
                    <Scroll className="w-3.5 h-3.5" />
                    <span>Щоденник ченця Фасяня («Фо го цзі»)</span>
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gupta-sandstoneMuted mt-1 leading-relaxed">
                    Китайський паломник подорожував Індією в 399–414 рр. (доба Чандрагупти II). Головний свідок відсутності страт, безпеки доріг, безкоштовних лікарень і добробуту населення.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-gupta-dark/80 border border-gupta-border">
                  <h4 className="font-semibold text-gupta-gold text-xs sm:text-sm flex items-center gap-1.5">
                    <Scroll className="w-3.5 h-3.5" />
                    <span>Аллахабадський напис (Прашасті)</span>
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gupta-sandstoneMuted mt-1 leading-relaxed">
                    Текст придворного поета і міністра Харішени на кам'яній колоні Ашоки. Містить точний перелік підкорених Самудрагуптою 9 північних та 12 південних царів.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-gupta-dark/80 border border-gupta-border">
                  <h4 className="font-semibold text-gupta-gold text-xs sm:text-sm flex items-center gap-1.5">
                    <Scroll className="w-3.5 h-3.5" />
                    <span>Напис на Залізній колоні в Делі</span>
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gupta-sandstoneMuted mt-1 leading-relaxed">
                    Санскритський віршований напис бл. 402 року про перемоги царя Чандри (Чандрагупти II) над ворогами на південному та північно-західному кордонах.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-gupta-dark/80 border border-gupta-border">
                  <h4 className="font-semibold text-gupta-gold text-xs sm:text-sm flex items-center gap-1.5">
                    <Scroll className="w-3.5 h-3.5" />
                    <span>Написи в Бхітарі та Джунагадхі</span>
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gupta-sandstoneMuted mt-1 leading-relaxed">
                    Кам'яні стели царя Скандагупти (455–467 рр.) про відбиття навали білих гунів (хуна) та відбудову греблі озера Сударшана.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ACADEMIC MONOGRAPHS */}
          {activeTab === 'academic' && (
            <div className="space-y-3">
              <p className="text-xs text-gupta-sandstoneMuted">
                Класичні праці світових індологів, звідки походять терміни та оцінки:
              </p>

              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-gupta-dark/80 border border-gupta-border flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gupta-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gupta-gold text-xs sm:text-sm">
                      Vincent A. Smith. The Early History of India (Oxford, 1924)
                    </h4>
                    <p className="text-[11px] sm:text-xs text-gupta-sandstoneMuted mt-0.5">
                      Саме британський історик Вінсент Сміт першим увів знамените порівняння Самудрагупти з Наполеоном («The Indian Napoleon»), яке згодом стало хрестоматійним в університетських підручниках.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-gupta-dark/80 border border-gupta-border flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gupta-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gupta-gold text-xs sm:text-sm">
                      Бонгард-Левін Г. М., Ільїн Г. Ф. Індія в давнину (М., 1985)
                    </h4>
                    <p className="text-[11px] sm:text-xs text-gupta-sandstoneMuted mt-0.5">
                      Фундаментальне дослідження соціально-економічного устрою: поділ на провінції-бхукті, округи-вішая, діяльність рад адхікарана та піраміда васалів-самантів.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-gupta-dark/80 border border-gupta-border flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gupta-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gupta-gold text-xs sm:text-sm">
                      Рудий В. І. Класична культура стародавньої Індії (К., 1999)
                    </h4>
                    <p className="text-[11px] sm:text-xs text-gupta-sandstoneMuted mt-0.5">
                      Дослідження математичних праць Аріабхати, драматургії Калідаси та релігійно-філософського синтезу епохи Гуптів.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-gupta-dark/60 border-t border-gupta-border text-center text-xs text-gupta-sandstoneMuted flex items-center justify-between px-5">
          <span>Натисніть <kbd className="px-1.5 py-0.5 rounded bg-gupta-card border border-gupta-border text-gupta-gold font-mono">B</kbd> або <kbd className="px-1.5 py-0.5 rounded bg-gupta-card border border-gupta-border text-gupta-gold font-mono">Esc</kbd> щоб закрити</span>
          <span className="text-gupta-gold">Історичний факультет • 1 курс</span>
        </div>
      </div>
    </div>
  );
}
