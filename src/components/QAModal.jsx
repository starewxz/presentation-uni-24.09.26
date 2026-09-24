import React from 'react';
import { X, HelpCircle, BookOpen, CheckCircle2 } from 'lucide-react';

export default function QAModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const questions = [
    {
      q: "Чому історик Вінсент Сміт порівняв Самудрагупту з Наполеоном? У чому специфіка оцінки О. П. Крижанівського?",
      a: "Вінсент Сміт виділив вражаючу серію воєнних перемог: Самудрагупта особисто очолював походи від предгір'їв Гімалаїв до півдня Декану (Канчі) і не зазнав жодної нищівної поразки. Проте О. П. Крижанівський підкреслює ключову різницю: кампанії Наполеона завершилися крахом імперії та Ватерлоо, тоді як Самудрагупта створив стійку васально-ленну систему й передав процвітаючу державу синові, заклавши підґрунтя для Золотого віку Чандрагупти II."
    },
    {
      q: "У чому полягає фундаментальна відмінність імперії Гуптів від імперії Маур'їв?",
      a: "Імперія Маур'їв прагнула жорсткої унітарної централізації (за трактатом «Артхашастра»): гігантська армія чиновників, таємні агенти й донощики (гудхапуруша), пряме адміністрування з центру. Імперія Гуптів — це гнучка феодально-васальна піраміда (саманта): широка автономія підкорених правителів, самоврядування купецьких гільдій у містах (адхікарани), відсутність жорстоких кар і поліцейського стеження."
    },
    {
      q: "Чому успішне відбиття гунської навали Скандагуптою все одно призвело до краху імперії?",
      a: "О. П. Крижанівський наголошує на економічному виснаженні. Війна з гунами-ефталітами тривала роками й вимагала утримання мобільної кінної армії. Це спустошило скарбницю, що яскраво засвідчено нумізматикою: вміст золота в динарах Скандагупти різко впав. Коли наприкінці V ст. прийшла друга хвиля гунів на чолі з Тораманою, центр уже не мав фінансових ресурсів для оборони, а регіональні намісники (саманти) відмовилися коритися слабкому імператору."
    },
    {
      q: "Яке геоекономічне значення мав розгром Західних Кшатрапів (саків) Чандрагуптою II?",
      a: "Знищення саків відкрило Гуптам прямий вихід до Аравійського моря через ключові порти Бхарукаччха (Баригаза) та Камбей. Імперія взяла під тотальний контроль морську транзитну торгівлю шовком, спеціями та індійською сталлю з Римською імперією, Олександрією та Сасанідським Іраном, що спричинило колосальний приплив золота в країну."
    },
    {
      q: "Які дивовижні риси гуптського правосуддя та побуту зафіксував чернець Фасянь?",
      a: "Фасянь був вражений гуманністю законів: повна відсутність смертної кари та тортур (покарання обмежувалися штрафами, а бунтівникам лише відсікали праву руку). Також він відзначив вільне пересування без внутрішніх паспортів і наявність безкоштовних лікарень та будинків відпочинку (пуньяшала) для знедолених."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-gupta-dark/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in select-text">
      <div className="w-full max-w-4xl max-h-[88vh] bg-gupta-card border border-gupta-gold/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-gupta-border flex items-center justify-between bg-gupta-cardLight/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-gupta-gold/15 text-gupta-gold border border-gupta-gold/30">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-gupta-sandstone">
                Шпаргалка для Q&A з викладачем
              </h2>
              <p className="text-xs text-gupta-sandstoneMuted">
                Типові дискусійні запитання університетських семінарів за концепцією О. П. Крижанівського
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

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {questions.map((item, idx) => (
            <div 
              key={idx} 
              className="p-4 rounded-xl bg-gupta-dark/80 border border-gupta-border/80 hover:border-gupta-gold/40 transition-colors space-y-2"
            >
              <div className="flex items-start gap-2.5">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gupta-gold/15 text-gupta-gold font-mono font-bold text-xs flex items-center justify-center border border-gupta-gold/30">
                  {idx + 1}
                </span>
                <h3 className="text-sm font-semibold text-gupta-gold leading-snug">
                  {item.q}
                </h3>
              </div>
              <div className="pl-8 text-xs sm:text-sm text-gupta-sandstone/90 leading-relaxed">
                {item.a}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-3 bg-gupta-dark/60 border-t border-gupta-border text-center text-xs text-gupta-sandstoneMuted">
          Джерело: Крижанівський О. П. «Історія Стародавнього Сходу». — К.: Либідь, 2000 (с. 396–412)
        </div>
      </div>
    </div>
  );
}
