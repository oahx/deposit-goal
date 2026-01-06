// 定义所有全局变量
var PREDEFINED_HOLIDAYS = {
  holidays: {
    '2025-01-01': true, // 元旦
    '2025-01-28': true, '2025-01-29': true, '2025-01-30': true, '2025-01-31': true, '2025-02-01': true, '2025-02-02': true, '2025-02-03': true, // 春节
    '2025-04-04': true, '2025-04-05': true, '2025-04-06': true, // 清明
    '2025-05-01': true, '2025-05-02': true, '2025-05-03': true, // 劳动节
    '2025-05-31': true, '2025-06-01': true, '2025-06-02': true, // 端午
    '2025-10-01': true, '2025-10-02': true, '2025-10-03': true, '2025-10-04': true, '2025-10-05': true, '2025-10-06': true, '2025-10-07': true, // 国庆
    '2025-10-06': true, '2025-10-07': true, '2025-10-08': true, // 中秋 (与国庆重合)
    
    '2026-01-01': true, // 元旦
    '2026-02-15': true, '2026-02-16': true, '2026-02-17': true, '2026-02-18': true, '2026-02-19': true, '2026-02-20': true, '2026-02-21': true, // 春节
    '2026-04-04': true, '2026-04-05': true, '2026-04-06': true, // 清明
    '2026-05-01': true, '2026-05-02': true, '2026-05-03': true, // 劳动节
    '2026-06-19': true, '2026-06-20': true, '2026-06-21': true, // 端午
    '2026-10-01': true, '2026-10-02': true, '2026-10-03': true, '2026-10-04': true, '2026-10-05': true, '2026-10-06': true, '2026-10-07': true, // 国庆
    '2026-10-03': true, '2026-10-04': true, '2026-10-05': true, // 中秋 (与国庆重合)
    
    '2027-01-01': true, // 元旦
    '2027-02-06': true, '2027-02-07': true, '2027-02-08': true, '2027-02-09': true, '2027-02-10': true, '2027-02-11': true, '2027-02-12': true, // 春节
    '2027-04-03': true, '2027-04-04': true, '2027-04-05': true, // 清明
    '2027-05-01': true, '2027-05-02': true, '2027-05-03': true, // 劳动节
    '2027-05-28': true, '2027-05-29': true, '2027-05-30': true, // 端午
    '2027-10-01': true, '2027-10-02': true, '2027-10-03': true, '2027-10-04': true, '2027-10-05': true, '2027-10-06': true, '2027-10-07': true, // 国庆
    '2027-10-01': true, '2027-10-02': true, '2027-10-03': true, // 中秋 (与国庆重合)
    
    '2028-01-01': true, // 元旦
    '2028-01-27': true, '2028-01-28': true, '2028-01-29': true, '2028-01-30': true, '2028-01-31': true, '2028-02-01': true, '2028-02-02': true, // 春节
    '2028-04-03': true, '2028-04-04': true, '2028-04-05': true, // 清明
    '2028-05-01': true, '2028-05-02': true, '2028-05-03': true, // 劳动节
    '2028-05-27': true, '2028-05-28': true, '2028-05-29': true, // 端午
    '2028-10-01': true, '2028-10-02': true, '2028-10-03': true, '2028-10-04': true, '2028-10-05': true, '2028-10-06': true, '2028-10-07': true, // 国庆
    '2028-10-01': true, '2028-10-02': true, '2028-10-03': true, // 中秋 (与国庆重合)
    
    '2029-01-01': true, // 元旦
    '2029-02-05': true, '2029-02-06': true, '2029-02-07': true, '2029-02-08': true, '2029-02-09': true, '2029-02-10': true, '2029-02-11': true, // 春节
    '2029-04-04': true, '2029-04-05': true, '2029-04-06': true, // 清明
    '2029-05-01': true, '2029-05-02': true, '2029-05-03': true, // 劳动节
    '2029-06-15': true, '2029-06-16': true, '2029-06-17': true, // 端午
    '2029-10-01': true, '2029-10-02': true, '2029-10-03': true, '2029-10-04': true, '2029-10-05': true, '2029-10-06': true, '2029-10-07': true, // 国庆
    '2029-09-29': true, '2029-09-30': true, '2029-10-01': true, // 中秋 (与国庆重合)
    
    '2030-01-01': true, // 元旦
    '2030-01-26': true, '2030-01-27': true, '2030-01-28': true, '2030-01-29': true, '2030-01-30': true, '2030-01-31': true, '2030-02-01': true, // 春节
    '2030-04-04': true, '2030-04-05': true, '2030-04-06': true, // 清明
    '2030-05-01': true, '2030-05-02': true, '2030-05-03': true, // 劳动节
    '2030-05-31': true, '2030-06-01': true, '2030-06-02': true, // 端午
    '2030-10-01': true, '2030-10-02': true, '2030-10-03': true, '2030-10-04': true, '2030-10-05': true, '2030-10-06': true, '2030-10-07': true, // 国庆
    '2030-10-01': true, '2030-10-02': true, '2030-10-03': true, // 中秋 (与国庆重合)
  },
  workOnHoliday: {
    '2025-01-26': true, '2025-02-08': true, '2025-04-27': true, '2025-09-28': true, '2025-10-11': true,
    '2026-01-04': true, '2026-02-15': true, '2026-02-28': true, '2026-09-27': true, '2026-10-10': true,
    '2027-01-23': true, '2027-02-06': true, '2027-04-03': true, '2027-09-25': true, '2027-10-09': true,
    '2028-01-22': true, '2028-02-05': true, '2028-04-08': true, '2028-09-24': true, '2028-10-08': true,
    '2029-01-20': true, '2029-02-04': true, '2029-04-07': true, '2029-09-29': true, '2029-09-30': true,
    '2030-01-19': true, '2030-02-03': true, '2030-04-06': true, '2030-09-28': true, '2030-10-06': true
  }
};

