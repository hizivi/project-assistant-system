const storageKey = "project-assistant-system-v1";

const seedData = {
  projects: [
    {
      id: crypto.randomUUID(),
      name: "海外支付接入",
      stage: "开发",
      owner: "项目经理A / 研发B",
      due: "2026-09-25",
      status: "进行中",
      progress: 55,
      next: "确认合作商沙箱账号权限，并完成接口联调。",
    },
    {
      id: crypto.randomUUID(),
      name: "客服工单系统",
      stage: "需求",
      owner: "项目经理A / 产品C",
      due: "2026-09-20",
      status: "延期",
      progress: 30,
      next: "补齐当地客服退单流程，提交项目经理确认。",
    },
    {
      id: crypto.randomUUID(),
      name: "代理渠道后台",
      stage: "验收",
      owner: "项目经理D / 研发E",
      due: "2026-09-18",
      status: "已完成",
      progress: 100,
      next: "归档验收材料和会议结论。",
    },
  ],
  risks: [
    {
      id: crypto.randomUUID(),
      project: "海外支付接入",
      type: "外部依赖",
      level: "高",
      description: "合作商尚未提供测试账号，接口联调可能延期。",
      action: "发送英文催办邮件，明天上午电话确认。",
      due: "2026-09-19",
      status: "处理中",
    },
    {
      id: crypto.randomUUID(),
      project: "客服工单系统",
      type: "需求变更",
      level: "中",
      description: "海外客服退单流程存在两种口径。",
      action: "整理差异点，请项目经理确认最终流程。",
      due: "2026-09-20",
      status: "待确认",
    },
  ],
  comms: [
    {
      id: crypto.randomUUID(),
      contact: "Alex / 合作商PM",
      channel: "Email",
      topic: "测试账号权限",
      todo: "确认沙箱账号是否今天可用。",
      due: "2026-09-19",
      status: "待对方回复",
    },
    {
      id: crypto.randomUUID(),
      contact: "当地客服主管",
      channel: "Meeting",
      topic: "退单流程",
      todo: "整理流程差异并发项目经理确认。",
      due: "2026-09-20",
      status: "我方处理中",
    },
  ],
  partners: [
    {
      id: crypto.randomUUID(),
      region: "泰国",
      company: "示例渠道A",
      type: "代理商",
      fit: "本地支付 / 客服资源",
      rating: "A",
      status: "待初聊",
      next: "准备英文介绍邮件，确认服务范围。",
    },
    {
      id: crypto.randomUUID(),
      region: "越南",
      company: "示例公司B",
      type: "合作商",
      fit: "客服外包",
      rating: "B",
      status: "资料收集中",
      next: "收集报价、案例和覆盖城市。",
    },
  ],
};

const training = [
  {
    title: "第1阶段：项目助理基本功",
    items: [
      "用一张表讲清楚每个项目的阶段、负责人、计划完成日、当前状态和下一步。",
      "每天练习把“有问题”改写成“事实 + 影响 + 需要谁在何时做什么”。",
      "学习 Excel/WPS 的筛选、排序、冻结窗格、下拉选项、条件格式和 COUNTIF。",
    ],
  },
  {
    title: "第2阶段：风险识别与升级",
    items: [
      "把风险分成进度、需求、质量、资源、外部依赖、沟通、合规。",
      "看到延期、无人负责、反复确认、资料缺失、口径不一致时，主动登记风险。",
      "升级时只讲三件事：影响什么节点、已经做了什么、需要项目经理拍什么板。",
    ],
  },
  {
    title: "第3阶段：海外沟通",
    items: [
      "英文邮件固定结构：背景、请求、截止时间、影响、感谢。",
      "会议后24小时内发纪要，列出 decisions、action items、owner、deadline。",
      "练习礼貌催办：Could you please confirm the latest status by Friday?",
    ],
  },
  {
    title: "第4阶段：数据与资料整理",
    items: [
      "任何数据先确认口径：字段含义、时间范围、来源、是否重复、是否缺失。",
      "资料归档统一命名：日期_项目_资料类型_版本。",
      "学会用数据支撑周报：本周完成数、延期数、高风险数、待回复数。",
    ],
  },
  {
    title: "第5阶段：外部资源挖掘",
    items: [
      "搜索渠道：官网、LinkedIn、展会名单、同行推荐、当地行业协会。",
      "资源库必须记录来源链接、国家地区、联系人、匹配业务、初步评级和下一步。",
      "不要只收集公司名，要能说明为什么值得联系。",
    ],
  },
  {
    title: "第6阶段：面试与试用期表达",
    items: [
      "面试时强调你能把混乱事项变成清单、节点、风险和跟进闭环。",
      "试用期每天输出：今日完成、异常风险、明日计划、需要支持。",
      "把“不懂技术”转化成优势：先问清业务目的、输入输出、责任人和验收标准。",
    ],
  },
];

