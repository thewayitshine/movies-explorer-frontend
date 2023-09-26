import './Message.css';

function Message({ isOpen, isSucces, text, errorText, onClose }) {
  return (
    <div className={isOpen ? "message message_opened" : "message"}>
      <div className={isOpen ? "message__body message__body_opened" : "message__body"}>
        <p className="message__text">
          {isSucces ? text : errorText }
        </p>
        <button className="message__close hover-opacity-btn" type="button" onClick={onClose} />
      </div>
    </div>
  )
}

export default Message;