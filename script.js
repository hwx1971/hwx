// 教案模板生成函数
function generateLesson(data) {
    const {
        subject,
        grade,
        unit,
        topic,
        duration,
        studentCount,
        objectives,
        keyPoints
    } = data;

    const lessonPlan = `
<h3>基本信息</h3>
<p><strong>学科:</strong> ${subject}</p>
<p><strong>年级:</strong> ${grade}</p>
<p><strong>单元/章节:</strong> ${unit}</p>
<p><strong>课题:</strong> ${topic}</p>
<p><strong>课时:</strong> ${duration} 课时</p>
<p><strong>学生人数:</strong> ${studentCount} 人</p>

<h3>教学目标</h3>
<p>${objectives}</p>

<h3>教学重点和难点</h3>
<p>${keyPoints}</p>

<h3>教学方法</h3>
<ul>
    <li>讲授法 - 用于讲解核心知识点</li>
    <li>演示法 - 展示实际应用或案例</li>
    <li>讨论法 - 引导学生分组讨论重难点</li>
    <li>练习法 - 设计课堂练习加深理解</li>
    <li>合作学习 - 小组活动促进学生互动</li>
</ul>

<h3>教学资源与工具</h3>
<ul>
    <li>教科书和相关教学材料</li>
    <li>黑板/课件演示</li>
    <li>教学工具和仪器</li>
    <li>多媒体资源（视频、图片等）</li>
    <li>学生活动材料</li>
</ul>

<h3>教学过程设计</h3>

<h4>一、导入阶段 (5 分钟)</h4>
<ul>
    <li>创设教学情境，引起学生注意</li>
    <li>复习相关前置知识</li>
    <li>明确本课学习目标</li>
    <li>激发学生学习兴趣</li>
</ul>

<h4>二、新课讲授阶段 (${Math.max(10, (parseInt(duration) * 35 - 15) / 2)} 分钟)</h4>
<ul>
    <li>系统讲解知识点，深化学生理解</li>
    <li>结合实例说明，提高学生认识</li>
    <li>运用多种教学手段，激发学生参与</li>
    <li>重点突破难点问题</li>
</ul>

<h4>三、课堂实践阶段 (${Math.max(10, (parseInt(duration) * 35 - 15) / 2)} 分钟)</h4>
<ul>
    <li>设计针对性练习题</li>
    <li>组织小组讨论和互动</li>
    <li>教师巡回指导</li>
    <li>及时反馈和矫正</li>
</ul>

<h4>四、总结阶段 (3-5 分钟)</h4>
<ul>
    <li>梳理课堂核心内容</li>
    <li>强调重点难点</li>
    <li>前瞻后续内容</li>
    <li>布置小结和思考题</li>
</ul>

<h3>课堂纪律与管理</h3>
<ul>
    <li>明确课堂纪律要求，建立积极学习氛围</li>
    <li>以正面激励为主，表扬优秀表现</li>
    <li>及时处理课堂突发事件，保持教学秩序</li>
    <li>根据学生表现灵活调整教学节奏</li>
</ul>

<h3>作业与拓展</h3>
<ul>
    <li><strong>课堂作业:</strong> 设计 3-5 道练习题，巩固本课知识</li>
    <li><strong>课后作业:</strong> 根据学生学习情况布置适量作业</li>
    <li><strong>拓展学习:</strong> 推荐阅读材料或在线资源，满足不同学生需求</li>
    <li><strong>思考题:</strong> 设计开放性问题，培养学生思维能力</li>
</ul>

<h3>教学评价</h3>
<ul>
    <li><strong>形成性评价:</strong> 观察学生课堂表现，关注参与度和理解程度</li>
    <li><strong>课堂测试:</strong> 通过小测验了解学生掌握情况</li>
    <li><strong>学生自评:</strong> 引导学生反思学习过程</li>
    <li><strong>同伴评价:</strong> 组织同学互评，促进学生间的交流</li>
</ul>

<h3>教学反思与改进</h3>
<ul>
    <li>课后反思本课教学的成功之处和不足</li>
    <li>分析学生学习中出现的主要问题</li>
    <li>总结经验，为后续教学提供改进方向</li>
    <li>根据学生反馈调整下次教学计划</li>
</ul>

<h3>差异化教学考虑</h3>
<ul>
    <li><strong>学困生:</strong> 提供更多基础性练习和个别指导</li>
    <li><strong>普通生:</strong> 落实标准要求，确保基础掌握</li>
    <li><strong>优秀生:</strong> 提供挑战性任务和深度学习机会</li>
</ul>

<hr>
<p style="text-align: center; color: #999; margin-top: 30px; font-size: 0.9em;">
    📌 说明: 此为教案基础框架，请根据实际教学情况进行详细补充和修改。<br>
    祝你的课堂教学顺利！
</p>
    `;

    return lessonPlan;
}