const fieldConfig = {
  project: {
    title: "新增项目",
    store: "projects",
    fields: [
      ["name", "项目名称", "text"],
      ["stage", "当前阶段", "select", ["需求", "设计", "开发", "测试", "上线", "验收", "归档"]],
      ["owner", "负责人", "text"],
      ["due", "计划完成", "date"],
      ["status", "状态", "select", ["未开始", "进行中", "延期", "阻塞", "已完成"]],
      ["progress", "进度%", "number"],
      ["next", "下一步动作", "textarea", null, true],
    ],
  },
  risk: {
    title: "新增风险",
    store: "risks",
    fields: [
      ["project", "关联项目", "text"],
      ["type", "类型", "select", ["进度", "外部依赖", "需求变更", "质量", "资源", "沟通", "合规"]],
      ["level", "等级", "select", ["高", "中", "低"]],
      ["due", "截止日期", "date"],
      ["status", "状态", "select", ["待确认", "处理中", "已解决", "已关闭", "需升级"]],
      ["description", "问题描述", "textarea", null, true],
      ["action", "解决动作", "textarea", null, true],
    ],
  },
  comm: {
    title: "新增海外沟通",
    store: "comms",
    fields: [
      ["contact", "对象", "text"],
      ["channel", "渠道", "select", ["Email", "Meeting", "Call", "WhatsApp", "WeChat", "Slack"]],
      ["topic", "主题", "text"],
      ["due", "截止日期", "date"],
      ["status", "状态", "select", ["待对方回复", "我方处理中", "进行中", "已完成", "已取消"]],
      ["todo", "待办事项", "textarea", null, true],
    ],
  },
  partner: {
    title: "新增资源",
    store: "partners",
    fields: [
      ["region", "国家/地区", "text"],
      ["company", "公司/渠道", "text"],
      ["type", "类型", "select", ["合作商", "代理商", "当地客服", "渠道", "供应商"]],
      ["fit", "匹配业务", "text"],
      ["rating", "初步评级", "select", ["A", "B", "C", "待评估"]],
      ["status", "状态", "select", ["待初聊", "沟通中", "资料收集中", "待评估", "已入库", "暂缓", "不匹配"]],
      ["next", "下一步", "textarea", null, true],
    ],
  },
};

let state = loadState();
let activeFormType = "project";

function loadState() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return structuredClone(seedData);
  try {
    return JSON.parse(saved);
  } catch {
    return structuredClone(seedData);
  }
}

function persist() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function badgeClass(value) {
  if (["延期", "阻塞", "高", "需升级", "待对方回复"].includes(value)) return "red";
  if (["进行中", "处理中", "待确认", "资料收集中", "我方处理中"].includes(value)) return "amber";
  if (["已完成", "已解决", "已关闭", "已入库"].includes(value)) return "green";
  return "";
}

function renderAll() {
  renderMetrics();
  renderPriority();
  renderWeekly();
  renderProjects();
  renderRisks();
  renderComms();
  renderPartners();
  renderTraining();
  persist();
}

