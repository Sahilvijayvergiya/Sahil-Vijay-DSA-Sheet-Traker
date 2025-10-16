# 🚀 Striver's A2Z DSA Sheet Tracker

A beautiful, interactive web-based tracker for Striver's A2Z Data Structures and Algorithms practice sheet. Track your progress, filter problems, and stay organized on your coding journey!

## ✨ Features

- **📊 Progress Tracking**: Automatically tracks completed, in-progress, and pending problems
- **🔍 Smart Search**: Search problems by name, notes, or company tags
- **🎯 Advanced Filters**: Filter by difficulty (Easy/Medium/Hard) and status
- **💾 Auto-Save**: Your progress is automatically saved to browser's localStorage
- **🎨 Modern UI**: Beautiful dark theme with responsive design
- **📱 Mobile Friendly**: Works seamlessly on all devices
- **🏢 Company Tags**: See which companies frequently ask each problem
- **📝 Notes**: Quick reference notes for key concepts

## 🚀 Getting Started

### Quick Start

1. Simply open `index.html` in your web browser
2. No installation or setup required!
3. Start solving problems and track your progress

### File Structure

```
DSA SHEET/
├── index.html      # Main HTML file
├── styles.css      # Styling and theme
├── data.js         # DSA problems data
├── script.js       # Application logic
└── README.md       # This file
```

## 📚 Topics Covered

The sheet covers all major DSA topics following Striver's A2Z course structure:

1. **Learn the Basics** - I/O, Data Types, Loops, Conditionals
2. **Arrays** - Two Pointers, Kadane's Algorithm, Sliding Window
3. **Sorting** - Selection, Bubble, Insertion, Merge, Quick Sort
4. **Binary Search** - Search algorithms and variations
5. **Strings** - String manipulation and pattern matching
6. **Linked List** - Reversal, Cycle Detection, Two Pointers
7. **Recursion** - Backtracking, Subsets, Permutations
8. **Stack and Queue** - Implementation and applications
9. **Greedy Algorithms** - Optimization problems
10. **Binary Trees** - Traversals, Height, Diameter
11. **Binary Search Trees** - BST operations and properties
12. **Graphs** - DFS, BFS, Cycle Detection, Topological Sort
13. **Dynamic Programming** - Classic DP problems
14. **Tries** - Prefix trees and word search
15. **Heap / Priority Queue** - K-th element problems

## 🎯 How to Use

### Tracking Progress

1. **Mark as In Progress**: When you start working on a problem
2. **Mark as Completed**: Once you've solved and understood the problem
3. **Not Started**: Default state for new problems

### Search & Filter

- **Search Bar**: Type problem name, company, or concept
- **Difficulty Filter**: Show only Easy, Medium, or Hard problems
- **Status Filter**: Filter by completion status

### Expanding Topics

- Click on any topic header to expand/collapse the problem list
- All topics are expanded by default

### Reset Progress

- Use the "Reset Progress" button to clear all saved data
- Confirmation required to prevent accidental resets

## 📊 Data Structure

Each problem contains:

```javascript
{
    name: "Problem Name",
    link: "https://leetcode.com/...",
    difficulty: "Easy|Medium|Hard",
    companies: ["Google", "Amazon", "Microsoft"],
    notes: "Key concepts and approach",
    status: "Not Started|In Progress|Completed"
}
```

## 🔧 Customization

### Adding New Problems

Edit `data.js` and add problems to existing topics:

```javascript
{
    name: "Your Problem Name",
    link: "https://problem-link.com",
    difficulty: "Medium",
    companies: ["Company1", "Company2"],
    notes: "Important concepts",
    status: "Not Started"
}
```

### Adding New Topics

Add a new topic object to the `dsaSheet` array in `data.js`:

```javascript
{
    topic: "Your Topic Name",
    problems: [
        // Your problems here
    ]
}
```

### Changing Theme Colors

Modify CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... other colors */
}
```

## 💡 Tips for Success

1. **Consistency is Key**: Solve at least 2-3 problems daily
2. **Understand, Don't Memorize**: Focus on understanding patterns
3. **Revise Regularly**: Revisit completed problems after a week
4. **Track Companies**: Focus on problems from your target companies
5. **Read Notes**: Quick concept refreshers before solving
6. **Time Yourself**: Practice under interview conditions

## 🌐 Problem Sources

Problems are sourced from:
- [LeetCode](https://leetcode.com)
- [GeeksforGeeks](https://www.geeksforgeeks.org)
- [Coding Ninjas](https://www.codingninjas.com)

## 📖 Resources

- **Striver's A2Z DSA Course**: [takeuforward.org](https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2)
- **YouTube Playlist**: Search for "Striver A2Z DSA Course"
- **Practice Platforms**: LeetCode, GeeksforGeeks, Codeforces

## 🤝 Contributing

Want to add more problems or improve the tracker?

1. Add problems following the existing format
2. Ensure all required fields are present
3. Test the changes locally
4. Share your improvements!

## 📝 Notes

- Progress is saved in browser's localStorage
- Clearing browser data will reset progress
- Works offline once loaded
- No backend or database required

## 🎓 Recommended Approach

### For Beginners
1. Start with "Learn the Basics"
2. Move to Arrays and Strings
3. Practice Sorting and Binary Search
4. Then tackle Data Structures

### For Interview Prep
1. Focus on Medium difficulty problems
2. Prioritize problems from target companies
3. Practice similar problems in clusters
4. Time yourself (45 mins per problem)

### For Advanced Learners
1. Focus on Hard problems
2. Optimize solutions for time/space
3. Learn multiple approaches
4. Teach concepts to others

## 🏆 Goal Setting

Set realistic goals:
- **30 Days**: Complete Easy problems (50-60 problems)
- **60 Days**: Add Medium problems (100-120 problems)
- **90 Days**: Include Hard problems (150+ problems)
- **180 Days**: Master all topics (200+ problems)

## 📱 Browser Compatibility

- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 🐛 Troubleshooting

**Progress not saving?**
- Check if localStorage is enabled in browser
- Ensure you're not in incognito/private mode

**Layout issues?**
- Clear browser cache
- Try a different browser
- Check if CSS file is loaded

**Problems not showing?**
- Check browser console for errors
- Ensure all files are in the same directory
- Verify data.js is properly formatted

## 📄 License

Free to use for personal learning and practice. Share with fellow coders!

## 🙏 Credits

- **Striver (Raj Vikramaditya)**: For the amazing A2Z DSA Course
- **TakeUForward**: For comprehensive DSA resources
- Problem platforms: LeetCode, GeeksforGeeks, and others

---

**Happy Coding! 🚀 Keep grinding and you'll master DSA!**

*"The only way to learn a new programming language is by writing programs in it." - Dennis Ritchie*
