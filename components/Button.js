export default function Button({ text, link }) {
    return (
      <button href={link}>
        <span>{text}</span>
      </button>
    );
  }