function renderMetrics() {
  text("metricActive", state.projects.filter((p) => p.status === "进行中").length);
  text("metricDelayed", state.projects.filter((p) => ["延期", "阻塞"].includes(p.status)).length);
  text("metricHighRisks", state.risks.filter((r) => r.level === "高" && r.status !== "已关闭").length);
  text("metricWaiting", state.comms.filter((c) => c.status === "待对方回复").length);
}

function renderPriority() {
  const box = document.getElementById("priorityList");
  const projectItems = state.projects
    .filter((p) => ["延期", "阻塞"].includes(p.status))
    .map((p) => ({ title: `${p.name}｜${p.status}`, body: p.next, danger: true }));
  const riskItems = state.risks
    .filter((r) => r.level === "高" && r.status !== "已关闭")
    .map((r) => ({ title: `${r.project}｜高风险`, body: `${r.description} 下一步：${r.action}`, danger: true }));
  const commItems = state.comms
    .filter((c) => c.status === "待对方回复")
    .map((c) => ({ title: `${c.contact}｜待回复`, body: `${c.topic}：${c.todo}`, danger: false }));
  const items = [...projectItems, ...riskItems, ...commItems].slice(0, 8);
  box.innerHTML = items.length
    ? items.map((item) => `<div class="priority-item ${item.danger ? "danger" : ""}"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.body)}</span></div>`).join("")
    : `<div class="priority-item"><strong>暂无紧急事项</strong><span>继续维护项目进度和沟通记录。</span></div>`;
}

function renderWeekly() {
  const completed = state.projects.filter((p) => p.status === "已完成");
  const delayed = state.projects.filter((p) => ["延期", "阻塞"].includes(p.status));
  const highRisks = state.risks.filter((r) => r.level === "高" && r.status !== "已关闭");
  const waiting = state.comms.filter((c) => c.status === "待对方回复");
  const nextPlans = state.projects.filter((p) => p.status !== "已完成").map((p) => `- ${p.name}：${p.next}`);
  document.getElementById("weeklySummary").value = [
    "【本周完成】",
    completed.length ? completed.map((p) => `- ${p.name}：${p.next}`).join("\n") : "- 暂无已完成项目，请补充本周实际完成事项。",
    "",
    "【异常与风险】",
    delayed.length ? delayed.map((p) => `- ${p.name}：${p.status}，${p.next}`).join("\n") : "- 暂无延期/阻塞项目。",
    highRisks.length ? highRisks.map((r) => `- ${r.project}：${r.description}，影响需关注；下一步：${r.action}`).join("\n") : "- 暂无未关闭高风险。",
    "",
    "【海外沟通】",
    waiting.length ? waiting.map((c) => `- ${c.contact}：${c.topic} 待回复，待办：${c.todo}`).join("\n") : "- 暂无海外待回复事项。",
    "",
    "【下周计划】",
    nextPlans.length ? nextPlans.join("\n") : "- 补充下周计划。",
    "",
    "【需要支持】",
    highRisks.length || delayed.length ? "- 请项目经理协助确认上述风险的优先级、责任人或决策口径。" : "- 暂无需要升级支持事项。",
  ].join("\n");
}

function renderProjects() {
  const keyword = document.getElementById("projectSearch").value.trim().toLowerCase();
  const status = document.getElementById("projectStatusFilter").value;
  const rows = state.projects.filter((p) => {
    const haystack = `${p.name} ${p.owner} ${p.next}`.toLowerCase();
    return (!keyword || haystack.includes(keyword)) && (!status || p.status === status);
  });
  document.getElementById("projectRows").innerHTML = rows.map((p) => `
    <tr>
      <td><strong>${escapeHtml(p.name)}</strong></td>
      <td>${escapeHtml(p.stage)}</td>
      <td>${escapeHtml(p.owner)}</td>
      <td>${formatDate(p.due)}</td>
      <td><span class="badge ${badgeClass(p.status)}">${escapeHtml(p.status)}</span></td>
      <td>${Number(p.progress || 0)}%</td>
      <td>${escapeHtml(p.next)}</td>
      <td class="row-actions">${rowActions("projects", p.id)}</td>
    </tr>
  `).join("");
}

