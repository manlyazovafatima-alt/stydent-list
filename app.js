(() => {
  "use strict";

  const config = window.APP_CONFIG || {};
  const hasCloudConfig = Boolean(
    config.supabaseUrl &&
    config.supabasePublishableKey &&
    config.adminEmail &&
    !String(config.supabaseUrl).includes("YOUR_PROJECT_ID") &&
    !String(config.supabasePublishableKey).includes("YOUR_SUPABASE") &&
    !String(config.adminEmail).includes("YOUR_LOGIN_EMAIL")
  );
  const demoMode = config.demoMode === true;
  const DEMO_STORAGE_KEY = "group-space-demo-students-v1";
  

const DEMO_STUDENTS = [
  { id: "TEST-001", position_no: 1, full_name: "Абдылдаев Урмат Шамильевич", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-002", position_no: 2, full_name: "Абдукаримов Бекболот Рахматиллаевич", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-003", position_no: 3, full_name: "Амирбеков Адилет Махмадулоевич", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-004", position_no: 4, full_name: "Баженова Александра Витальевна", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-005", position_no: 5, full_name: "Бауэр Лилия Сергеевна", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-006", position_no: 6, full_name: "Бегалиев Байел Тариелович", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-007", position_no: 7, full_name: "Беков Бек Махмутжанович", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-008", position_no: 8, full_name: "Даузов Фархат Керимжанович", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-009", position_no: 9, full_name: "Доктурбекова Анар Альбертовна", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-010", position_no: 10, full_name: "Жусупбеков Эльдияр Жылдызбекович", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-011", position_no: 11, full_name: "Жыргалбекова Асема Жыргалбековна", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-012", position_no: 12, full_name: "Ибраимова Керемет Айбековна", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-013", position_no: 13, full_name: "Карыбеков Бексултан Мелисович", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-014", position_no: 14, full_name: "Казыкеев Нурзамат Нуржалилович", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-015", position_no: 15, full_name: "Маматазимов Темирбек Бакытович", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-016", position_no: 16, full_name: "Манлязова Фатима Исмаровна", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-017", position_no: 17, full_name: "Машанло Нурали Маликович", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-018", position_no: 18, full_name: "Музрабов Мирзабахром Адхамбек Угли", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-019", position_no: 19, full_name: "Мухтаров Билал Мухтарович", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-020", position_no: 20, full_name: "Мырзабеков Ынтымак Дүрбөлөңович", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-021", position_no: 21, full_name: "Мырзабекова Айнагул Дүрбөлөңовна", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-022", position_no: 22, full_name: "Рабиева Халича Рахматшоевна", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-023", position_no: 23, full_name: "Раимкулов Аймир", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-024", position_no: 24, full_name: "Рашынбеков Ислам Алтынбекович", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-025", position_no: 25, full_name: "Сагындыков Байел Жакшылыкович", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-026", position_no: 26, full_name: "Сатыбалдиев Марсель Фархадович", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-027", position_no: 27, full_name: "Сатыбалдиев Нурислам Фархадович", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-028", position_no: 28, full_name: "Токтогулов Бектур Мирланович", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-029", position_no: 29, full_name: "Тургуналиева Назира Сиязбековна", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-030", position_no: 30, full_name: "Чупахина Зарина Владимировна", birthYear: "", phone: "", address: "", email: "", notes: "" },
  { id: "TEST-031", position_no: 31, full_name: "Шахан Амирбек Халитович", birthYear: "", phone: "", address: "", email: "", notes: "" }
];

  const $ = (selector) => document.querySelector(selector);
  const authScreen = $("#authScreen");
  const appScreen = $("#appScreen");
  const authForm = $("#authForm");
  const authMessage = $("#authMessage");
  const setupNotice = $("#setupNotice");
  const loginButton = $("#loginButton");
  const appMessage = $("#appMessage");
  const studentList = $("#studentList");
  const listSection = $("#listSection");
  const listHeading = $("#listHeading");
  const emptyState = $("#emptyState");
  const searchInput = $("#searchInput");
  const importPanel = $("#importPanel");
  const bulkNames = $("#bulkNames");
  const importPreview = $("#importPreview");
  const editorBackdrop = $("#editorBackdrop");
  const studentForm = $("#studentForm");
  const editorTitle = $("#editorTitle");
  const editorMessage = $("#editorMessage");
  const saveStudentButton = $("#saveStudentButton");
  const toast = $("#toast");

  const state = {
    students: [],
    client: null,
    user: null,
    showList: false,
    editingId: null,
    isBusy: false,
    cloudReady: false,
    channel: null,
    toastTimer: null
  };

  function setHidden(element, hidden) {
    element.hidden = hidden;
  }

  function setAuthMessage(message, type = "") {
    authMessage.textContent = message;
    authMessage.className = `form-message ${type}`.trim();
  }

  function setAppMessage(message, type = "") {
    appMessage.textContent = message;
    appMessage.className = `app-message ${type}`.trim();
  }

  function showToast(message, type = "success") {
    toast.textContent = message;
    toast.className = `toast is-visible ${type}`;
    window.clearTimeout(state.toastTimer);
    state.toastTimer = window.setTimeout(() => {
      toast.className = "toast";
    }, 3200);
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  function normalize(value) {
    return String(value ?? "").toLocaleLowerCase("ru-RU").trim();
  }

  function sortStudents(students) {
    return [...students].sort((first, second) => {
      const positionDifference = Number(first.position_no || 0) - Number(second.position_no || 0);
      if (positionDifference !== 0) return positionDifference;
      return Number(first.id || 0) - Number(second.id || 0);
    });
  }

  function getSearchResults() {
    const query = normalize(searchInput.value);
    const ordered = sortStudents(state.students);
    if (!query) return ordered;
    return ordered.filter((student) => {
      const searchText = normalize([
        student.full_name,
        student.phone,
        student.address,
        student.email,
        student.notes
      ].join(" "));
      return searchText.includes(query);
    });
  }

  function renderStudents() {
    const query = searchInput.value.trim();
    const results = getSearchResults();
    const shouldShow = state.showList || query.length > 0;
    setHidden(listSection, !shouldShow);
    listHeading.textContent = query ? "Результаты поиска" : "Все учащиеся";
    $("#totalCount").textContent = String(state.students.length);
    $("#foundCount").textContent = String(results.length);
    $("#listSummary").textContent = query
      ? `Найдено: ${results.length} из ${state.students.length}`
      : `Всего записей: ${state.students.length}`;
    $("#toggleListButton").innerHTML = state.showList
      ? '<span class="button-icon">☷</span> Скрыть список'
      : '<span class="button-icon">☷</span> Список группы';

    if (!shouldShow) return;

    if (results.length === 0) {
      studentList.replaceChildren();
      setHidden(emptyState, false);
      return;
    }

    setHidden(emptyState, true);
    studentList.innerHTML = results.map((student) => {
      const id = escapeHtml(student.id);
      const name = escapeHtml(student.full_name || "ФИО не указано");
      const position = escapeHtml(student.position_no ?? "—");
      const hasDetails = Boolean(student.phone || student.address || student.email || student.notes);
      const safePhone = escapeHtml(student.phone || "Не указано");
      const safeAddress = escapeHtml(student.address || "Не указано");
      const safeEmail = escapeHtml(student.email || "Не указано");
      const safeNotes = escapeHtml(student.notes || "Не указано");
      return `
        <article class="student-row" data-student-row="${id}">
          <div class="student-index">${position}</div>
          <div class="student-avatar" aria-hidden="true">${escapeHtml(getInitials(student.full_name))}</div>
          <div class="student-main"><h4>${name}</h4><p>${hasDetails ? "Карточка учащегося" : "Дополнительные сведения не заполнены"}</p></div>
          <div class="student-actions">
            <button class="button button-quiet button-small details-button" type="button" data-id="${id}" aria-expanded="false">Данные <span aria-hidden="true">⌄</span></button>
            <button class="button button-secondary button-small edit-button" type="button" data-id="${id}">Изменить</button>
          </div>
          <div class="student-details" id="details-${id}" hidden>
            <div class="detail-cell"><span>Телефон</span><strong>${safePhone}</strong></div>
            <div class="detail-cell"><span>Адрес</span><strong>${safeAddress}</strong></div>
            <div class="detail-cell"><span>Электронная почта</span><strong>${safeEmail}</strong></div>
            <div class="detail-cell detail-cell-wide"><span>Дополнительные сведения</span><strong>${safeNotes}</strong></div>
          </div>
        </article>`;
    }).join("");
  }

  function getInitials(name) {
    const words = String(name || "").trim().split(/\s+/).filter(Boolean);
    return words.slice(0, 2).map((word) => Array.from(word)[0] || "").join("").toLocaleUpperCase("ru-RU") || "У";
  }

  function setBusy(isBusy) {
    state.isBusy = isBusy;
    saveStudentButton.disabled = isBusy;
    $("#importButton").disabled = isBusy;
    $("#addStudentButton").disabled = isBusy;
    $("#refreshButton").disabled = isBusy;
    loginButton.disabled = isBusy;
    loginButton.innerHTML = isBusy ? 'Подожди…' : 'Войти <span aria-hidden="true">↗</span>';
  }

  function getDemoStudents() {
    try {
      const saved = localStorage.getItem(DEMO_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (error) {
      console.warn("Демо-данные не удалось прочитать из localStorage:", error);
    }
    return [...DEMO_STUDENTS];
  }

  function saveDemoStudents() {
    localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(state.students));
  }

  function showApplication(user, isDemo) {
    state.user = user || null;
    state.cloudReady = !isDemo;
    setHidden(authScreen, true);
    setHidden(appScreen, false);
    $("#currentUser").textContent = isDemo ? "Демонстрация" : (user?.email || "Участник группы");
    $("#modeText").textContent = isDemo ? "Демо-режим" : "Онлайн-база";
    $("#modeBadge").classList.toggle("mode-demo", isDemo);
    $("#logoutButton").textContent = isDemo ? "Сбросить демо" : "Выйти";
    $("#dataState").textContent = isDemo ? "Демо" : "Онлайн";
    if (isDemo) {
      state.students = getDemoStudents();
      renderStudents();
      setAppMessage("Демонстрационный режим: изменения сохраняются только в этом браузере и не синхронизируются между устройствами.", "info");
    } else {
      setAppMessage("");
      loadCloudStudents();
      subscribeToChanges();
    }
  }

  function showLogin() {
    state.user = null;
    state.cloudReady = false;
    setHidden(appScreen, true);
    setHidden(authScreen, false);
    if (state.channel && state.client) {
      state.client.removeChannel(state.channel);
      state.channel = null;
    }
  }

  async function loadCloudStudents({ silent = false } = {}) {
    if (!state.client || !state.cloudReady) return;
    if (!silent) setBusy(true);
    try {
      const { data, error } = await state.client
        .from("students")
        .select("id, position_no, full_name, phone, address, email, notes, created_at, updated_at")
        .order("position_no", { ascending: true })
        .order("id", { ascending: true });
      if (error) throw error;
      state.students = data || [];
      renderStudents();
      if (!silent) setAppMessage("Данные успешно загружены из общей базы.", "success");
    } catch (error) {
      console.error("Не удалось загрузить список:", error);
      setAppMessage("Не удалось загрузить список. Проверь SQL-настройку Supabase и разрешения RLS.", "error");
    } finally {
      if (!silent) setBusy(false);
    }
  }

  function subscribeToChanges() {
    if (!state.client || state.channel) return;
    state.channel = state.client
      .channel("group-space-students-live")
      .on("postgres_changes", { event: "*", schema: "public", table: "students" }, () => {
        loadCloudStudents({ silent: true });
      })
      .subscribe((status) => {
        if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
          console.warn("Realtime недоступен. Обновление по кнопке всё ещё работает.");
        }
      });
  }

  function openEditor(student = null) {
    state.editingId = student ? student.id : null;
    editorTitle.textContent = student ? "Редактировать запись" : "Добавить учащегося";
    $("#editorIntro").textContent = student
      ? "Измени нужные поля и сохрани обновлённую запись."
      : "Заполни ФИО и только те дополнительные поля, которые действительно нужны.";
    $("#studentId").value = student?.id ?? "";
    $("#studentName").value = student?.full_name ?? "";
    $("#studentPosition").value = student?.position_no ?? String(getNextPosition());
    $("#studentPhone").value = student?.phone ?? "";
    $("#studentAddress").value = student?.address ?? "";
    $("#studentEmail").value = student?.email ?? "";
    $("#studentNotes").value = student?.notes ?? "";
    editorMessage.textContent = "";
    setHidden(editorBackdrop, false);
    document.body.classList.add("modal-open");
    window.setTimeout(() => $("#studentName").focus(), 30);
  }

  function closeEditor() {
    setHidden(editorBackdrop, true);
    document.body.classList.remove("modal-open");
    studentForm.reset();
    state.editingId = null;
  }

  function collectStudentForm() {
    const name = $("#studentName").value.trim().replace(/\s+/g, " ");
    const position = Number.parseInt($("#studentPosition").value, 10);
    if (!name) throw new Error("Укажи ФИО учащегося.");
    if (!Number.isInteger(position) || position < 1 || position > 9999) {
      throw new Error("Номер в списке должен быть целым числом от 1 до 9999.");
    }
    return {
      position_no: position,
      full_name: name,
      phone: $("#studentPhone").value.trim(),
      address: $("#studentAddress").value.trim(),
      email: $("#studentEmail").value.trim(),
      notes: $("#studentNotes").value.trim()
    };
  }

  async function saveStudent(event) {
    event.preventDefault();
    if (state.isBusy) return;
    let payload;
    try {
      payload = collectStudentForm();
    } catch (error) {
      editorMessage.textContent = error.message;
      editorMessage.className = "form-message error";
      return;
    }

    setBusy(true);
    editorMessage.textContent = "Сохраняю…";
    editorMessage.className = "form-message";
    try {
      if (demoMode || !state.client) {
        if (state.editingId !== null) {
          state.students = state.students.map((student) => String(student.id) === String(state.editingId)
            ? { ...student, ...payload }
            : student);
        } else {
          state.students.push({ ...payload, id: `demo-${Date.now()}-${Math.random().toString(36).slice(2, 7)}` });
        }
        state.students = sortStudents(state.students);
        saveDemoStudents();
      } else if (state.editingId !== null) {
        const { error } = await state.client.from("students").update(payload).eq("id", state.editingId);
        if (error) throw error;
        await loadCloudStudents({ silent: true });
      } else {
        const { error } = await state.client.from("students").insert(payload);
        if (error) throw error;
        await loadCloudStudents({ silent: true });
      }
      const wasEdit = state.editingId !== null;
      closeEditor();
      renderStudents();
      showToast(wasEdit ? "Запись обновлена" : "Учащийся добавлен");
      setAppMessage(wasEdit ? "Изменения сохранены." : "Новая запись сохранена.", "success");
    } catch (error) {
      console.error("Не удалось сохранить запись:", error);
      editorMessage.textContent = "Не удалось сохранить. Проверь подключение и разрешения базы данных.";
      editorMessage.className = "form-message error";
    } finally {
      setBusy(false);
    }
  }

  function parseImportLines(value) {
    const rawLines = value.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
    const parsed = [];
    let implicitPosition = getNextPosition();
    rawLines.forEach((line) => {
      // Поддерживает, например: "5 | Фамилия Имя Отчество" и пустое место "4 |".
      const numbered = line.match(/^\s*(\d+)\s*(?:\||[.)])\s*(.*?)\s*$/);
      if (numbered) {
        const position = Number.parseInt(numbered[1], 10);
        const name = numbered[2].trim();
        if (name) parsed.push({ position_no: position, full_name: name });
        return;
      }
      // Если номера нет, строка считается ФИО и получает следующий доступный номер.
      parsed.push({ position_no: implicitPosition, full_name: line });
      implicitPosition += 1;
    });
    return parsed.filter((item) => item.full_name && item.full_name !== "-" && item.full_name !== "—");
  }

  function getNextPosition() {
    return state.students.reduce((maximum, student) => Math.max(maximum, Number(student.position_no) || 0), 0) + 1;
  }

  function updateImportPreview() {
    const records = parseImportLines(bulkNames.value);
    importPreview.textContent = records.length
      ? `Готово к добавлению: ${records.length} ${declineRussian(records.length, "запись", "записи", "записей")}`
      : "Вставь имена: одна запись на строку";
  }

  function declineRussian(number, one, few, many) {
    const lastTwo = number % 100;
    const last = number % 10;
    if (lastTwo >= 11 && lastTwo <= 14) return many;
    if (last === 1) return one;
    if (last >= 2 && last <= 4) return few;
    return many;
  }

  async function importStudents() {
    if (state.isBusy) return;
    const records = parseImportLines(bulkNames.value);
    if (records.length === 0) {
      showToast("Вставь хотя бы одно имя", "error");
      return;
    }

    const existingNames = new Set(state.students.map((student) => normalize(student.full_name)));
    const seenInImport = new Set();
    const uniqueRecords = records.filter((record) => {
      const key = normalize(record.full_name);
      if (existingNames.has(key) || seenInImport.has(key)) return false;
      seenInImport.add(key);
      return true;
    });
    if (uniqueRecords.length === 0) {
      showToast("Такие записи уже есть в списке", "error");
      return;
    }
    if (uniqueRecords.length < records.length) {
      const duplicates = records.length - uniqueRecords.length;
      const accepted = window.confirm(`Пропустить ${duplicates} повтор${duplicates === 1 ? "яющуюся запись" : "яющихся записи"} и добавить ${uniqueRecords.length} новых?`);
      if (!accepted) return;
    }

    setBusy(true);
    try {
      const toInsert = uniqueRecords.map((record) => ({
        position_no: record.position_no,
        full_name: record.full_name,
        phone: "",
        address: "",
        email: "",
        notes: ""
      }));
      if (demoMode || !state.client) {
        const maxId = Date.now();
        toInsert.forEach((record, index) => state.students.push({ ...record, id: `demo-${maxId}-${index}` }));
        state.students = sortStudents(state.students);
        saveDemoStudents();
      } else {
        const { error } = await state.client.from("students").insert(toInsert);
        if (error) throw error;
        await loadCloudStudents({ silent: true });
      }
      bulkNames.value = "";
      updateImportPreview();
      setHidden(importPanel, true);
      state.showList = true;
      searchInput.value = "";
      renderStudents();
      showToast(`Добавлено записей: ${uniqueRecords.length}`);
      setAppMessage(`Импорт завершён. Добавлено записей: ${uniqueRecords.length}.`, "success");
    } catch (error) {
      console.error("Не удалось импортировать список:", error);
      showToast("Импорт не выполнен. Проверь подключение и доступ к базе.", "error");
    } finally {
      setBusy(false);
    }
  }

  async function login(event) {
    event.preventDefault();
    if (!state.client || !hasCloudConfig) {
      setAuthMessage("Сначала укажи настройки Supabase в config.js и установи demoMode: false.", "error");
      return;
    }
    setBusy(true);
    setAuthMessage("Проверяю данные…");
    try {
      const email = $("#loginEmail").value.trim().toLocaleLowerCase("en-US");
      const password = $("#loginPassword").value;
      if (email !== String(config.adminEmail).trim().toLocaleLowerCase("en-US")) {
        throw new Error("Этот email не разрешён для доступа к списку группы.");
      }
      const { data, error } = await state.client.auth.signInWithPassword({ email, password });
      if (error) throw error;
      if (!data.user || String(data.user.email).toLocaleLowerCase("en-US") !== String(config.adminEmail).toLocaleLowerCase("en-US")) {
        await state.client.auth.signOut();
        throw new Error("У этой учётной записи нет доступа к списку.");
      }
      setAuthMessage("");
      showApplication(data.user, false);
    } catch (error) {
      setAuthMessage(error.message || "Не удалось войти. Проверь email и пароль.", "error");
    } finally {
      setBusy(false);
    }
  }

  async function logout() {
    if (demoMode) {
      const resetDemo = window.confirm("Сбросить демонстрационные изменения и вернуть тестовые записи?");
      if (!resetDemo) return;
      localStorage.removeItem(DEMO_STORAGE_KEY);
      state.students = getDemoStudents();
      searchInput.value = "";
      state.showList = false;
      renderStudents();
      showToast("Демо-данные сброшены");
      return;
    }
    if (state.client) {
      await state.client.auth.signOut();
    }
    if (state.channel && state.client) {
      await state.client.removeChannel(state.channel);
      state.channel = null;
    }
    showLogin();
    authForm.reset();
    setAuthMessage("Ты вышла из системы.", "success");
  }

  function bindEvents() {
    authForm.addEventListener("submit", login);
    $("#toggleListButton").addEventListener("click", () => {
      state.showList = !state.showList;
      renderStudents();
      if (state.showList && !searchInput.value.trim()) listSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    $("#addStudentButton").addEventListener("click", () => openEditor());
    $("#logoutButton").addEventListener("click", logout);
    $("#closeEditorButton").addEventListener("click", closeEditor);
    $("#cancelEditorButton").addEventListener("click", closeEditor);
    editorBackdrop.addEventListener("click", (event) => {
      if (event.target === editorBackdrop) closeEditor();
    });
    studentForm.addEventListener("submit", saveStudent);
    $("#openImportButton").addEventListener("click", () => {
      setHidden(importPanel, false);
      importPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
      bulkNames.focus();
    });
    $("#closeImportButton").addEventListener("click", () => setHidden(importPanel, true));
    bulkNames.addEventListener("input", updateImportPreview);
    $("#importButton").addEventListener("click", importStudents);
    $("#refreshButton").addEventListener("click", () => loadCloudStudents());
    searchInput.addEventListener("input", renderStudents);
    studentList.addEventListener("click", (event) => {
      const detailsButton = event.target.closest(".details-button");
      if (detailsButton) {
        const details = document.getElementById(`details-${detailsButton.dataset.id}`);
        const opening = details.hidden;
        setHidden(details, !opening);
        detailsButton.setAttribute("aria-expanded", String(opening));
        detailsButton.innerHTML = opening ? 'Скрыть <span aria-hidden="true">⌃</span>' : 'Данные <span aria-hidden="true">⌄</span>';
        return;
      }
      const editButton = event.target.closest(".edit-button");
      if (editButton) {
        const student = state.students.find((item) => String(item.id) === String(editButton.dataset.id));
        if (student) openEditor(student);
      }
    });
    document.addEventListener("keydown", (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchInput.focus();
      }
      if (event.key === "Escape" && !editorBackdrop.hidden) closeEditor();
    });
    window.addEventListener("focus", () => {
      if (state.cloudReady) loadCloudStudents({ silent: true });
    });
  }

  async function initialize() {
    bindEvents();
    if (demoMode) {
      showApplication(null, true);
      return;
    }
    if (!hasCloudConfig || !window.supabase || typeof window.supabase.createClient !== "function") {
      setHidden(setupNotice, false);
      setAuthMessage("Подключение не настроено. Открой config.js и выполни шаги в README.md.", "error");
      return;
    }
    state.client = window.supabase.createClient(config.supabaseUrl, config.supabasePublishableKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    });
    try {
      const { data, error } = await state.client.auth.getSession();
      if (error) throw error;
      if (data.session?.user) {
        const sessionEmail = String(data.session.user.email || "").toLocaleLowerCase("en-US");
        const allowedEmail = String(config.adminEmail).trim().toLocaleLowerCase("en-US");
        if (sessionEmail === allowedEmail) {
          showApplication(data.session.user, false);
        } else {
          await state.client.auth.signOut();
          setAuthMessage("Этот email не разрешён для доступа к списку группы.", "error");
        }
      }
    } catch (error) {
      console.error("Не удалось восстановить сессию:", error);
      setAuthMessage("Не удалось проверить сеанс. Попробуй обновить страницу.", "error");
    }
  }

  initialize();
})();