// 表单提交事件
document.getElementById('lessonForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // 获取表单数据
    const data = {
        subject: document.getElementById('subject').value,
        grade: document.getElementById('grade').value,
        unit: document.getElementById('unit').value,
        topic: document.getElementById('topic').value,
        duration: document.getElementById('duration').value,
        studentCount: document.getElementById('studentCount').value,
        objectives: document.getElementById('objectives').value,
        keyPoints: document.getElementById('keyPoints').value
    };

    // 生成教案
    const lessonContent = generateLesson(data);

    // 显示结果
    const resultSection = document.getElementById('resultSection');
    const resultContent = document.getElementById('resultContent');
    resultContent.innerHTML = lessonContent;
    resultSection.style.display = 'block';

    // 存储数据用于下载
    window.currentLessonData = data;

    // 平滑滚动到结果区域
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// 下载教案
document.getElementById('downloadBtn').addEventListener('click', function() {
    const data = window.currentLessonData;
    if (!data) return;

    // 生成纯文本版本的教案
    const textContent = generatePlainTextLesson(data);

    // 创建 Blob 对象
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });

    // 创建下载链接
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `教案_${data.subject}_${data.topic}_${new Date().getTime()}.txt`;
    link.click();

    // 清理
    URL.revokeObjectURL(link.href);
    
    // 提示
    showNotification('教案已下载');
});

// 生成纯文本格式的教案
function generatePlainTextLesson(data) {
    const { subject, grade, unit, topic, duration, studentCount, objectives, keyPoints } = data;
    
    return `
智能教案写作工具 - 生成的教案
================================

基本信息
--------
学科: ${subject}
年级: ${grade}
单元/章节: ${unit}
课题: ${topic}
课时: ${duration} 课时
学生人数: ${studentCount} 人

教学目标
--------
${objectives}

教学重点和难点
----------
${keyPoints}

教学方法
--------
• 讲授法 - 用于讲解核心知识点
• 演示法 - 展示实际应用或案例
• 讨论法 - 引导学生分组讨论重难点
• 练习法 - 设计课堂练习加深理解
• 合作学习 - 小组活动促进学生互动

教学资源与工具
--------
• 教科书和相关教学材料
• 黑板/课件演示
• 教学工具和仪器
• 多媒体资源（视频、图片等）
• 学生活动材料

教学过程设计
--------

一、导入阶段 (5 分钟)
• 创设教学情境，引起学生注意
• 复习相关前置知识
• 明确本课学习目标
• 激发学生学习兴趣

二、新课讲授阶段 (${Math.max(10, (parseInt(duration) * 35 - 15) / 2)} 分钟)
• 系统讲解知识点，深化学生理解
• 结合实例说明，提高学生认识
• 运用多种教学手段，激发学生参与
• 重点突破难点问题

三、课堂实践阶段 (${Math.max(10, (parseInt(duration) * 35 - 15) / 2)} 分钟)
• 设计针对性练习题
• 组织小组讨论和互动
• 教师巡回指导
• 及时反馈和矫正

四、总结阶段 (3-5 分钟)
• 梳理课堂核心内容
• 强调重点难点
• 前瞻后续内容
• 布置小结和思考题

课堂纪律与管理
--------
• 明确课堂纪律要求，建立积极学习氛围
• 以正面激励为主，表扬优秀表现
• 及时处理课堂突发事件，保持教学秩序
• 根据学生表现灵活调整教学节奏

作业与拓展
--------
课堂作业: 设计 3-5 道练习题，巩固本课知识
课后作业: 根据学生学习情况布置适量作业
拓展学习: 推荐阅读材料或在线资源，满足不同学生需求
思考题: 设计开放性问题，培养学生思维能力

教学评价
--------
• 形成性评价: 观察学生课堂表现，关注参与度和理解程度
• 课堂测试: 通过小测验了解学生掌握情况
• 学生自评: 引导学生反思学习过程
• 同伴评价: 组织同学互评，促进学生间的交流

教学反思与改进
--------
• 课后反思本课教学的成功之处和不足
• 分析学生学习中出现的主要问题
• 总结经验，为后续教学提供改进方向
• 根据学生反馈调整下次教学计划

差异化教学考虑
--------
学困生: 提供更多基础性练习和个别指导
普通生: 落实标准要求，确保基础掌握
优秀生: 提供挑战性任务和深度学习机会

================================
说明: 此为教案基础框架，请根据实际教学情况进行详细补充和修改。
生成时间: ${new Date().toLocaleString('zh-CN')}
祝你的课堂教学顺利！
    `;
}

// 复制内容
document.getElementById('copyBtn').addEventListener('click', function() {
    const resultContent = document.getElementById('resultContent');
    const text = resultContent.innerText;

    navigator.clipboard.writeText(text).then(() => {
        showNotification('教案已复制到剪贴板');
    }).catch(() => {
        showNotification('复制失败，请重试');
    });
});

// 重新生成
document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('lessonForm').reset();
    document.getElementById('resultSection').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 通知提示函数
function showNotification(message) {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #667eea;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    // 3 秒后移除
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 添加通知动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);
