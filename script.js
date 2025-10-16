// Enhanced script with difficulty-based subsections within topics

// Load saved progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('dsaProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        dsaSheet.forEach((topic, topicIndex) => {
            topic.problems.forEach((problem, problemIndex) => {
                const key = `${topicIndex}-${problemIndex}`;
                if (progress[key]) {
                    problem.status = progress[key];
                }
            });
        });
    }
}

// Save progress to localStorage
function saveProgress() {
    const progress = {};
    dsaSheet.forEach((topic, topicIndex) => {
        topic.problems.forEach((problem, problemIndex) => {
            const key = `${topicIndex}-${problemIndex}`;
            progress[key] = problem.status;
        });
    });
    localStorage.setItem('dsaProgress', JSON.stringify(progress));
}

// Update statistics
function updateStats() {
    let total = 0;
    let completed = 0;
    let easyTotal = 0, easyCompleted = 0;
    let mediumTotal = 0, mediumCompleted = 0;
    let hardTotal = 0, hardCompleted = 0;
    
    dsaSheet.forEach(topic => {
        topic.problems.forEach(problem => {
            total++;
            if (problem.status === 'Completed') completed++;
            
            if (problem.difficulty === 'Easy') {
                easyTotal++;
                if (problem.status === 'Completed') easyCompleted++;
            } else if (problem.difficulty === 'Medium') {
                mediumTotal++;
                if (problem.status === 'Completed') mediumCompleted++;
            } else if (problem.difficulty === 'Hard') {
                hardTotal++;
                if (problem.status === 'Completed') hardCompleted++;
            }
        });
    });
    
    // Update total progress
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    document.getElementById('completedProblems').textContent = completed;
    document.getElementById('totalProblems').textContent = total;
    document.getElementById('progressPercentage').textContent = percentage + '%';
    
    // Update circular progress
    const circle = document.querySelector('.progress-bar');
    if (circle) {
        const circumference = 2 * Math.PI * 45;
        const offset = circumference - (percentage / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }
    
    // Update difficulty stats
    document.getElementById('easyCompleted').textContent = easyCompleted;
    document.getElementById('easyTotal').textContent = easyTotal;
    document.getElementById('mediumCompleted').textContent = mediumCompleted;
    document.getElementById('mediumTotal').textContent = mediumTotal;
    document.getElementById('hardCompleted').textContent = hardCompleted;
    document.getElementById('hardTotal').textContent = hardTotal;
}

// Get platform info from URL
function getPlatformInfo(url) {
    if (url.includes('leetcode.com')) {
        return { name: 'LeetCode', icon: '🟠', color: '#FFA116' };
    } else if (url.includes('geeksforgeeks.org')) {
        return { name: 'GFG', icon: '🟢', color: '#2F8D46' };
    } else if (url.includes('codingninjas.com') || url.includes('naukri.com')) {
        return { name: 'Coding Ninjas', icon: '🟠', color: '#FF6C37' };
    } else if (url.includes('codeforces.com')) {
        return { name: 'Codeforces', icon: '🔵', color: '#1F8ACB' };
    } else if (url.includes('codechef.com')) {
        return { name: 'CodeChef', icon: '🟤', color: '#5B4638' };
    }
    return { name: 'Practice', icon: '🔗', color: '#888' };
}

// Render topics with difficulty subsections
function renderSheet(filteredSheet = null, difficultyFilter = 'all') {
    const container = document.getElementById('topicsContainer');
    container.innerHTML = '';
    
    const dataToRender = filteredSheet || dsaSheet;
    
    dataToRender.forEach((topic, topicIndex) => {
        // Organize problems by difficulty
        const easyProblems = topic.problems.filter(p => p.difficulty === 'Easy');
        const mediumProblems = topic.problems.filter(p => p.difficulty === 'Medium');
        const hardProblems = topic.problems.filter(p => p.difficulty === 'Hard');
        
        // Apply difficulty filter
        let subsections = [];
        if (difficultyFilter === 'all' || difficultyFilter === 'Easy') {
            if (easyProblems.length > 0) {
                subsections.push({ name: 'Easy', problems: easyProblems, color: 'var(--easy-color)' });
            }
        }
        if (difficultyFilter === 'all' || difficultyFilter === 'Medium') {
            if (mediumProblems.length > 0) {
                subsections.push({ name: 'Medium', problems: mediumProblems, color: 'var(--medium-color)' });
            }
        }
        if (difficultyFilter === 'all' || difficultyFilter === 'Hard') {
            if (hardProblems.length > 0) {
                subsections.push({ name: 'Hard', problems: hardProblems, color: 'var(--hard-color)' });
            }
        }
        
        if (subsections.length === 0) return;
        
        // Calculate topic progress
        const allProblems = [...easyProblems, ...mediumProblems, ...hardProblems];
        const completed = allProblems.filter(p => p.status === 'Completed').length;
        const total = allProblems.length;
        const progressPercent = total > 0 ? (completed / total) * 100 : 0;
        
        const topicSection = document.createElement('div');
        topicSection.className = 'topic-section';
        
        // Topic header
        let topicHTML = `
            <div class="topic-header" onclick="toggleTopic(${topicIndex})">
                <h2 class="topic-title">${topic.topic}</h2>
                <div class="topic-progress">
                    <span>${completed}/${total}</span>
                    <div class="progress-bar-small">
                        <div class="progress-fill" style="width: ${progressPercent}%"></div>
                    </div>
                    <span class="toggle-icon" id="toggle-${topicIndex}">▼</span>
                </div>
            </div>
            <div class="topic-content" id="content-${topicIndex}">
        `;
        
        // Render each difficulty subsection
        subsections.forEach((subsection, subIndex) => {
            const subCompleted = subsection.problems.filter(p => p.status === 'Completed').length;
            const subTotal = subsection.problems.length;
            const subProgressPercent = subTotal > 0 ? (subCompleted / subTotal) * 100 : 0;
            
            topicHTML += `
                <div class="subsection">
                    <div class="subsection-header" onclick="toggleSubsection(${topicIndex}, ${subIndex})">
                        <h3 class="subsection-title" style="color: ${subsection.color}">
                            ${subsection.name} Problems (${subCompleted}/${subTotal})
                        </h3>
                        <div class="subsection-progress">
                            <div class="progress-bar-small">
                                <div class="progress-fill" style="width: ${subProgressPercent}%; background: ${subsection.color}"></div>
                            </div>
                            <span class="toggle-icon" id="toggle-sub-${topicIndex}-${subIndex}">▼</span>
                        </div>
                    </div>
                    <div class="subsection-content" id="subcontent-${topicIndex}-${subIndex}">
                        <table class="problems-table">
                            <thead>
                                <tr>
                                    <th style="width: 5%">Status</th>
                                    <th style="width: 30%">Problem</th>
                                    <th style="width: 12%">Platform</th>
                                    <th style="width: 10%">Difficulty</th>
                                    <th style="width: 18%">Companies</th>
                                    <th style="width: 25%">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${subsection.problems.map((problem) => {
                                    const actualIndex = topic.problems.indexOf(problem);
                                    const platform = getPlatformInfo(problem.link);
                                    return `
                                    <tr>
                                        <td>
                                            <input type="checkbox" class="status-checkbox" 
                                                ${problem.status === 'Completed' ? 'checked' : ''}
                                                onchange="toggleStatus(${topicIndex}, ${actualIndex}, this.checked)">
                                        </td>
                                        <td class="problem-name">${problem.name}</td>
                                        <td>
                                            <a href="${problem.link}" target="_blank" class="problem-link" style="background: ${platform.color}15; color: ${platform.color}">
                                                <span class="platform-icon">${platform.icon}</span> ${platform.name}
                                            </a>
                                        </td>
                                        <td><span class="difficulty ${problem.difficulty}">${problem.difficulty}</span></td>
                                        <td>
                                            <div class="company-tags">
                                                ${problem.companies.slice(0, 3).map(company => 
                                                    `<span class="company-tag">${company}</span>`
                                                ).join('')}
                                            </div>
                                        </td>
                                        <td class="notes">${problem.notes}</td>
                                    </tr>
                                `}).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        });
        
        topicHTML += '</div>';
        topicSection.innerHTML = topicHTML;
        container.appendChild(topicSection);
    });
    
    updateStats();
}

// Toggle topic visibility
function toggleTopic(topicIndex) {
    const content = document.getElementById(`content-${topicIndex}`);
    const icon = document.getElementById(`toggle-${topicIndex}`);
    
    if (content.classList.contains('collapsed-content')) {
        content.classList.remove('collapsed-content');
        icon.textContent = '▼';
    } else {
        content.classList.add('collapsed-content');
        icon.textContent = '▶';
    }
}

// Toggle subsection visibility
function toggleSubsection(topicIndex, subIndex) {
    const content = document.getElementById(`subcontent-${topicIndex}-${subIndex}`);
    const icon = document.getElementById(`toggle-sub-${topicIndex}-${subIndex}`);
    
    if (content.classList.contains('collapsed-content')) {
        content.classList.remove('collapsed-content');
        icon.textContent = '▼';
    } else {
        content.classList.add('collapsed-content');
        icon.textContent = '▶';
    }
}

// Toggle problem status with checkbox
function toggleStatus(topicIndex, problemIndex, isChecked) {
    dsaSheet[topicIndex].problems[problemIndex].status = isChecked ? 'Completed' : 'Not Started';
    saveProgress();
    // Re-render to update progress bars
    const currentFilter = document.querySelector('.tab-btn.active').dataset.filter;
    const searchTerm = document.getElementById('searchInput').value;
    if (searchTerm) {
        applyFilters();
    } else {
        renderSheet(null, currentFilter);
    }
}

// Search and filter functionality
function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const currentFilter = document.querySelector('.tab-btn.active').dataset.filter;
    
    if (!searchTerm) {
        renderSheet(null, currentFilter);
        return;
    }
    
    const filtered = dsaSheet.map(topic => {
        const filteredProblems = topic.problems.filter(problem => 
            problem.name.toLowerCase().includes(searchTerm) ||
            problem.notes.toLowerCase().includes(searchTerm) ||
            problem.companies.some(c => c.toLowerCase().includes(searchTerm))
        );
        
        if (filteredProblems.length > 0) {
            return { ...topic, problems: filteredProblems };
        }
        return null;
    }).filter(topic => topic !== null);
    
    renderSheet(filtered, currentFilter);
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', applyFilters);
}

// Setup tab filtering
function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            const searchTerm = document.getElementById('searchInput').value;
            if (searchTerm) {
                applyFilters();
            } else {
                renderSheet(null, filter);
            }
        });
    });
}

// Setup reset button
function setupResetButton() {
    const resetBtn = document.getElementById('resetProgress');
    resetBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            localStorage.removeItem('dsaProgress');
            dsaSheet.forEach(topic => {
                topic.problems.forEach(problem => {
                    problem.status = 'Not Started';
                });
            });
            renderSheet();
        }
    });
}

// Open Add Problem Modal
function openAddProblemModal() {
    const modal = document.getElementById('addProblemModal');
    const topicSelect = document.getElementById('problemTopic');
    
    // Populate topic dropdown
    topicSelect.innerHTML = '<option value="">Select Topic</option>';
    dsaSheet.forEach((topic, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = topic.topic;
        topicSelect.appendChild(option);
    });
    
    modal.classList.remove('hidden');
}

// Close Add Problem Modal
function closeAddProblemModal() {
    const modal = document.getElementById('addProblemModal');
    modal.classList.add('hidden');
    
    // Clear form
    document.getElementById('problemTopic').value = '';
    document.getElementById('problemName').value = '';
    document.getElementById('problemLink').value = '';
    document.getElementById('problemDifficulty').value = 'Easy';
    document.getElementById('problemCompanies').value = '';
    document.getElementById('problemNotes').value = '';
}

// Save Problem
function saveProblem() {
    const topicIndex = document.getElementById('problemTopic').value;
    const name = document.getElementById('problemName').value.trim();
    const link = document.getElementById('problemLink').value.trim();
    const difficulty = document.getElementById('problemDifficulty').value;
    const companiesStr = document.getElementById('problemCompanies').value.trim();
    const notes = document.getElementById('problemNotes').value.trim();
    
    // Validation
    if (!topicIndex) {
        alert('Please select a topic');
        return;
    }
    if (!name) {
        alert('Please enter problem name');
        return;
    }
    if (!link) {
        alert('Please enter problem link');
        return;
    }
    
    // Parse companies
    const companies = companiesStr ? companiesStr.split(',').map(c => c.trim()) : ['Practice'];
    
    // Create new problem object
    const newProblem = {
        name: name,
        link: link,
        difficulty: difficulty,
        companies: companies,
        notes: notes || 'No notes',
        status: 'Not Started'
    };
    
    // Add to data
    dsaSheet[topicIndex].problems.push(newProblem);
    
    // Save to localStorage
    saveCustomProblems();
    
    // Re-render
    renderSheet();
    
    // Close modal
    closeAddProblemModal();
    
    // Show success message
    alert('Problem added successfully!');
}

// Save custom problems to localStorage
function saveCustomProblems() {
    localStorage.setItem('customProblems', JSON.stringify(dsaSheet));
}

// Load custom problems from localStorage
function loadCustomProblems() {
    const saved = localStorage.getItem('customProblems');
    if (saved) {
        try {
            const customSheet = JSON.parse(saved);
            // Merge with existing data
            customSheet.forEach((customTopic, index) => {
                if (dsaSheet[index]) {
                    dsaSheet[index].problems = customTopic.problems;
                }
            });
        } catch (e) {
            console.error('Error loading custom problems:', e);
        }
    }
}

// Setup Add Problem Button
function setupAddProblemButton() {
    const addBtn = document.getElementById('addProblemBtn');
    addBtn.addEventListener('click', openAddProblemModal);
    
    // Close modal on outside click
    const modal = document.getElementById('addProblemModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeAddProblemModal();
        }
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    loadCustomProblems();
    loadProgress();
    renderSheet();
    setupSearch();
    setupTabs();
    setupResetButton();
    setupAddProblemButton();
});