// 存储常量
var STORAGE_KEY_RECORDS = "progress_tracker_records";
var STORAGE_KEY_SETTINGS = "progress_tracker_settings";
var STORAGE_KEY_EXPANDED = "progress_tracker_expanded_months";
var STORAGE_KEY_CUSTOM_DATES = "progress_tracker_custom_dates";

// 全局变量
var expandedMonths = {};
var selectedDateType = "work";
var customDates = {};
var HOLIDAYS = {};
var WORK_ON_HOLIDAY = {};

// 初始化函数
function init() {
  try {
    // 初始化节假日数据
    HOLIDAYS = PREDEFINED_HOLIDAYS.holidays;
    WORK_ON_HOLIDAY = PREDEFINED_HOLIDAYS.workOnHoliday;
    
    // 加载自定义日期设置
    loadCustomDates();

    var defaultStartDate = "2025-12-01";
    loadSettings(defaultStartDate);

    try {
      var savedExpanded = JSON.parse(localStorage.getItem(STORAGE_KEY_EXPANDED) || "[]");
      expandedMonths = {};
      for (var i = 0; i < savedExpanded.length; i++) {
        expandedMonths[savedExpanded[i]] = true;
      }
    } catch (e) {
      console.error("Error loading expanded months:", e);
      expandedMonths = {};
    }

    if (Object.keys(expandedMonths).length === 0) {
      var now = new Date();
      var currentYM = now.getFullYear() + "-" + (now.getMonth() < 9 ? "0" : "") + (now.getMonth() + 1);
      expandedMonths[currentYM] = true;
    }

    loadLog();
    renderMonthCalendars();
  } catch (e) {
    console.error("Error in init function:", e);
    var errorEl = document.getElementById("error");
    if (errorEl) errorEl.textContent = "页面初始化出错: " + e.message;
  }
}

// 工具函数
function formatDate(date) {
  if (!date || !(date instanceof Date)) {
    console.error("Invalid date object passed to formatDate:", date);
    return "";
  }
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return year + '-' + 
    (month < 10 ? '0' : '') + month + '-' + 
    (day < 10 ? '0' : '') + day;
}

function isWorkday(date, holidays, workOnHoliday) {
  if (!date || !(date instanceof Date)) {
    console.error("Invalid date object passed to isWorkday:", date);
    return false;
  }
  
  var dateStr = formatDate(date);
  
  // 1. 优先检查用户自定义设置
  if (customDates[dateStr]) {
    return customDates[dateStr] === "work";
  }
  
  // 2. 检查预定义的调休
  if (workOnHoliday[dateStr]) return true;
  
  // 3. 检查预定义的节假日
  if (holidays[dateStr]) return false;
  
  // 4. 检查周末
  var dayOfWeek = date.getDay();
  return dayOfWeek !== 0 && dayOfWeek !== 6; // 0=周日, 6=周六
}

