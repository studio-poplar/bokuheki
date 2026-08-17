"use client";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("contact form submitted", data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">お名前</label>
        <input id="name" name="name" type="text" placeholder="山田 太郎" />
      </div>
      <div className="field">
        <label htmlFor="email">メールアドレス</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" />
      </div>
      <div className="field">
        <label htmlFor="tel">電話番号</label>
        <input id="tel" name="tel" type="tel" placeholder="090-0000-0000" />
      </div>
      <div className="field">
        <label htmlFor="subject">ご相談内容</label>
        <input id="subject" name="subject" type="text" placeholder="例）店舗内装の黒漆喰について" />
      </div>
      <div className="field">
        <label htmlFor="message">お問い合わせ内容</label>
        <textarea id="message" name="message" rows={5} placeholder="ご相談内容の詳細をご記入ください" />
      </div>
      <button type="submit" className="submit-btn">
        送信する
      </button>
    </form>
  );
}