function renderRisks() {
  document.getElementById("riskRows").innerHTML = state.risks.map((r) => `
    <tr>
      <td>${escapeHtml(r.project)}</td>
      <td>${escapeHtml(r.type)}</td>
      <td><span class="badge ${badgeClass(r.level)}">${escapeHtml(r.level)}</span></td>
      <td>${escapeHtml(r.description)}</td>
      <td>${escapeHtml(r.action)}</td>
      <td>${formatDate(r.due)}</td>
      <td><span class="badge ${badgeClass(r.status)}">${escapeHtml(r.status)}</span></td>
      <td class="row-actions">${rowActions("risks", r.id)}</td>
    </tr>
  `).join("");
}

function renderComms() {
  document.getElementById("commRows").innerHTML = state.comms.map((c) => `
    <tr>
      <td>${escapeHtml(c.contact)}</td>
      <td>${escapeHtml(c.channel)}</td>
      <td>${escapeHtml(c.topic)}</td>
      <td>${escapeHtml(c.todo)}</td>
      <td>${formatDate(c.due)}</td>
      <td><span class="badge ${badgeClass(c.status)}">${escapeHtml(c.status)}</span></td>
      <td class="row-actions">${rowActions("comms", c.id)}</td>
    </tr>
  `).join("");
  renderMailTemplate();
}

function renderPartners() {
  document.getElementById("partnerRows").innerHTML = state.partners.map((p) => `
    <tr>
      <td>${escapeHtml(p.region)}</td>
      <td><strong>${escapeHtml(p.company)}</strong></td>
      <td>${escapeHtml(p.type)}</td>
      <td>${escapeHtml(p.fit)}</td>
      <td><span class="badge ${p.rating === "A" ? "green" : p.rating === "B" ? "amber" : ""}">${escapeHtml(p.rating)}</span></td>
      <td><span class="badge ${badgeClass(p.status)}">${escapeHtml(p.status)}</span></td>
      <td>${escapeHtml(p.next)}</td>
      <td class="row-actions">${rowActions("partners", p.id)}</td>
    </tr>
  `).join("");
}

function renderTraining() {
  document.getElementById("trainingGrid").innerHTML = training.map((block) => `
    <article class="training-card">
      <h4>${escapeHtml(block.title)}</h4>
      <ol>${block.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>
    </article>
  `).join("");
}

function renderMailTemplate() {
  const scenario = document.getElementById("mailScenario").value;
  const templates = {
    status: "Hi [Name],\n\nCould you please confirm the latest status of [item] by [date]?\n\nThis item is needed for our project timeline. If there is any blocker, please let us know so we can align on the next step.\n\nThank you for your support.\nBest regards,\n[Your Name]",
    risk: "Hi [Name],\n\nI would like to highlight a potential risk regarding [item].\n\nCurrent blocker: [describe the issue]\nPotential impact: [timeline/scope/quality impact]\nSuggested next step: [action needed]\nSupport needed: [decision or resource]\n\nPlease let us know your view by [date].\n\nBest regards,\n[Your Name]",
    meeting: "Hi all,\n\nThank you for today's discussion. Please find the key points below:\n\nDecisions:\n- [decision]\n\nAction items:\n- [owner] to [action] by [date]\n\nPlease reply if anything needs to be corrected.\n\nBest regards,\n[Your Name]",
    data: "Hi [Name],\n\nCould you please share [data/document] by [date]?\n\nFor our analysis, we need the following fields:\n- [field 1]\n- [field 2]\n- [field 3]\n\nPlease also let us know the data period and any limitations.\n\nBest regards,\n[Your Name]",
  };
  document.getElementById("mailTemplate").value = templates[scenario];
}

function rowActions(store, id) {
  return `<button data-delete-store="${store}" data-delete-id="${id}">删除</button>`;
}