function getCustomDateType(dateStr) {
  if (!dateStr) return null;
  if (customDates[dateStr]) {
    return customDates[dateStr];
  }
  return null;
}

function getDayStatus(date, holidays, workOnHoliday) {
  if (!date || !(date instanceof Date)) {
    console.error("Invalid date object passed to getDayStatus:", date);
    return "holiday";
  }
  
  var dateStr = formatDate(date);
  var customType = getCustomDateType(dateStr);
  
  if (customType === "work") return "custom-work";
  if (customType === "holiday") return "custom-holiday";
  
  if (workOnHoliday[dateStr]) return "work";
  if (holidays[dateStr]) return "holiday";
  
  var dayOfWeek = date.getDay();
  return (dayOfWeek === 0 || dayOfWeek === 6) ? "holiday" : "work";
}

function getRecords() {
  try {
    var data = localStorage.getItem(STORAGE_KEY_RECORDS);
    if (data) {
      var parsed = JSON.parse(data);
      var records = {};
      for (var i = 0; i < parsed.length; i++) {
        records[parsed[i]] = true;
      }
      return records;
    }
    return {};
  } catch (e) {
    console.error("Error loading records from localStorage:", e);
    return {};
  }
}

function saveRecords(records) {
  try {
    var arr = [];
    for (var key in records) {
      if (records[key]) {
        arr.push(key);
      }
    }
    localStorage.setItem(STORAGE_KEY_RECORDS, JSON.stringify(arr));
    loadLog();
    renderMonthCalendars();
  } catch (e) {
    console.error("Error saving records to localStorage:", e);
  }
}

function loadLog() {
  try {
    var records = getRecords();
    var logEl = document.getElementById("log");
    if (!logEl) {
      console.error("Log element not found");
      return;
    }
    
    var recordArray = [];
    for (var key in records) {
      if (records[key]) {
        recordArray.push(key);
      }
    }
    
    if (recordArray.length === 0) {
      logEl.innerHTML = "<em>暂无记录</em>";
      return;
    }
    var sorted = recordArray.sort().reverse();
    logEl.innerHTML = "最近记录：<br>" + sorted.slice(0, 12).join(", ");
  } catch (e) {
    console.error("Error loading log:", e);
  }
}

function getMonthWorkDays(year, month, holidays, workOnHoliday) {
  if (!holidays || !workOnHoliday) {
    console.error("Invalid holidays or workOnHoliday objects");
    return 0;
  }
  
  var count = 0;
  var first = new Date(year, month, 1);
  var last = new Date(year, month + 1, 0);
  for (var d = new Date(first); d <= last; d.setDate(d.getDate() + 1)) {
    if (isWorkday(new Date(d), holidays, workOnHoliday)) count++;
  }
  return count;
}

function loadCustomDates() {
  try {
    var data = localStorage.getItem(STORAGE_KEY_CUSTOM_DATES);
    if (data) {
      customDates = JSON.parse(data);
    } else {
      customDates = {};
    }
  } catch (e) {
    console.error("Error loading custom dates from localStorage:", e);
    customDates = {};
  }
}

function saveCustomDates() {
  try {
    localStorage.setItem(STORAGE_KEY_CUSTOM_DATES, JSON.stringify(customDates));
    renderMonthCalendars();
    loadCustomSettingsList();
  } catch (e) {
    console.error("Error saving custom dates to localStorage:", e);
  }
}

function loadCustomSettingsList() {
  try {
    var listEl = document.getElementById("custom-settings-list");
    if (!listEl) {
      console.error("Custom settings list element not found");
      return;
    }
    
    listEl.innerHTML = "";
    
    var dates = [];
    for (var key in customDates) {
      dates.push(key);
    }
    var sortedDates = dates.sort();
    
    if (sortedDates.length === 0) {
      listEl.innerHTML = "<div style='text-align:center;color:#777;'>暂无自定义设置</div>";
      return;
    }
    
    for (var i = 0; i < sortedDates.length; i++) {
      var dateStr = sortedDates[i];
      var type = customDates[dateStr];
      var typeText = type === "work" ? "工作日" : "休息日";
      var typeColor = type === "work" ? "#2196F3" : "#FF9800";
      
      var item = document.createElement("div");
      item.className = "setting-item";
      item.innerHTML = 
        "<span>" + dateStr + " - <span style=\"color:" + typeColor + ";font-weight:bold;\">" + typeText + "</span></span>" +
        "<span class=\"delete-setting\" onclick=\"deleteCustomSetting('" + dateStr + "')\">×</span>";
      listEl.appendChild(item);
    }
  } catch (e) {
    console.error("Error loading custom settings list:", e);
  }
}

