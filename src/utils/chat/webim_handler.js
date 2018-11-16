// const webim = require('./webim_wx')

import  {webim} from './webim_wx'
console.log(webim)
const onMsgNotify = () =>{
    var sess, newMsg;
    //获取所有聊天会话
    var sessMap = webim.MsgStore.sessMap();
    for (var j in newMsgList) {//遍历新消息
        newMsg = newMsgList[j];
        if (newMsg.getSession().id() == selToID) {//为当前聊天对象的消息
            selSess = newMsg.getSession();
            //在聊天窗体中新增一条消息
            //console.warn(newMsg);
            addMsg(newMsg);
        }
    }
    //消息已读上报，以及设置会话自动已读标记
    webim.setAutoRead(selSess, true, true);
    for (var i in sessMap) {
        sess = sessMap[i];
        if (selToID != sess.id()) {//更新其他聊天对象的未读消息数
            updateSessDiv(sess.type(), sess.id(), sess.unread());
        }
    }
}
const onConnNotify = (resp) =>{
    var info;
    switch (resp.ErrorCode) {
        case webim.CONNECTION_STATUS.ON:
            webim.Log.warn('建立连接成功: ' + resp.ErrorInfo);
            break;
        case webim.CONNECTION_STATUS.OFF:
            info = '连接已断开，无法收到新消息，请检查下您的网络是否正常: ' + resp.ErrorInfo;
            console.log(info);
            webim.Log.warn(info);
            break;
        case webim.CONNECTION_STATUS.RECONNECT:
            info = '连接状态恢复正常: ' + resp.ErrorInfo;
            console.log(info);
            webim.Log.warn(info);
            break;
        default:
            webim.Log.error('未知连接状态: =' + resp.ErrorInfo);
            break;
    }
}
// 登录方法
const webimLogin =function (data) {
    var userSign='eJxNjV1vgjAYRv8Lt1uWFsq*7sSPWBQzpxdjN02FMl9A2kFbccv**xqi0dtzcp7n19suNw88y6RpNNMnJbxXD3n3A4ZcNBoKEK2DPXBZmuasuFKQM65Z0OY3RZdXbFCOYYIQfkQ*IWcpegWtYLzQwyAOw9BH6JJa0XYgGyd8l2GEMbpKDQcxJMQPwhdCgssffDmcTNMxXU9on8wtStX*yRwnn1kVR8Wq1rV549F8t5sZq-zxLNlwLNd0P6Iw7W0VvYsPjGkdyDgtT8nh*ZgCWW2XC1vinzsz6hax-vb*-gFRKVnY'
    // 登录所需账号信息
    const loginInfo={
        sdkAppID:'1400160244',
        appIDAt3rd:'1400160244',
        identifier:'xiaojun',
        identifierNick:'kk',
        userSig:userSign,
        accountType:36862
    };
    // 需要监听的事件
    const listeners={
        onMsgNotify:onMsgNotify,//监听消息
        onConnNotify:onConnNotify//监听连接状态
    };
    const options = {
        'isAccessFormalEnv': true,
        'isLogOn': true
    };
    console.log("llllllllllllllllllllll")
    webim.login(
        loginInfo, listeners, options,
        function (resp) {
            loginInfo.identifierNick = resp.identifierNick;//设置当前用户昵称
            // initDemoApp();
            console.log("success>>>>>>>>>>>>>>>>>>>>>>")
        },
        function (err) {
            console.log(err.ErrorInfo);
            console.log("error>>>>>>>>>>>>>>>>>>>>>>")
        }
    );
}
//聊天页面增加一条消息,(历史消息，以及刚发的消息)
const addMsg = (msg) =>{
    isSelfSend = msg.getIsSend();//消息是否为自己发的
}

const convertMsgtoHtml = (msg) =>{
    var html = "", elems, elem, type, content;
    elems = msg.getElems();//获取消息包含的元素数组
    for (var i in elems) {
        elem = elems[i];
        type = elem.getType();//获取元素类型
        content = elem.getContent();//获取元素对象
        switch (type) {
            case webim.MSG_ELEMENT_TYPE.TEXT:
                html += '';
                break;
            case webim.MSG_ELEMENT_TYPE.FACE:
                html += '';
                break;
            case webim.MSG_ELEMENT_TYPE.IMAGE:
                html += '';
                break;
            case webim.MSG_ELEMENT_TYPE.SOUND:
                html += '';
                break;
            case webim.MSG_ELEMENT_TYPE.FILE:
                html += '';
                break;
            case webim.MSG_ELEMENT_TYPE.LOCATION://暂不支持地理位置
                //html += convertLocationMsgToHtml(content);
                break;
            case webim.MSG_ELEMENT_TYPE.CUSTOM:
                html += '';
                break;
            case webim.MSG_ELEMENT_TYPE.GROUP_TIP:
                html += '';
                break;
            default:
                webim.Log.error('未知消息元素类型: elemType=' + type);
                break;
        }
    }
    return html;
}

export default {
    webimLogin
}