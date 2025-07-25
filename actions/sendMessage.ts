'use server';

/** 接收表单数据并在服务器打印日志 */
export default async function sendMessage(formData: FormData): Promise<void> {
  // 函数执行 pending = true

  const name = formData.get('name')?.toString() || '匿名';
  const message = formData.get('message')?.toString() || '';

  // 🚩 先简单打印，稍后可换成写数据库 / 发邮件
  console.log('[新留言]', { name, message, timestamp: new Date().toISOString() });
  
  // 模拟一些处理时间
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // 不返回值，符合 Server Actions 在表单中的类型要求
  // 函数执行完成 pending = false
}