function deleteCustomSetting(dateStr) {
  try {
    if (customDates[dateStr]) {
      delete customDates[dateStr];
      saveCustomDates();
    }
  } catch (e) {
    console.error("Error deleting custom setting:", e);
  }
}

function openCalendarSettings() {
  try {
    // 设置默认日期为今天
    var today = new Date();
    var dateInput = document.getElementById("custom-date");
    if (dateInput) {
      dateInput.valueAsDate = today;
    }
    
    // 重置选择状态
    var buttons = document.querySelectorAll('.date-type-btn');
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i]) buttons[i].classList.remove('selected');
    }
    var workBtn = document.querySelector('.date-type-btn[data-type="work"]');
    if (workBtn) workBtn.classList.add('selected');
    selectedDateType = "work";
    
    // 加载自定义设置列表
    loadCustomSettingsList();
    
    var modal = document.getElementById("calendar-settings-modal");
    if (modal) modal.style.display = "block";
  } catch (e) {
    console.error("Error opening calendar settings:", e);
  }
}

function selectDateType(type) {
  try {
    selectedDateType = type;
    var buttons = document.querySelectorAll('.date-type-btn');
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i]) buttons[i].classList.remove('selected');
    }
    var selectedBtn = document.querySelector('.date-type-btn[data-type="' + type + '"]');
    if (selectedBtn) selectedBtn.classList.add('selected');
  } catch (e) {
    console.error("Error selecting date type:", e);
  }
}

function saveCustomDateSetting() {
  try {
    var dateInput = document.getElementById("custom-date");
    if (!dateInput) {
      alert("日期输入框未找到");
      return;
    }
    
    var dateStr = dateInput.value;
    
    if (!dateStr) {
      alert("请选择日期");
      return;
    }
    
    if (selectedDateType === "remove") {
      if (customDates[dateStr]) {
        delete customDates[dateStr];
        alert("✅ 已移除 " + dateStr + " 的自定义设置");
      } else {
        alert("ℹ️ " + dateStr + " 没有自定义设置");
      }
    } else {
      customDates[dateStr] = selectedDateType;
      var typeText = selectedDateType === "work" ? "工作日" : "休息日";
      alert("✅ 已设置 " + dateStr + " 为 " + typeText);
    }
    
    saveCustomDates();
  } catch (e) {
    console.error("Error saving custom date setting:", e);
    alert("保存设置时出错，请重试");
  }
}

function saveSettings() {
  try {
    var settings = {};
    var ids = ["start-date", "monthly-value", "monthly-cost", "extra-deduction", "target-value"];
    for (var i = 0; i < ids.length; i++) {
      var element = document.getElementById(ids[i]);
      if (element) settings[ids[i]] = element.value;
    }
    localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(settings));
  } catch (e) {
    console.error("Error saving settings:", e);
  }
}

function loadSettings(defaultStartDate) {
  try {
    var settings = {};
    try {
      var stored = localStorage.getItem(STORAGE_KEY_SETTINGS);
      if (stored) {
        settings = JSON.parse(stored);
      }
    } catch (e) {
      console.error("Error parsing stored settings:", e);
      settings = {};
    }

    if (!settings["start-date"]) {
      settings["start-date"] = defaultStartDate;
    }

    var ids = ["start-date", "monthly-value", "monthly-cost", "extra-deduction", "target-value"];
    for (var i = 0; i < ids.length; i++) {
      var element = document.getElementById(ids[i]);
      if (element && settings[ids[i]] !== undefined) {
        element.value = settings[ids[i]];
      }
    }

    var inputs = document.querySelectorAll('input');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('input', function() {
        saveSettings();
      });
    }
  } catch (e) {
    console.error("Error loading settings:", e);
  }
}

function checkIn() {
  try {
    var todayStr = new Date().toISOString().split('T')[0];
    toggleCheck(todayStr, true);
  } catch (e) {
    console.error("Error in checkIn:", e);
    alert("打卡出错，请重试");
  }
}

