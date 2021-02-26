import Message from '../models/Message';
import Helper from '../helpers/theHelper';

class MessageController {
  static async createMessage(req, res) {
    try {
      const userEmail = req.userSignedIn.email;

      req.body.createdDate = Helper.currentDate();

      // i've removed this check,
      // const dataExist = await Message.messageExit(req.body);
      // if (dataExist[0]) return res.status(409).json({ status: res.statusCode, error: 'Sorry! This message already exist.' });

      const isSaved = await Message.saveMessage(req.body, userEmail);
      
      return res.status(201).json({
        status: res.statusCode,
        data: {
          message: {
            id: isSaved.id,
            from: isSaved.messageFrom,
            to: isSaved.messageTo,
            subject: isSaved.messageSubject,
            body: isSaved.messageBody,
            status: isSaved.status,
            createdDate: isSaved.createdDate
          },
          message: `Created ${userEmail} message, Successfuly`,
        },
      });
    } catch (err) {
      return res.status(500).json({
        status: res.statusCode,
        error: err.message,
      });
    }
  }

  static async viewMessages(req, res) {
    try {
      const messages = await Message.getMessages();

      if (!messages) {
        return res.status(404).json({ status: res.statusCode, message: 'Sorry! there are no Messages.' });
      }

      return res.status(200).json({ status: res.statusCode, data: messages });
    } catch (err) {
      return res.status(500).json({
        status: res.statusCode,
        error: err.message,
      });
    }
  }

  static async viewOneMessage(req, res) {
    try {
      const oneData = await Message.getMessageById(req.params.messageId);
      if (!oneData) return res.status(404).json({ status: res.statusCode, error: 'Sorry! That message not found.' });

      return res.status(200).json({ status: res.statusCode, data: oneData });
    } catch (err) {
      return res.status(500).json({
        status: res.statusCode,
        error: err.message,
      });
    }
  }

  static async updateStatus(req, res) {
    try {
      const userEmail = req.userSignedIn.email;
      const statusUpdate = await Message.editStatus(req.body, userEmail, req.params);

      if (statusUpdate === 'not-allowed') {
        return res.status(403).json({
          status: res.statusCode,
          error: 'You are not allowed to access this record !',
        });
      }

      if (statusUpdate) {
        return res.status(200).json({
          status: res.statusCode,
          data: {
            id: statusUpdate.id,
            message: 'Updated message\'s status.',
          },
        });
      }

      return res.status(404).json({
        status: res.statusCode,
        data: 'Sorry! a message\'s record to edit, not found.',
      });
    } catch (err) {
      return res.status(500).json({
        status: res.statusCode,
        error: err.message,
      });
    }
  }

  static async removeMessage(req, res) {
    try {
      const userEmail = req.userSignedIn.email;
      
      const messageToRemove = await Message.deleteMessage(userEmail, req.params);
      
      if (messageToRemove === 'not-allowed') {
        return res.status(403).json({
          status: res.statusCode,
          error: 'You are not allowed to access this record !',
        });
      }

      if (messageToRemove) {
        return res.status(200).json({
          status: res.statusCode,
          data: {
            id: messageToRemove.id,
            message: 'message record has been deleted.',
          },
        });
      }

      return res.status(404).json({
        status: res.statusCode,
        data: 'Sorry! a message\'s record to delete, not found.',
      });
    } catch (err) {
      return res.status(500).json({
        status: res.statusCode,
        error: err.message,
      });
    }
  }
}

export default MessageController;
