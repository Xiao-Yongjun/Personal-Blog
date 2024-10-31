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
 export function getTimeDifference(inputDate) {
    // 将输入的时间字符串转换为 Date 对象
    const targetDate = new Date(inputDate);
    
    // 获取当前时间
    const now = new Date();
    
    // 计算时间差（以毫秒为单位），确保时间差为正数
    const difference = Math.abs(now - targetDate);

    // 如果时间差小于1秒，返回0
    if (difference < 1000) {
        return {
            years: 0,
            months: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    // 计算年、月、日、时、分、秒
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30); // 简化处理，假设每个月30天
    const years = Math.floor(months / 12);

    // 计算剩余的天数、小时、分钟和秒
    const remainingDays = days % 30;
    const remainingHours = hours % 24;
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;

    return {
        years,
        months,
        days: remainingDays,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds
    };
}

// 示例用法
const inputDate = "2023-01-01T00:00:00"; // 输入的时间
const result = getTimeDifference(inputDate);

console.log(`距离现在的时间为：${result.years}年 ${result.months}月 ${result.days}天 ${result.hours}小时 ${result.minutes}分钟 ${result.seconds}秒`);