function openSingleBackfill() {
  try {
    var now = new Date();
    var startDate = new Date(document.getElementById("start-date").value || "2025-12-01");
    var input = document.getElementById("single-date");
    if (input) {
      input.min = startDate.toISOString().split('T')[0];
      input.max = now.toISOString().split('T')[0];
      input.value = "";
    }
    var modal = document.getElementById("single-modal");
    if (modal) modal.style.display = "block";
  } catch (e) {
    console.error("Error opening single backfill:", e);
  }
}

function submitSingleBackfill() {
  try {
    var d = document.getElementById("single-date").value;
    if (!d) return alert("请选择日期");
    toggleCheck(d, true);
    closeModal("single-modal");
  } catch (e) {
    console.error("Error submitting single backfill:", e);
  }
}

function openRangeBackfill() {
  try {
    var now = new Date();
    var startDate = new Date(document.getElementById("start-date").value || "2025-12-01");
    var s = startDate.toISOString().split('T')[0];
    var t = now.toISOString().split('T')[0];
    var rs = document.getElementById("range-start");
    var re = document.getElementById("range-end");
    if (rs) {
      rs.min = re.min = s;
      rs.max = re.max = t;
      rs.value = re.value = "";
    }
    var modal = document.getElementById("range-modal");
    if (modal) modal.style.display = "block";
  } catch (e) {
    console.error("Error opening range backfill:", e);
  }
}

function submitRangeBackfill() {
  try {
    var startStr = document.getElementById("range-start").value;
    var endStr = document.getElementById("range-end").value;
    var includeAll = document.getElementById("include-weekends").checked;

    if (!startStr || !endStr) return alert("请填写完整日期范围");

    var startDate = new Date(startStr);
    var endDate = new Date(endStr);
    var now = new Date();
    var globalStart = new Date(document.getElementById("start-date").value || "2025-12-01");

    var resetTime = function(d) {
      if (d && d.setHours) {
        d.setHours(0, 0, 0, 0);
      }
      return d;
    };
    resetTime(startDate);
    resetTime(endDate);
    resetTime(now);
    resetTime(globalStart);

    if (startDate > endDate) return alert("开始不能晚于结束");
    if (startDate < globalStart || endDate > now) return alert("日期超出允许范围");

    var records = getRecords();
    var holidays = HOLIDAYS;
    var workOnHoliday = WORK_ON_HOLIDAY;

    var current = new Date(startDate);

    while (current <= endDate) {
      var dateStr = formatDate(current);
      if (includeAll || isWorkday(current, holidays, workOnHoliday)) {
        records[dateStr] = true;
      }
      current.setDate(current.getDate() + 1);
    }

    var startYM = startStr.substring(0, 7);
    var endYM = endStr.substring(0, 7);
    expandedMonths[startYM] = true;
    expandedMonths[endYM] = true;

    saveRecords(records);
    alert("✅ 批量补卡完成！");
    closeModal("range-modal");
  } catch (e) {
    console.error("Error submitting range backfill:", e);
    alert("批量补卡出错，请重试");
  }
}

function closeModal(id) {
  try {
    var modal = document.getElementById(id);
    if (modal) modal.style.display = "none";
  } catch (e) {
    console.error("Error closing modal:", e);
  }
}

