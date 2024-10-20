export function formatDateTime(timestamp) {
    // 确保时间戳是毫秒级
    if (timestamp < 9999999999) {
        timestamp *= 1000;
    }

    // 创建Date对象
    const date = new Date(timestamp);

    // 获取各个日期组件
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2); // 获取月份，月份是从0开始的，所以加1
    const day = `0${date.getDate()}`.slice(-2); // 获取天数
    const hours = `0${date.getHours()}`.slice(-2); // 获取小时
    const minutes = `0${date.getMinutes()}`.slice(-2); // 获取分钟
    const seconds = `0${date.getSeconds()}`.slice(-2); // 获取秒数

    // 返回格式化后的日期和时间对象
    return {
        year: year,
        month: month,
        day: day,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