function openForm(type) {
  activeFormType = type;
  const config = fieldConfig[type];
  document.getElementById("dialogTitle").textContent = config.title;
  document.getElementById("formFields").innerHTML = config.fields.map(([key, label, kind, options, full]) => {
    const base = `<label for="${key}">${label}</label>`;
    let control = "";
    if (kind === "select") {
      control = `<select id="${key}" name="${key}">${options.map((o) => `<option>${o}</option>`).join("")}</select>`;
    } else if (kind === "textarea") {
      control = `<textarea id="${key}" name="${key}" required></textarea>`;
    } else {
      control = `<input id="${key}" name="${key}" type="${kind}" ${kind !== "number" ? "required" : ""} />`;
    }
    return `<div class="field ${full ? "full" : ""}">${base}${control}</div>`;
  }).join("");
  document.getElementById("recordDialog").showModal();
}

function saveRecord(event) {
  event.preventDefault();
  const config = fieldConfig[activeFormType];
  const form = document.querySelector(".record-form");
  const record = { id: crypto.randomUUID() };
  config.fields.forEach(([key, , kind]) => {
    const value = form.elements[key].value.trim();
    record[key] = kind === "number" ? Number(value || 0) : value;
  });
  state[config.store].push(record);
  document.getElementById("recordDialog").close();
  form.reset();
  renderAll();
  showToast("已保存记录");
}

function deleteRecord(store, id) {
  state[store] = state[store].filter((item) => item.id !== id);
  renderAll();
  showToast("已删除");
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `project-assistant-data-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importData(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      if (!parsed.projects || !parsed.risks || !parsed.comms || !parsed.partners) throw new Error("bad data");
      state = parsed;
      renderAll();
      showToast("导入成功");
    } catch {
      showToast("导入失败，请选择系统导出的 JSON 文件");
    }
  };
  reader.readAsText(file);
}

function switchView(viewId) {
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  document.querySelectorAll(".nav-item").forEach((btn) => btn.classList.toggle("active", btn.dataset.view === viewId));
  const title = document.querySelector(`[data-view="${viewId}"]`)?.textContent || "工作台";
  document.getElementById("viewTitle").textContent = title;
}

function text(id, value) {
  document.getElementById(id).textContent = value;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[char]);
}

function formatDate(value) {
  if (!value) return "";
  return value;
}

function copyText(value, success) {
  navigator.clipboard.writeText(value).then(() => showToast(success)).catch(() => showToast("复制失败，请手动选择文本"));
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.querySelectorAll("[data-view]").forEach((btn) => {
  btn.addEventListener("click", () => switchView(btn.dataset.view));
});

document.querySelectorAll("[data-view-jump]").forEach((btn) => {
  btn.addEventListener("click", () => switchView(btn.dataset.viewJump));
});

document.querySelectorAll("[data-open-form]").forEach((btn) => {
  btn.addEventListener("click", () => openForm(btn.dataset.openForm));
});

document.getElementById("saveRecordBtn").addEventListener("click", saveRecord);
document.getElementById("projectSearch").addEventListener("input", renderProjects);
document.getElementById("projectStatusFilter").addEventListener("change", renderProjects);
document.getElementById("mailScenario").addEventListener("change", renderMailTemplate);
document.getElementById("copyWeeklyBtn").addEventListener("click", () => copyText(document.getElementById("weeklySummary").value, "周报素材已复制"));
document.getElementById("copyMailBtn").addEventListener("click", () => copyText(document.getElementById("mailTemplate").value, "邮件模板已复制"));
document.getElementById("exportBtn").addEventListener("click", exportData);
document.getElementById("importFile").addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (file) importData(file);
  event.target.value = "";
});
document.getElementById("resetBtn").addEventListener("click", () => {
  if (!confirm("确认恢复示例数据？当前本地数据会被覆盖。")) return;
  state = structuredClone(seedData);
  renderAll();
  showToast("已恢复示例数据");
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const store = target.dataset.deleteStore;
  const id = target.dataset.deleteId;
  if (store && id && confirm("确认删除这条记录？")) deleteRecord(store, id);
});

renderAll();