function calculate() {
  try {
    var startDateStr = document.getElementById("start-date").value;
    var monthlyValueStr = document.getElementById("monthly-value").value;
    var monthlyCostStr = document.getElementById("monthly-cost").value || "0";
    var extraDeductionStr = document.getElementById("extra-deduction").value || "0";
    var targetStr = document.getElementById("target-value").value || "0";
    var errorEl = document.getElementById("error");
    var resultEl = document.getElementById("result");
    var forecastEl = document.getElementById("res-forecast");

    if (!errorEl || !resultEl || !forecastEl) {
      console.error("Required elements not found");
      return;
    }

    errorEl.textContent = "";
    resultEl.classList.remove("show");
    forecastEl.textContent = "";

    if (!startDateStr) return showError("❌ 请选择起始日期。");
    if (!monthlyValueStr || parseFloat(monthlyValueStr) <= 0) return showError("❌ 月度基准值需 >0。");

    var startDate = new Date(startDateStr);
    var now = new Date();
    if (startDate.toString() === "Invalid Date" || now.toString() === "Invalid Date") {
      return showError("❌ 日期格式错误");
    }
    
    startDate.setHours(0,0,0,0);
    now.setHours(0,0,0,0);
    if (startDate > now) return showError("❌ 起始日期不能晚于今天。");

    var records = getRecords();
    var holidays = HOLIDAYS;
    var workOnHoliday = WORK_ON_HOLIDAY;

    var validRecords = [];
    for (var key in records) {
      if (records[key]) {
        var date = new Date(key);
        if (date.toString() !== "Invalid Date") {
          date.setHours(0,0,0,0);
          if (date >= startDate && date <= now && isWorkday(date, holidays, workOnHoliday)) {
            validRecords.push(key);
          }
        }
      }
    }

    var checkedInDays = validRecords.length;

    var totalGross = 0;
    var monthlyMap = {};
    for (var i = 0; i < validRecords.length; i++) {
      var dateStr = validRecords[i];
      var y = parseInt(dateStr.substring(0,4));
      var m = parseInt(dateStr.substring(5,7)) - 1;
      var key = y + "-" + (m < 9 ? "0" : "") + (m + 1);
      if (!monthlyMap[key]) monthlyMap[key] = { year: y, month: m, days: [] };
      monthlyMap[key].days.push(dateStr);
    }

    for (var key in monthlyMap) {
      var entry = monthlyMap[key];
      var year = entry.year;
      var month = entry.month;
      var days = entry.days;
      var workdaysInMonth = getMonthWorkDays(year, month, holidays, workOnHoliday);
      if (workdaysInMonth === 0) continue;
      var dailyRate = parseFloat(monthlyValueStr) / workdaysInMonth;
      totalGross += dailyRate * days.length;
    }

    // 修复：正确计算历史月份的基础消耗
    var totalCost = 0;
    var monthlyCost = parseFloat(monthlyCostStr) || 0;
    var startYear = startDate.getFullYear();
    var startMonth = startDate.getMonth();
    var currentYear = now.getFullYear();
    var currentMonth = now.getMonth();

    for (var y = startYear; y <= currentYear; y++) {
      var startM = (y === startYear) ? startMonth : 0;
      var endM = (y === currentYear) ? currentMonth : 11;
      
      for (var m = startM; m <= endM; m++) {
        // 跳过起始日期前的月份
        if (y === startYear && m < startMonth) continue;
        
        var workdaysInMonth = getMonthWorkDays(y, m, holidays, workOnHoliday);
        if (workdaysInMonth === 0) continue;
        
        // 计算当月打卡天数
        var monthKey = y + "-" + (m < 9 ? "0" : "") + (m + 1);
        var daysInMonth = monthlyMap[monthKey] ? monthlyMap[monthKey].days.length : 0;
        
        // 按打卡比例计算当月成本
        var monthCost = monthlyCost * (daysInMonth / workdaysInMonth);
        totalCost += monthCost;
      }
    }

    var extraDeduction = parseFloat(extraDeductionStr) || 0;
    var net = totalGross - totalCost + extraDeduction;

    var resPeriod = document.getElementById("res-period");
    var resDays = document.getElementById("res-days");
    var resGross = document.getElementById("res-gross");
    var resNet = document.getElementById("res-net");
    
    if (resPeriod) resPeriod.textContent = formatDate(startDate) + " 至 " + formatDate(now);
    if (resDays) resDays.textContent = checkedInDays;
    if (resGross) resGross.textContent = totalGross.toFixed(2);
    if (resNet) resNet.textContent = net.toFixed(2);
    resultEl.classList.add("show");

    var target = parseFloat(targetStr) || Infinity;
    if (target === Infinity || net >= target) {
      forecastEl.innerHTML = net >= target ?
        "<strong>🎯 目标已完成！</strong>" :
        "<em>未设置累计目标值</em>";
      return;
    }

    var avgDailyNet = checkedInDays > 0 ? net / checkedInDays : 0;
    if (avgDailyNet <= 0) {
      forecastEl.innerHTML = "<strong>⚠️ 日均净值 ≤ 0，无法达成目标</strong>";
      return;
    }

    var remaining = target - net;
    var workdaysNeeded = Math.ceil(remaining / avgDailyNet);

    var futureDate = new Date(now);
    var count = 0;
    while (count < workdaysNeeded) {
      futureDate.setDate(futureDate.getDate() + 1);
      if (isWorkday(futureDate, holidays, workOnHoliday)) count++;
    }

    var formattedFutureDate = formatDate(futureDate);
    forecastEl.innerHTML = 
      "<strong>🎯 累计目标：</strong>" + target.toFixed(2) + "<br>" +
      "<strong>⏳ 预计还需：</strong>" + workdaysNeeded + " 个工作日<br>" +
      "<strong>📅 预计完成：</strong>" + formattedFutureDate;
  } catch (e) {
    console.error("Error in calculate:", e);
    showError("❌ 计算出错: " + e.message);
  }
}

