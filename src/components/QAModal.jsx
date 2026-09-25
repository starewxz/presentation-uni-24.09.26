import React from 'react';
import { X, HelpCircle, BookOpen, CheckCircle2 } from 'lucide-react';

export default function QAModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const questions = [
    {
      q: "Чому історик Вінсент Сміт порівняв Самудрагупту з Наполеоном?",
      a: "Через масштаб і безпрограшність його походів: Самудрагупта особисто пройшов з війною всю Індію — від Гімалаїв на півночі до південного царства Паллавів — і не програв жодної великої битви. Але Крижанівський наголошує на різниці: Наполеон закінчив катастрофою та засланням, а Самудрагупта передав міцну, процвітаючу державу своєму синові."
    },
    {
      q: "У чому головна різниця між імперією Маур'їв та державою Гуптів?",
      a: "У Маур'їв була жорстка поліцейська система: шпигуни, доноси, суворі кари і тотальний контроль царя. У Гуптів держава трималася на союзах: місцеві князі мали широку свободу (система саманта), у містах влада радилася з купцями та ремісниками, а смертної кари взагалі не було."
    },
    {
      q: "Чому імперія Гуптів розпалася, якщо вони відбили навалу гунів у першій війні?",
      a: "Через повне виснаження скарбниці. Війна з гунами-ефталітами тривала роками і вимагала шалених витрат на армію. Це видно навіть по монетах: вміст золота в них упав з 90% до 65%. Коли гуни напали вдруге, царям уже просто не було чим платити війську, а місцеві князі вирішили відокремитися і більше не слухати столицю."
    },
    {
      q: "Чому розгром саків Чандрагуптою II був таким важливим для економіки?",
      a: "Тому що саки блокували узбережжя Аравійського моря. Розгромивши їх, Гупти отримали головні морські порти (наприклад, Бхарукаччха). Через них пішла пряма торгівля шовком, індійською сталлю та спеціями з Римом і Близьким Сходом, що наповнило скарбницю золотом."
    },
    {
      q: "Що найбільше здивувало китайського мандрівника Фасяня в Індії Гуптів?",
      a: "Його вразила незвична доброта законів: у країні не страчували злочинців і не катували їх (лише штрафували). Люди вільно пересувалися державою без паспортів чи дозволів, а для бідних і хворих у містах працювали безкоштовні лікарні та притулки."
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
                Шпаргалка для Q&A з викладачем (простими словами)
              </h2>
              <p className="text-xs text-gupta-sandstoneMuted">
                Готові короткі відповіді на типові семінарські запитання за підручником О. П. Крижанівського
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
              <div className="pl-8 text-xs sm:text-sm text-gupta-sandstone/95 leading-relaxed">
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
