import DBConnection from './DBConnection';
import Queries from './Queries';

class Message {
  static async messageExit({ subject, body }) {
    
    await DBConnection.query(Queries.messageTable.createTable);

    const { rows } = await DBConnection.query(
      Queries.messageTable.messageExist, [subject, body],
    );

    return rows;
  }

  static async saveMessage({
    to, subject, body, createdDate
  }, from) {
    const check_tables = await DBConnection.query(Queries.messageTable.createTable);
    
    const { rows } = await DBConnection.query(
      Queries.messageTable.insertMessage,
      [from, to, subject, body, '0', createdDate, ''],
    );

    return rows[0];
  }

  static async getMessages() {
    
    await DBConnection.query(Queries.messageTable.createTable);

    const { rows } = await DBConnection.query(
      Queries.messageTable.allMessages,
    );

    return rows;
  }

  static async getMessageById(id) {
    
    await DBConnection.query(Queries.messageTable.createTable);

    const { rows } = await DBConnection.query(
      Queries.messageTable.anMessage, [id],
    );

    return rows[0];
  }

  static async getMessageByIdAndFromId(from, messageId) {
    const { rows } = await DBConnection.query(
      Queries.messageTable.oneMessage, [from, messageId],
    );

    return rows[0];
  }

  static async editStatus({ status }, from, { messageId }) {
    const oneData = await this.getMessageById(messageId);
    if (!oneData) return false;

    const oneMessage = await this.getMessageByIdAndFromId(from, messageId);
    if (!oneMessage) return 'not-allowed';

    const { rows } = await DBConnection.query(
      Queries.messageTable.updateStatus, [status, from, messageId],
    );

    return rows[0];
  }

  static async deleteMessage(from, { messageId }) {
    
    const oneData = await this.getMessageById(messageId);
    if (!oneData) return false;

    const oneMessage = await this.getMessageByIdAndFromId(from, messageId);
    if (!oneMessage) return 'not-allowed';

    const { rows } = await DBConnection.query(
      Queries.messageTable.deleteMessage, [from, messageId],
    );

    return rows[0];
  }
}

export default Message;