function showError(msg) {
  try {
    var errorEl = document.getElementById("error");
    if (errorEl) errorEl.textContent = msg;
  } catch (e) {
    console.error("Error showing error message:", e);
  }
}

function renderMonthCalendars() {
  try {
    var records = getRecords();
    var holidays = HOLIDAYS;
    var workOnHoliday = WORK_ON_HOLIDAY;

    var now = new Date();
    var currentYM = now.getFullYear() + "-" + (now.getMonth() < 9 ? "0" : "") + (now.getMonth() + 1);

    var monthMap = {};
    for (var key in records) {
      if (records[key]) {
        var ym = key.substring(0, 7);
        if (!monthMap[ym]) monthMap[ym] = {};
        monthMap[ym][key] = true;
      }
    }
    
    var allMonths = {};
    for (var key in monthMap) {
      allMonths[key] = true;
    }
    allMonths[currentYM] = true;
    
    var sortedMonths = [];
    for (var key in allMonths) {
      sortedMonths.push(key);
    }
    sortedMonths.sort().reverse();

    var html = '';
    for (var i = 0; i < sortedMonths.length; i++) {
      var ym = sortedMonths[i];
      var parts = ym.split('-');
      var year = parseInt(parts[0]);
      var month = parseInt(parts[1]);
      var isExpanded = !!expandedMonths[ym];
      var icon = isExpanded ? '▲' : '▼';
      
      html += '<div class="month-section" data-ym="' + ym + '">';
      html += '<div class="month-header" onclick="toggleMonth(\'' + ym + '\')">' +
                 year + '年' + month + '月 <span style="font-size:14px;opacity:0.7;">' + icon + '</span>' +
               '</div>';
      
      if (isExpanded) {
        html += renderCalendarForMonth(year, month, records, holidays, workOnHoliday);
      }
      
      html += '</div>';
    }

    var calendarsEl = document.getElementById("month-calendars");
    if (calendarsEl) calendarsEl.innerHTML = html;
    
    var expandedArray = [];
    for (var key in expandedMonths) {
      expandedArray.push(key);
    }
    localStorage.setItem(STORAGE_KEY_EXPANDED, JSON.stringify(expandedArray));
  } catch (e) {
    console.error("Error rendering month calendars:", e);
  }
}

function renderCalendarForMonth(year, month, records, holidays, workOnHoliday) {
  try {
    var firstDay = new Date(year, month - 1, 1);
    var lastDay = new Date(year, month, 0);
    var daysInMonth = lastDay.getDate();
    var html = '<div class="calendar-grid">';

    var dayLabels = ['日', '一', '二', '三', '四', '五', '六'];
    for (var i = 0; i < dayLabels.length; i++) {
      html += '<div class="calendar-day-label">' + dayLabels[i] + '</div>';
    }

    var startWeekday = firstDay.getDay();
    for (var i = 0; i < startWeekday; i++) {
      html += '<div class="calendar-day-cell day-holiday"></div>';
    }

    for (var day = 1; day <= daysInMonth; day++) {
      var date = new Date(year, month - 1, day);
      var dateStr = formatDate(date);
      var dayStatus = getDayStatus(date, holidays, workOnHoliday);
      var customType = getCustomDateType(dateStr);
      
      var cls = '';
      var clickAction = '';
      
      if (customType === "work") {
        if (records[dateStr]) {
          cls = 'day-checked';
        } else {
          cls = 'day-custom-work';
        }
        var title = records[dateStr] ? '点击取消打卡' : '点击打卡';
        clickAction = 'onclick="toggleCheck(\'' + dateStr + '\', true)" title="' + title + ' (自定义工作日)"';
      } 
      else if (customType === "holiday") {
        cls = 'day-custom-holiday';
        clickAction = '';
      } 
      else if (dayStatus === "work") {
        if (records[dateStr]) {
          cls = 'day-checked';
        } else {
          cls = 'day-workday';
        }
        var title = records[dateStr] ? '点击取消打卡' : '点击打卡';
        clickAction = 'onclick="toggleCheck(\'' + dateStr + '\', true)" title="' + title + '"';
      } 
      else { // holiday
        cls = 'day-holiday';
        clickAction = '';
      }

      html += '<div class="calendar-day-cell ' + cls + '" ' + clickAction + '>' + day + '</div>';
    }

    html += '</div>';
    return html;
  } catch (e) {
    console.error("Error rendering calendar for month:", e);
    return '<div class="calendar-grid">渲染日历出错</div>';
  }
}

