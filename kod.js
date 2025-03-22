document.getElementById('notifylink').addEventListener('click', function(event) {
    event.preventDefault();
    const token = '7537108602:AAF6_dm3QU6DXQR71uouxu7NClAarPbIkGM';
    const chatId = '-4751508523';
    const message = 'Пользователь перешел по ссылке!';
    fetch('`https://api.telegram.org/bot${token}/sendMessage', {
    method:'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    chat_id: chatId,
    text: message})
    }).then(response => {if (response.ok)})
    {
    console.log('Уведомление отправлено!')
    window.location.href = 'https://ovg96706.github.io/test1.io/'
    }
    else {
    console.error('ошибка при отправке уведомления');
    }
    })
    .catch(error => {console.error('Ошибка: ', error);
    });
    });