function toggleMonth(ym) {
  try {
    if (expandedMonths[ym]) {
      delete expandedMonths[ym];
    } else {
      expandedMonths[ym] = true;
    }
    renderMonthCalendars();
  } catch (e) {
    console.error("Error toggling month:", e);
  }
}

function toggleCheck(dateStr, showAlert) {
  if (showAlert === undefined) showAlert = false;
  
  try {
    var records = getRecords();
    var holidays = HOLIDAYS;
    var workOnHoliday = WORK_ON_HOLIDAY;

    var now = new Date();
    var globalStart = new Date(document.getElementById("start-date").value || "2025-12-01");
    var inputDate = new Date(dateStr);
    if (inputDate.toString() === "Invalid Date") {
      if (showAlert) alert("无效的日期格式");
      return;
    }
    
    inputDate.setHours(0,0,0,0);
    now.setHours(0,0,0,0);
    globalStart.setHours(0,0,0,0);

    if (inputDate < globalStart || inputDate > now) {
      if (showAlert) alert("⚠️ " + dateStr + " 超出允许范围（" + formatDate(globalStart) + " 至 " + formatDate(now) + "）");
      return;
    }

    if (!isWorkday(inputDate, holidays, workOnHoliday)) {
      var customType = getCustomDateType(dateStr);
      if (customType === "holiday") {
        if (showAlert) alert("⚠️ " + dateStr + " 被设置为休息日，不可打卡");
      } else {
        if (showAlert) alert("⚠️ " + dateStr + " 是节假日或周末，不可打卡");
      }
      return;
    }

    if (records[dateStr]) {
      delete records[dateStr];
      if (showAlert) alert("❌ 已取消打卡：" + dateStr);
    } else {
      records[dateStr] = true;
      if (showAlert) alert("✅ 打卡成功：" + dateStr);
    }
    saveRecords(records);
  } catch (e) {
    console.error("Error toggling check:", e);
    if (showAlert) alert("打卡操作出错，请重试");
  }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  try {
    // 添加事件监听器
    document.getElementById("calendar-settings-btn").addEventListener("click", openCalendarSettings);
    document.getElementById("checkin-btn").addEventListener("click", checkIn);
    document.getElementById("backfill-single-btn").addEventListener("click", openSingleBackfill);
    document.getElementById("backfill-range-btn").addEventListener("click", openRangeBackfill);
    document.getElementById("calc-btn").addEventListener("click", calculate);
    
    // 为模态窗口的关闭按钮添加事件
    document.querySelectorAll('.close-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var modal = this.closest('.modal');
        if (modal) modal.style.display = "none";
      });
    });
    
    // 为日期类型按钮添加事件
    document.querySelectorAll('.date-type-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        selectDateType(this.getAttribute('data-type'));
      });
    });
    
    // 为保存设置按钮添加事件
    document.getElementById("save-custom-setting").addEventListener("click", saveCustomDateSetting);
    
    // 为单日补卡按钮添加事件
    document.getElementById("cancel-single").addEventListener("click", function() { closeModal('single-modal'); });
    document.getElementById("confirm-single").addEventListener("click", submitSingleBackfill);
    
    // 为批量补卡按钮添加事件
    document.getElementById("cancel-range").addEventListener("click", function() { closeModal('range-modal'); });
    document.getElementById("confirm-range").addEventListener("click", submitRangeBackfill);
    
    // 初始化应用
    init();
  } catch (e) {
    console.error("Fatal error during initialization:", e);
    var errorEl = document.getElementById("error");
    if (errorEl) errorEl.textContent = "页面初始化失败，请刷新重试";
  }
});