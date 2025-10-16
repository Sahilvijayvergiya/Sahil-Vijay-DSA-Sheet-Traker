// Striver's A2Z DSA Sheet - Complete 455 Problems
// Organized in Steps 1-18 as per official structure
const dsaSheet = [
    {
        topic: "Step 1: Learn the basics",
        count: "31 problems",
        problems: [
            {
                name: "User Input / Output",
                link: "https://practice.geeksforgeeks.org/problems/data-type-1666706751/1",
                difficulty: "Easy",
                companies: ["Google", "Amazon", "Microsoft"],
                notes: "Understanding basic I/O operations",
                status: "Not Started"
            },
            {
                name: "Data Types",
                link: "https://leetcode.com/problems/number-of-good-pairs/",
                difficulty: "Easy",
                companies: ["Amazon", "Adobe"],
                notes: "Learn about different data types and their ranges",
                status: "Not Started"
            },
            {
                name: "If Else statements",
                link: "https://practice.geeksforgeeks.org/problems/java-if-else-decision-making0924/0",
                difficulty: "Easy",
                companies: ["TCS", "Infosys"],
                notes: "Conditional statements basics",
                status: "Not Started"
            },
            {
                name: "Switch Statement",
                link: "https://practice.geeksforgeeks.org/problems/java-switch-case-statement3529/1",
                difficulty: "Easy",
                companies: ["Wipro", "Cognizant"],
                notes: "Multiple condition handling",
                status: "Not Started"
            },
            {
                name: "Loops (For, While, Do-While)",
                link: "https://practice.geeksforgeeks.org/problems/for-loop-primecheck-1587115620/0",
                difficulty: "Easy",
                companies: ["Google", "Microsoft"],
                notes: "Iteration fundamentals",
                status: "Not Started"
            },
            {
                name: "Functions",
                link: "https://practice.geeksforgeeks.org/problems/pass-by-reference-and-value/1",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Function declaration and definition",
                status: "Not Started"
            },
            {
                name: "Arrays Introduction",
                link: "https://practice.geeksforgeeks.org/problems/sum-of-array2326/1",
                difficulty: "Easy",
                companies: ["Microsoft", "Amazon"],
                notes: "Basic array operations",
                status: "Not Started"
            },
            {
                name: "Pass by Reference and Value",
                link: "https://practice.geeksforgeeks.org/problems/pass-by-reference-and-value/1",
                difficulty: "Easy",
                companies: ["Google", "Adobe"],
                notes: "Understanding parameter passing",
                status: "Not Started"
            },
            {
                name: "Time Complexity",
                link: "https://practice.geeksforgeeks.org/problems/time-complexity-of-loop/0",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft", "Google"],
                notes: "Big O notation basics",
                status: "Not Started"
            },
            {
                name: "Space Complexity",
                link: "https://practice.geeksforgeeks.org/problems/time-and-space-complexity/0",
                difficulty: "Easy",
                companies: ["Google", "Facebook"],
                notes: "Memory usage analysis",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Step 2: Learn Important Sorting Techniques",
        count: "7 problems",
        problems: [
            {
                name: "Selection Sort",
                link: "https://practice.geeksforgeeks.org/problems/selection-sort/1",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft"],
                notes: "O(n²) time complexity",
                status: "Not Started"
            },
            {
                name: "Bubble Sort",
                link: "https://practice.geeksforgeeks.org/problems/bubble-sort/1",
                difficulty: "Easy",
                companies: ["Google", "Adobe"],
                notes: "Stable sorting algorithm",
                status: "Not Started"
            },
            {
                name: "Insertion Sort",
                link: "https://practice.geeksforgeeks.org/problems/insertion-sort/1",
                difficulty: "Easy",
                companies: ["Microsoft", "Amazon"],
                notes: "Efficient for small datasets",
                status: "Not Started"
            },
            {
                name: "Merge Sort",
                link: "https://leetcode.com/problems/sort-an-array/",
                difficulty: "Medium",
                companies: ["Google", "Facebook", "Amazon"],
                notes: "Divide and conquer - O(n log n)",
                status: "Not Started"
            },
            {
                name: "Quick Sort",
                link: "https://practice.geeksforgeeks.org/problems/quick-sort/1",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Google"],
                notes: "Average O(n log n), worst O(n²)",
                status: "Not Started"
            },
            {
                name: "Recursive Bubble Sort",
                link: "https://practice.geeksforgeeks.org/problems/bubble-sort/1",
                difficulty: "Easy",
                companies: ["TCS", "Wipro"],
                notes: "Recursion practice",
                status: "Not Started"
            },
            {
                name: "Recursive Insertion Sort",
                link: "https://practice.geeksforgeeks.org/problems/insertion-sort/1",
                difficulty: "Easy",
                companies: ["Amazon", "Adobe"],
                notes: "Recursive sorting",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Step 3: Solve Problems on Arrays [Easy -> Medium -> Hard]",
        count: "40 problems",
        problems: [
            {
                name: "Largest Element in Array",
                link: "https://leetcode.com/problems/largest-number-at-least-twice-of-others/",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Basic array traversal",
                status: "Not Started"
            },
            {
                name: "Second Largest Element",
                link: "https://practice.geeksforgeeks.org/problems/second-largest3735/1",
                difficulty: "Easy",
                companies: ["Microsoft", "Adobe"],
                notes: "Single pass solution possible",
                status: "Not Started"
            },
            {
                name: "Check if Array is Sorted",
                link: "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/",
                difficulty: "Easy",
                companies: ["Google", "Facebook"],
                notes: "Linear time complexity",
                status: "Not Started"
            },
            {
                name: "Remove Duplicates from Sorted Array",
                link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft", "Google"],
                notes: "Two pointer approach",
                status: "Not Started"
            },
            {
                name: "Rotate Array",
                link: "https://leetcode.com/problems/rotate-array/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "Reversal algorithm",
                status: "Not Started"
            },
            {
                name: "Move Zeroes",
                link: "https://leetcode.com/problems/move-zeroes/",
                difficulty: "Easy",
                companies: ["Facebook", "Apple"],
                notes: "In-place modification",
                status: "Not Started"
            },
            {
                name: "Two Sum",
                link: "https://leetcode.com/problems/two-sum/",
                difficulty: "Easy",
                companies: ["Google", "Amazon", "Apple"],
                notes: "Hash map approach - O(n)",
                status: "Not Started"
            },
            {
                name: "Best Time to Buy and Sell Stock",
                link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft", "Bloomberg"],
                notes: "Track minimum price",
                status: "Not Started"
            },
            {
                name: "Maximum Subarray (Kadane's Algorithm)",
                link: "https://leetcode.com/problems/maximum-subarray/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "LinkedIn"],
                notes: "Dynamic programming classic",
                status: "Not Started"
            },
            {
                name: "Rearrange Array Elements by Sign",
                link: "https://leetcode.com/problems/rearrange-array-elements-by-sign/",
                difficulty: "Medium",
                companies: ["Google", "Amazon"],
                notes: "Two pointer technique",
                status: "Not Started"
            },
            {
                name: "Linear Search",
                link: "https://practice.geeksforgeeks.org/problems/who-will-win-1587115621/1",
                difficulty: "Easy",
                companies: ["TCS", "Infosys"],
                notes: "Sequential search algorithm",
                status: "Not Started"
            },
            {
                name: "Union of Two Sorted Arrays",
                link: "https://practice.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft"],
                notes: "Two pointer merge technique",
                status: "Not Started"
            },
            {
                name: "Intersection of Two Arrays",
                link: "https://leetcode.com/problems/intersection-of-two-arrays/",
                difficulty: "Easy",
                companies: ["Google", "Facebook"],
                notes: "Hash set approach",
                status: "Not Started"
            },
            {
                name: "Missing Number",
                link: "https://leetcode.com/problems/missing-number/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft", "Bloomberg"],
                notes: "XOR or sum formula",
                status: "Not Started"
            },
            {
                name: "Maximum Consecutive Ones",
                link: "https://leetcode.com/problems/max-consecutive-ones/",
                difficulty: "Easy",
                companies: ["Google", "Amazon"],
                notes: "Simple traversal",
                status: "Not Started"
            },
            {
                name: "Single Number",
                link: "https://leetcode.com/problems/single-number/",
                difficulty: "Easy",
                companies: ["Amazon", "Google", "Apple"],
                notes: "XOR property",
                status: "Not Started"
            },
            {
                name: "Longest Subarray with Sum K",
                link: "https://practice.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "Prefix sum + hash map",
                status: "Not Started"
            },
            {
                name: "3Sum",
                link: "https://leetcode.com/problems/3sum/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook", "Microsoft"],
                notes: "Two pointer after sorting",
                status: "Not Started"
            },
            {
                name: "4Sum",
                link: "https://leetcode.com/problems/4sum/",
                difficulty: "Medium",
                companies: ["Google", "Amazon"],
                notes: "Extension of 3Sum",
                status: "Not Started"
            },
            {
                name: "Majority Element",
                link: "https://leetcode.com/problems/majority-element/",
                difficulty: "Easy",
                companies: ["Amazon", "Google", "Adobe"],
                notes: "Moore's Voting Algorithm",
                status: "Not Started"
            },
            {
                name: "Majority Element II",
                link: "https://leetcode.com/problems/majority-element-ii/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Extended Boyer-Moore",
                status: "Not Started"
            },
            {
                name: "Sort Colors",
                link: "https://leetcode.com/problems/sort-colors/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Facebook"],
                notes: "Dutch National Flag algorithm",
                status: "Not Started"
            },
            {
                name: "Next Permutation",
                link: "https://leetcode.com/problems/next-permutation/",
                difficulty: "Medium",
                companies: ["Google", "Amazon", "Facebook"],
                notes: "In-place rearrangement",
                status: "Not Started"
            },
            {
                name: "Pascal's Triangle",
                link: "https://leetcode.com/problems/pascals-triangle/",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "DP or combinatorics",
                status: "Not Started"
            },
            {
                name: "Set Matrix Zeroes",
                link: "https://leetcode.com/problems/set-matrix-zeroes/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Facebook"],
                notes: "In-place marking",
                status: "Not Started"
            },
            {
                name: "Rotate Image",
                link: "https://leetcode.com/problems/rotate-image/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Apple"],
                notes: "Transpose + reverse",
                status: "Not Started"
            },
            {
                name: "Spiral Matrix",
                link: "https://leetcode.com/problems/spiral-matrix/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Microsoft"],
                notes: "Layer by layer traversal",
                status: "Not Started"
            },
            {
                name: "Subarray Sum Equals K",
                link: "https://leetcode.com/problems/subarray-sum-equals-k/",
                difficulty: "Medium",
                companies: ["Facebook", "Amazon", "Google"],
                notes: "Prefix sum + hash map",
                status: "Not Started"
            },
            {
                name: "Merge Intervals",
                link: "https://leetcode.com/problems/merge-intervals/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Sort by start time",
                status: "Not Started"
            },
            {
                name: "Find Duplicate Number",
                link: "https://leetcode.com/problems/find-the-duplicate-number/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Bloomberg"],
                notes: "Floyd's cycle detection",
                status: "Not Started"
            },
            {
                name: "Repeat and Missing Number",
                link: "https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "Mathematical approach",
                status: "Not Started"
            },
            {
                name: "Count Inversions",
                link: "https://practice.geeksforgeeks.org/problems/inversion-of-array-1587115620/1",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Modified merge sort",
                status: "Not Started"
            },
            {
                name: "Reverse Pairs",
                link: "https://leetcode.com/problems/reverse-pairs/",
                difficulty: "Hard",
                companies: ["Google", "Amazon"],
                notes: "Merge sort variation",
                status: "Not Started"
            },
            {
                name: "Maximum Product Subarray",
                link: "https://leetcode.com/problems/maximum-product-subarray/",
                difficulty: "Medium",
                companies: ["Amazon", "LinkedIn", "Microsoft"],
                notes: "Track min and max products",
                status: "Not Started"
            },
            {
                name: "Product of Array Except Self",
                link: "https://leetcode.com/problems/product-of-array-except-self/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Facebook"],
                notes: "Without division operator",
                status: "Not Started"
            },
            {
                name: "Container With Most Water",
                link: "https://leetcode.com/problems/container-with-most-water/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Two pointer greedy approach",
                status: "Not Started"
            },
            {
                name: "Trapping Rain Water",
                link: "https://leetcode.com/problems/trapping-rain-water/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Two pointer or stack",
                status: "Not Started"
            },
            {
                name: "Jump Game",
                link: "https://leetcode.com/problems/jump-game/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Google"],
                notes: "Greedy approach",
                status: "Not Started"
            },
            {
                name: "Jump Game II",
                link: "https://leetcode.com/problems/jump-game-ii/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Minimum jumps needed",
                status: "Not Started"
            },
            {
                name: "Find All Duplicates in Array",
                link: "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "In-place marking",
                status: "Not Started"
            },
            {
                name: "First Missing Positive",
                link: "https://leetcode.com/problems/first-missing-positive/",
                difficulty: "Hard",
                companies: ["Amazon", "Google"],
                notes: "In-place hashing",
                status: "Not Started"
            },
            {
                name: "Longest Consecutive Sequence",
                link: "https://leetcode.com/problems/longest-consecutive-sequence/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Hash set O(n) solution",
                status: "Not Started"
            },
            {
                name: "Subarray Sum Divisible by K",
                link: "https://leetcode.com/problems/subarray-sums-divisible-by-k/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Prefix sum modulo",
                status: "Not Started"
            },
            {
                name: "Minimum Size Subarray Sum",
                link: "https://leetcode.com/problems/minimum-size-subarray-sum/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook"],
                notes: "Sliding window",
                status: "Not Started"
            },
            {
                name: "Maximum Sum Circular Subarray",
                link: "https://leetcode.com/problems/maximum-sum-circular-subarray/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Kadane's with circular",
                status: "Not Started"
            },
            {
                name: "Find Peak Element",
                link: "https://leetcode.com/problems/find-peak-element/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Microsoft"],
                notes: "Binary search approach",
                status: "Not Started"
            },
            {
                name: "Search in Rotated Sorted Array",
                link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Facebook"],
                notes: "Modified binary search",
                status: "Not Started"
            },
            {
                name: "Median of Two Sorted Arrays",
                link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Microsoft"],
                notes: "Binary search partition",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Step 4: Binary Search [1D, 2D Arrays, Search Space]",
        count: "32 problems",
        problems: [
            {
                name: "Binary Search",
                link: "https://leetcode.com/problems/binary-search/",
                difficulty: "Easy",
                companies: ["Amazon", "Google", "Microsoft"],
                notes: "Basic binary search implementation",
                status: "Not Started"
            },
            {
                name: "Implement Lower Bound",
                link: "https://practice.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft"],
                notes: "Find floor value",
                status: "Not Started"
            },
            {
                name: "Implement Upper Bound",
                link: "https://practice.geeksforgeeks.org/problems/ceil-in-a-sorted-array/1",
                difficulty: "Easy",
                companies: ["Google", "Amazon"],
                notes: "Find ceiling value",
                status: "Not Started"
            },
            {
                name: "Search Insert Position",
                link: "https://leetcode.com/problems/search-insert-position/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft"],
                notes: "Binary search variant",
                status: "Not Started"
            },
            {
                name: "Floor and Ceil in Sorted Array",
                link: "https://practice.geeksforgeeks.org/problems/ceil-the-floor2802/1",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Find both floor and ceil",
                status: "Not Started"
            },
            {
                name: "First and Last Position in Sorted Array",
                link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook", "Google"],
                notes: "Two binary searches",
                status: "Not Started"
            },
            {
                name: "Count Occurrences in Sorted Array",
                link: "https://practice.geeksforgeeks.org/problems/number-of-occurrence2259/1",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft"],
                notes: "Use first and last position",
                status: "Not Started"
            },
            {
                name: "Search in Rotated Sorted Array",
                link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Facebook"],
                notes: "Modified binary search",
                status: "Not Started"
            },
            {
                name: "Search in Rotated Sorted Array II",
                link: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "With duplicates",
                status: "Not Started"
            },
            {
                name: "Find Minimum in Rotated Sorted Array",
                link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "Find pivot point",
                status: "Not Started"
            },
            {
                name: "Find Peak Element",
                link: "https://leetcode.com/problems/find-peak-element/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Microsoft"],
                notes: "Binary search on unsorted",
                status: "Not Started"
            },
            {
                name: "Square Root of a Number",
                link: "https://leetcode.com/problems/sqrtx/",
                difficulty: "Easy",
                companies: ["Amazon", "Facebook"],
                notes: "Binary search on answer",
                status: "Not Started"
            },
            {
                name: "Nth Root of a Number",
                link: "https://practice.geeksforgeeks.org/problems/find-nth-root-of-m5843/1",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Binary search on answer",
                status: "Not Started"
            },
            {
                name: "Koko Eating Bananas",
                link: "https://leetcode.com/problems/koko-eating-bananas/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Binary search on speed",
                status: "Not Started"
            },
            {
                name: "Minimum Days to Make M Bouquets",
                link: "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Binary search on days",
                status: "Not Started"
            },
            {
                name: "Find Smallest Divisor",
                link: "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook"],
                notes: "Binary search on divisor",
                status: "Not Started"
            },
            {
                name: "Capacity To Ship Packages",
                link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Binary search on capacity",
                status: "Not Started"
            },
            {
                name: "Kth Missing Positive Number",
                link: "https://leetcode.com/problems/kth-missing-positive-number/",
                difficulty: "Easy",
                companies: ["Amazon", "Facebook"],
                notes: "Binary search approach",
                status: "Not Started"
            },
            {
                name: "Aggressive Cows",
                link: "https://practice.geeksforgeeks.org/problems/aggressive-cows/1",
                difficulty: "Hard",
                companies: ["Amazon", "Google"],
                notes: "Binary search on distance",
                status: "Not Started"
            },
            {
                name: "Book Allocation Problem",
                link: "https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1",
                difficulty: "Hard",
                companies: ["Amazon", "Microsoft", "Google"],
                notes: "Binary search on pages",
                status: "Not Started"
            },
            {
                name: "Split Array Largest Sum",
                link: "https://leetcode.com/problems/split-array-largest-sum/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Similar to book allocation",
                status: "Not Started"
            },
            {
                name: "Painter's Partition Problem",
                link: "https://practice.geeksforgeeks.org/problems/the-painters-partition-problem1535/1",
                difficulty: "Hard",
                companies: ["Amazon", "Microsoft"],
                notes: "Binary search on time",
                status: "Not Started"
            },
            {
                name: "Minimize Max Distance to Gas Station",
                link: "https://leetcode.com/problems/minimize-max-distance-to-gas-station/",
                difficulty: "Hard",
                companies: ["Google", "Amazon"],
                notes: "Binary search on distance",
                status: "Not Started"
            },
            {
                name: "Median of Two Sorted Arrays",
                link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Microsoft"],
                notes: "Binary search partition",
                status: "Not Started"
            },
            {
                name: "Kth Element of Two Sorted Arrays",
                link: "https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Binary search merge",
                status: "Not Started"
            },
            {
                name: "Search in 2D Matrix",
                link: "https://leetcode.com/problems/search-a-2d-matrix/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Facebook"],
                notes: "Treat as 1D array",
                status: "Not Started"
            },
            {
                name: "Search in 2D Matrix II",
                link: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Apple"],
                notes: "Start from top-right",
                status: "Not Started"
            },
            {
                name: "Find Peak Element II",
                link: "https://leetcode.com/problems/find-a-peak-element-ii/",
                difficulty: "Medium",
                companies: ["Google", "Amazon"],
                notes: "2D binary search",
                status: "Not Started"
            },
            {
                name: "Matrix Median",
                link: "https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1",
                difficulty: "Hard",
                companies: ["Amazon", "Google"],
                notes: "Binary search on value",
                status: "Not Started"
            },
            {
                name: "Row with Maximum 1s",
                link: "https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft"],
                notes: "Binary search each row",
                status: "Not Started"
            },
            {
                name: "Find in Mountain Array",
                link: "https://leetcode.com/problems/find-in-mountain-array/",
                difficulty: "Hard",
                companies: ["Google", "Amazon"],
                notes: "Three binary searches",
                status: "Not Started"
            },
            {
                name: "Single Element in Sorted Array",
                link: "https://leetcode.com/problems/single-element-in-a-sorted-array/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Binary search with parity",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Step 5: Strings [Basic and Medium]",
        count: "15 problems",
        problems: [
            {
                name: "Binary Search",
                link: "https://leetcode.com/problems/binary-search/",
                difficulty: "Easy",
                companies: ["Google", "Amazon", "Microsoft"],
                notes: "O(log n) search in sorted array",
                status: "Not Started"
            },
            {
                name: "Search Insert Position",
                link: "https://leetcode.com/problems/search-insert-position/",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Lower bound concept",
                status: "Not Started"
            },
            {
                name: "Find First and Last Position",
                link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
                difficulty: "Medium",
                companies: ["Facebook", "Amazon", "Google"],
                notes: "Two binary searches",
                status: "Not Started"
            },
            {
                name: "Search in Rotated Sorted Array",
                link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Facebook"],
                notes: "Modified binary search",
                status: "Not Started"
            },
            {
                name: "Find Peak Element",
                link: "https://leetcode.com/problems/find-peak-element/",
                difficulty: "Medium",
                companies: ["Google", "Amazon"],
                notes: "Binary search on unsorted array",
                status: "Not Started"
            },
            {
                name: "Sqrt(x)",
                link: "https://leetcode.com/problems/sqrtx/",
                difficulty: "Easy",
                companies: ["Amazon", "Facebook"],
                notes: "Binary search on answer",
                status: "Not Started"
            },
            {
                name: "Find Minimum in Rotated Sorted Array",
                link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Bloomberg"],
                notes: "Modified binary search",
                status: "Not Started"
            },
            {
                name: "Single Element in Sorted Array",
                link: "https://leetcode.com/problems/single-element-in-a-sorted-array/",
                difficulty: "Medium",
                companies: ["Google", "Amazon"],
                notes: "Binary search on even/odd indices",
                status: "Not Started"
            },
            {
                name: "Search in Rotated Sorted Array II",
                link: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook"],
                notes: "Handle duplicates",
                status: "Not Started"
            },
            {
                name: "Koko Eating Bananas",
                link: "https://leetcode.com/problems/koko-eating-bananas/",
                difficulty: "Medium",
                companies: ["Google", "Amazon"],
                notes: "Binary search on speed",
                status: "Not Started"
            },
            {
                name: "Minimum Days to Make Bouquets",
                link: "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Binary search on days",
                status: "Not Started"
            },
            {
                name: "Capacity to Ship Packages",
                link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Binary search on capacity",
                status: "Not Started"
            },
            {
                name: "Aggressive Cows",
                link: "https://www.geeksforgeeks.org/aggressive-cows-problem/",
                difficulty: "Hard",
                companies: ["Amazon", "Google"],
                notes: "Binary search on distance",
                status: "Not Started"
            },
            {
                name: "Book Allocation Problem",
                link: "https://www.geeksforgeeks.org/allocate-minimum-number-pages/",
                difficulty: "Hard",
                companies: ["Amazon", "Microsoft", "Google"],
                notes: "Binary search on pages",
                status: "Not Started"
            },
            {
                name: "Split Array Largest Sum",
                link: "https://leetcode.com/problems/split-array-largest-sum/",
                difficulty: "Hard",
                companies: ["Google", "Amazon", "Facebook"],
                notes: "Binary search on sum",
                status: "Not Started"
            },
            {
                name: "Median of Two Sorted Arrays",
                link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Microsoft"],
                notes: "Binary search partition",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Strings",
        problems: [
            {
                name: "Reverse String",
                link: "https://leetcode.com/problems/reverse-string/",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Two pointer approach",
                status: "Not Started"
            },
            {
                name: "Valid Palindrome",
                link: "https://leetcode.com/problems/valid-palindrome/",
                difficulty: "Easy",
                companies: ["Facebook", "Microsoft", "Amazon"],
                notes: "Two pointer technique",
                status: "Not Started"
            },
            {
                name: "Valid Anagram",
                link: "https://leetcode.com/problems/valid-anagram/",
                difficulty: "Easy",
                companies: ["Amazon", "Google", "Bloomberg"],
                notes: "Frequency counting",
                status: "Not Started"
            },
            {
                name: "Longest Common Prefix",
                link: "https://leetcode.com/problems/longest-common-prefix/",
                difficulty: "Easy",
                companies: ["Google", "Amazon"],
                notes: "Vertical scanning approach",
                status: "Not Started"
            },
            {
                name: "Longest Substring Without Repeating Characters",
                link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Sliding window + hash set",
                status: "Not Started"
            },
            {
                name: "String to Integer (atoi)",
                link: "https://leetcode.com/problems/string-to-integer-atoi/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Bloomberg"],
                notes: "Edge case handling",
                status: "Not Started"
            },
            {
                name: "Reverse Words in a String",
                link: "https://leetcode.com/problems/reverse-words-in-a-string/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Apple"],
                notes: "String manipulation",
                status: "Not Started"
            },
            {
                name: "Longest Palindromic Substring",
                link: "https://leetcode.com/problems/longest-palindromic-substring/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Google"],
                notes: "Expand around center",
                status: "Not Started"
            },
            {
                name: "Roman to Integer",
                link: "https://leetcode.com/problems/roman-to-integer/",
                difficulty: "Easy",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Pattern recognition",
                status: "Not Started"
            },
            {
                name: "Integer to Roman",
                link: "https://leetcode.com/problems/integer-to-roman/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Greedy approach",
                status: "Not Started"
            },
            {
                name: "Implement strStr()",
                link: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft", "Facebook"],
                notes: "KMP algorithm",
                status: "Not Started"
            },
            {
                name: "Group Anagrams",
                link: "https://leetcode.com/problems/group-anagrams/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Hash map with sorted key",
                status: "Not Started"
            },
            {
                name: "Count and Say",
                link: "https://leetcode.com/problems/count-and-say/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook"],
                notes: "Iterative generation",
                status: "Not Started"
            },
            {
                name: "Compare Version Numbers",
                link: "https://leetcode.com/problems/compare-version-numbers/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "String parsing",
                status: "Not Started"
            },
            {
                name: "Valid Anagram",
                link: "https://leetcode.com/problems/valid-anagram/",
                difficulty: "Easy",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Hash map or sorting",
                status: "Not Started"
            },
            {
                name: "First Unique Character",
                link: "https://leetcode.com/problems/first-unique-character-in-a-string/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft", "Google"],
                notes: "Frequency count",
                status: "Not Started"
            },
            {
                name: "Longest Common Prefix",
                link: "https://leetcode.com/problems/longest-common-prefix/",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Vertical scanning",
                status: "Not Started"
            },
            {
                name: "Valid Parentheses",
                link: "https://leetcode.com/problems/valid-parentheses/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft", "Facebook"],
                notes: "Stack approach",
                status: "Not Started"
            },
            {
                name: "Longest Palindrome",
                link: "https://leetcode.com/problems/longest-palindrome/",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Frequency count",
                status: "Not Started"
            },
            {
                name: "Minimum Window Substring",
                link: "https://leetcode.com/problems/minimum-window-substring/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Sliding window with hash map",
                status: "Not Started"
            },
            {
                name: "Longest Substring with At Most K Distinct",
                link: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Sliding window",
                status: "Not Started"
            },
            {
                name: "Decode String",
                link: "https://leetcode.com/problems/decode-string/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Stack or recursion",
                status: "Not Started"
            },
            {
                name: "Multiply Strings",
                link: "https://leetcode.com/problems/multiply-strings/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook"],
                notes: "String arithmetic",
                status: "Not Started"
            },
            {
                name: "Zigzag Conversion",
                link: "https://leetcode.com/problems/zigzag-conversion/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "Pattern recognition",
                status: "Not Started"
            },
            {
                name: "Text Justification",
                link: "https://leetcode.com/problems/text-justification/",
                difficulty: "Hard",
                companies: ["Amazon", "Google"],
                notes: "String formatting",
                status: "Not Started"
            },
            {
                name: "Edit Distance",
                link: "https://leetcode.com/problems/edit-distance/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Classic DP on strings",
                status: "Not Started"
            },
            {
                name: "Regular Expression Matching",
                link: "https://leetcode.com/problems/regular-expression-matching/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Complex 2D DP",
                status: "Not Started"
            },
            {
                name: "Wildcard Matching",
                link: "https://leetcode.com/problems/wildcard-matching/",
                difficulty: "Hard",
                companies: ["Amazon", "Google"],
                notes: "2D DP with wildcards",
                status: "Not Started"
            },
            {
                name: "Shortest Palindrome",
                link: "https://leetcode.com/problems/shortest-palindrome/",
                difficulty: "Hard",
                companies: ["Google", "Amazon"],
                notes: "KMP algorithm",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Linked List",
        problems: [
            {
                name: "Reverse Linked List",
                link: "https://leetcode.com/problems/reverse-linked-list/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft", "Google"],
                notes: "Iterative and recursive solutions",
                status: "Not Started"
            },
            {
                name: "Middle of Linked List",
                link: "https://leetcode.com/problems/middle-of-the-linked-list/",
                difficulty: "Easy",
                companies: ["Amazon", "Facebook"],
                notes: "Slow and fast pointer",
                status: "Not Started"
            },
            {
                name: "Merge Two Sorted Lists",
                link: "https://leetcode.com/problems/merge-two-sorted-lists/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft", "Apple"],
                notes: "Two pointer merge",
                status: "Not Started"
            },
            {
                name: "Remove Nth Node From End",
                link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Two pointer with gap",
                status: "Not Started"
            },
            {
                name: "Linked List Cycle",
                link: "https://leetcode.com/problems/linked-list-cycle/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft", "Bloomberg"],
                notes: "Floyd's cycle detection",
                status: "Not Started"
            },
            {
                name: "Palindrome Linked List",
                link: "https://leetcode.com/problems/palindrome-linked-list/",
                difficulty: "Easy",
                companies: ["Amazon", "Facebook", "Microsoft"],
                notes: "Reverse second half",
                status: "Not Started"
            },
            {
                name: "Add Two Numbers",
                link: "https://leetcode.com/problems/add-two-numbers/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Google"],
                notes: "Handle carry",
                status: "Not Started"
            },
            {
                name: "Delete Node in Linked List",
                link: "https://leetcode.com/problems/delete-node-in-a-linked-list/",
                difficulty: "Easy",
                companies: ["Amazon", "Apple"],
                notes: "Copy next node",
                status: "Not Started"
            },
            {
                name: "Intersection of Two Linked Lists",
                link: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft", "Bloomberg"],
                notes: "Two pointer technique",
                status: "Not Started"
            },
            {
                name: "Linked List Cycle II",
                link: "https://leetcode.com/problems/linked-list-cycle-ii/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Facebook"],
                notes: "Floyd's algorithm extended",
                status: "Not Started"
            },
            {
                name: "Remove Duplicates from Sorted List",
                link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Simple traversal",
                status: "Not Started"
            },
            {
                name: "Remove Duplicates from Sorted List II",
                link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "Dummy node technique",
                status: "Not Started"
            },
            {
                name: "Rotate List",
                link: "https://leetcode.com/problems/rotate-list/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "Make circular then break",
                status: "Not Started"
            },
            {
                name: "Copy List with Random Pointer",
                link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Facebook"],
                notes: "Hash map or interweaving",
                status: "Not Started"
            },
            {
                name: "Sort List",
                link: "https://leetcode.com/problems/sort-list/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook", "Microsoft"],
                notes: "Merge sort on linked list",
                status: "Not Started"
            },
            {
                name: "Reorder List",
                link: "https://leetcode.com/problems/reorder-list/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook"],
                notes: "Find middle, reverse, merge",
                status: "Not Started"
            },
            {
                name: "Flatten a Multilevel Doubly Linked List",
                link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "DFS approach",
                status: "Not Started"
            },
            {
                name: "Swap Nodes in Pairs",
                link: "https://leetcode.com/problems/swap-nodes-in-pairs/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "Recursive or iterative",
                status: "Not Started"
            },
            {
                name: "Odd Even Linked List",
                link: "https://leetcode.com/problems/odd-even-linked-list/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "Two pointer rearrangement",
                status: "Not Started"
            },
            {
                name: "Partition List",
                link: "https://leetcode.com/problems/partition-list/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Two separate lists",
                status: "Not Started"
            },
            {
                name: "Remove Nth Node From End",
                link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook", "Microsoft"],
                notes: "Two pointer with gap",
                status: "Not Started"
            },
            {
                name: "Linked List Cycle",
                link: "https://leetcode.com/problems/linked-list-cycle/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft", "Facebook"],
                notes: "Floyd's cycle detection",
                status: "Not Started"
            },
            {
                name: "Merge Two Sorted Lists",
                link: "https://leetcode.com/problems/merge-two-sorted-lists/",
                difficulty: "Easy",
                companies: ["Amazon", "Google", "Microsoft"],
                notes: "Two pointer merge",
                status: "Not Started"
            },
            {
                name: "Reverse Nodes in k-Group",
                link: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Group reversal",
                status: "Not Started"
            },
            {
                name: "Merge k Sorted Lists",
                link: "https://leetcode.com/problems/merge-k-sorted-lists/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Min heap or divide & conquer",
                status: "Not Started"
            },
            {
                name: "Split Linked List in Parts",
                link: "https://leetcode.com/problems/split-linked-list-in-parts/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Calculate sizes first",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Recursion",
        problems: [
            {
                name: "Fibonacci Number",
                link: "https://leetcode.com/problems/fibonacci-number/",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Classic recursion problem",
                status: "Not Started"
            },
            {
                name: "Power(x, n)",
                link: "https://leetcode.com/problems/powx-n/",
                difficulty: "Medium",
                companies: ["Google", "Facebook", "Amazon"],
                notes: "Binary exponentiation",
                status: "Not Started"
            },
            {
                name: "Subsets",
                link: "https://leetcode.com/problems/subsets/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook", "Google"],
                notes: "Backtracking approach",
                status: "Not Started"
            },
            {
                name: "Permutations",
                link: "https://leetcode.com/problems/permutations/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "LinkedIn"],
                notes: "Backtracking with swaps",
                status: "Not Started"
            },
            {
                name: "Combination Sum",
                link: "https://leetcode.com/problems/combination-sum/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Uber"],
                notes: "Backtracking with pruning",
                status: "Not Started"
            },
            {
                name: "Combination Sum II",
                link: "https://leetcode.com/problems/combination-sum-ii/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook"],
                notes: "Handle duplicates",
                status: "Not Started"
            },
            {
                name: "Palindrome Partitioning",
                link: "https://leetcode.com/problems/palindrome-partitioning/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Bloomberg"],
                notes: "Backtracking with palindrome check",
                status: "Not Started"
            },
            {
                name: "Letter Combinations of Phone Number",
                link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Backtracking with mapping",
                status: "Not Started"
            },
            {
                name: "Generate Parentheses",
                link: "https://leetcode.com/problems/generate-parentheses/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Backtracking with constraints",
                status: "Not Started"
            },
            {
                name: "Subsets II",
                link: "https://leetcode.com/problems/subsets-ii/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook"],
                notes: "Handle duplicates in subsets",
                status: "Not Started"
            },
            {
                name: "Permutations II",
                link: "https://leetcode.com/problems/permutations-ii/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "Handle duplicates in permutations",
                status: "Not Started"
            },
            {
                name: "N-Queens",
                link: "https://leetcode.com/problems/n-queens/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Microsoft"],
                notes: "Classic backtracking",
                status: "Not Started"
            },
            {
                name: "Sudoku Solver",
                link: "https://leetcode.com/problems/sudoku-solver/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Uber"],
                notes: "Constraint satisfaction",
                status: "Not Started"
            },
            {
                name: "Word Search",
                link: "https://leetcode.com/problems/word-search/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Facebook"],
                notes: "DFS backtracking on grid",
                status: "Not Started"
            },
            {
                name: "Combination Sum III",
                link: "https://leetcode.com/problems/combination-sum-iii/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Backtracking with constraints",
                status: "Not Started"
            },
            {
                name: "Restore IP Addresses",
                link: "https://leetcode.com/problems/restore-ip-addresses/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Backtracking with validation",
                status: "Not Started"
            },
            {
                name: "Partition to K Equal Sum Subsets",
                link: "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Backtracking with memoization",
                status: "Not Started"
            },
            {
                name: "Beautiful Arrangement",
                link: "https://leetcode.com/problems/beautiful-arrangement/",
                difficulty: "Medium",
                companies: ["Google", "Amazon"],
                notes: "Backtracking permutations",
                status: "Not Started"
            },
            {
                name: "N-Queens II",
                link: "https://leetcode.com/problems/n-queens-ii/",
                difficulty: "Hard",
                companies: ["Amazon", "Google"],
                notes: "Count solutions",
                status: "Not Started"
            },
            {
                name: "Word Search II",
                link: "https://leetcode.com/problems/word-search-ii/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Airbnb"],
                notes: "Trie + backtracking",
                status: "Not Started"
            },
            {
                name: "Expression Add Operators",
                link: "https://leetcode.com/problems/expression-add-operators/",
                difficulty: "Hard",
                companies: ["Google", "Facebook"],
                notes: "Backtracking with evaluation",
                status: "Not Started"
            },
            {
                name: "Remove Invalid Parentheses",
                link: "https://leetcode.com/problems/remove-invalid-parentheses/",
                difficulty: "Hard",
                companies: ["Amazon", "Facebook"],
                notes: "BFS or backtracking",
                status: "Not Started"
            },
            {
                name: "Palindrome Partitioning II",
                link: "https://leetcode.com/problems/palindrome-partitioning-ii/",
                difficulty: "Hard",
                companies: ["Amazon", "Google"],
                notes: "DP + backtracking",
                status: "Not Started"
            },
            {
                name: "Word Break II",
                link: "https://leetcode.com/problems/word-break-ii/",
                difficulty: "Hard",
                companies: ["Amazon", "Google"],
                notes: "DP + backtracking",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Stack and Queue",
        problems: [
            {
                name: "Valid Parentheses",
                link: "https://leetcode.com/problems/valid-parentheses/",
                difficulty: "Easy",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Stack for bracket matching",
                status: "Not Started"
            },
            {
                name: "Implement Queue using Stacks",
                link: "https://leetcode.com/problems/implement-queue-using-stacks/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft"],
                notes: "Two stack approach",
                status: "Not Started"
            },
            {
                name: "Implement Stack using Queues",
                link: "https://leetcode.com/problems/implement-stack-using-queues/",
                difficulty: "Easy",
                companies: ["Amazon", "Bloomberg"],
                notes: "Single queue solution",
                status: "Not Started"
            },
            {
                name: "Min Stack",
                link: "https://leetcode.com/problems/min-stack/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Bloomberg"],
                notes: "Auxiliary stack for minimum",
                status: "Not Started"
            },
            {
                name: "Next Greater Element",
                link: "https://leetcode.com/problems/next-greater-element-i/",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Monotonic stack",
                status: "Not Started"
            },
            {
                name: "Next Greater Element II",
                link: "https://leetcode.com/problems/next-greater-element-ii/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Circular array with stack",
                status: "Not Started"
            },
            {
                name: "Largest Rectangle in Histogram",
                link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Stack for left/right smaller",
                status: "Not Started"
            },
            {
                name: "Trapping Rain Water",
                link: "https://leetcode.com/problems/trapping-rain-water/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Two pointer or stack",
                status: "Not Started"
            },
            {
                name: "Daily Temperatures",
                link: "https://leetcode.com/problems/daily-temperatures/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Bloomberg"],
                notes: "Monotonic stack",
                status: "Not Started"
            },
            {
                name: "Sliding Window Maximum",
                link: "https://leetcode.com/problems/sliding-window-maximum/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Deque approach",
                status: "Not Started"
            },
            {
                name: "LRU Cache",
                link: "https://leetcode.com/problems/lru-cache/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Hash map + doubly linked list",
                status: "Not Started"
            },
            {
                name: "LFU Cache",
                link: "https://leetcode.com/problems/lfu-cache/",
                difficulty: "Hard",
                companies: ["Amazon", "Google"],
                notes: "Complex data structure design",
                status: "Not Started"
            },
            {
                name: "Implement Queue using Stacks",
                link: "https://leetcode.com/problems/implement-queue-using-stacks/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft"],
                notes: "Two stack approach",
                status: "Not Started"
            },
            {
                name: "Implement Stack using Queues",
                link: "https://leetcode.com/problems/implement-stack-using-queues/",
                difficulty: "Easy",
                companies: ["Amazon", "Bloomberg"],
                notes: "Queue operations",
                status: "Not Started"
            },
            {
                name: "Design Circular Queue",
                link: "https://leetcode.com/problems/design-circular-queue/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Array-based circular buffer",
                status: "Not Started"
            },
            {
                name: "Design Circular Deque",
                link: "https://leetcode.com/problems/design-circular-deque/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook"],
                notes: "Double-ended queue",
                status: "Not Started"
            },
            {
                name: "Evaluate Reverse Polish Notation",
                link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
                difficulty: "Medium",
                companies: ["Amazon", "LinkedIn"],
                notes: "Stack-based evaluation",
                status: "Not Started"
            },
            {
                name: "Basic Calculator",
                link: "https://leetcode.com/problems/basic-calculator/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Stack with parentheses",
                status: "Not Started"
            },
            {
                name: "Basic Calculator II",
                link: "https://leetcode.com/problems/basic-calculator-ii/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook"],
                notes: "Handle operators precedence",
                status: "Not Started"
            },
            {
                name: "Asteroid Collision",
                link: "https://leetcode.com/problems/asteroid-collision/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Stack simulation",
                status: "Not Started"
            },
            {
                name: "Remove K Digits",
                link: "https://leetcode.com/problems/remove-k-digits/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Monotonic stack",
                status: "Not Started"
            },
            {
                name: "132 Pattern",
                link: "https://leetcode.com/problems/132-pattern/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Stack with min tracking",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Greedy Algorithms",
        problems: [
            {
                name: "Assign Cookies",
                link: "https://leetcode.com/problems/assign-cookies/",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Sort and greedy assignment",
                status: "Not Started"
            },
            {
                name: "Jump Game",
                link: "https://leetcode.com/problems/jump-game/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Google"],
                notes: "Track maximum reachable",
                status: "Not Started"
            },
            {
                name: "Jump Game II",
                link: "https://leetcode.com/problems/jump-game-ii/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "BFS-like greedy approach",
                status: "Not Started"
            },
            {
                name: "Non-overlapping Intervals",
                link: "https://leetcode.com/problems/non-overlapping-intervals/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook"],
                notes: "Sort by end time",
                status: "Not Started"
            },
            {
                name: "Minimum Platforms",
                link: "https://www.geeksforgeeks.org/minimum-number-platforms-required-railwaybus-station/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Flipkart"],
                notes: "Sort arrival and departure",
                status: "Not Started"
            },
            {
                name: "Job Sequencing Problem",
                link: "https://www.geeksforgeeks.org/job-sequencing-problem/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "Sort by profit, use slots",
                status: "Not Started"
            },
            {
                name: "Fractional Knapsack",
                link: "https://www.geeksforgeeks.org/fractional-knapsack-problem/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Sort by value/weight ratio",
                status: "Not Started"
            },
            {
                name: "Minimum Number of Coins",
                link: "https://www.geeksforgeeks.org/find-minimum-number-of-coins-that-make-a-change/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft"],
                notes: "Greedy coin change",
                status: "Not Started"
            },
            {
                name: "N meetings in one room",
                link: "https://www.geeksforgeeks.org/find-maximum-meetings-in-one-room/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft", "Paytm"],
                notes: "Activity selection",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Binary Trees",
        problems: [
            {
                name: "Binary Tree Inorder Traversal",
                link: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft", "Google"],
                notes: "Recursive and iterative",
                status: "Not Started"
            },
            {
                name: "Binary Tree Preorder Traversal",
                link: "https://leetcode.com/problems/binary-tree-preorder-traversal/",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Stack-based iterative",
                status: "Not Started"
            },
            {
                name: "Binary Tree Postorder Traversal",
                link: "https://leetcode.com/problems/binary-tree-postorder-traversal/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft"],
                notes: "Two stack approach",
                status: "Not Started"
            },
            {
                name: "Maximum Depth of Binary Tree",
                link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
                difficulty: "Easy",
                companies: ["Amazon", "Google", "LinkedIn"],
                notes: "Recursive DFS",
                status: "Not Started"
            },
            {
                name: "Symmetric Tree",
                link: "https://leetcode.com/problems/symmetric-tree/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft", "Facebook"],
                notes: "Mirror comparison",
                status: "Not Started"
            },
            {
                name: "Diameter of Binary Tree",
                link: "https://leetcode.com/problems/diameter-of-binary-tree/",
                difficulty: "Easy",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Height calculation",
                status: "Not Started"
            },
            {
                name: "Lowest Common Ancestor",
                link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook", "Microsoft"],
                notes: "Recursive approach",
                status: "Not Started"
            },
            {
                name: "Binary Tree Level Order Traversal",
                link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Facebook"],
                notes: "BFS with queue",
                status: "Not Started"
            },
            {
                name: "Binary Tree Zigzag Level Order",
                link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Bloomberg"],
                notes: "BFS with alternating direction",
                status: "Not Started"
            },
            {
                name: "Balanced Binary Tree",
                link: "https://leetcode.com/problems/balanced-binary-tree/",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Check height difference",
                status: "Not Started"
            },
            {
                name: "Same Tree",
                link: "https://leetcode.com/problems/same-tree/",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Recursive comparison",
                status: "Not Started"
            },
            {
                name: "Invert Binary Tree",
                link: "https://leetcode.com/problems/invert-binary-tree/",
                difficulty: "Easy",
                companies: ["Google", "Amazon"],
                notes: "Swap left and right",
                status: "Not Started"
            },
            {
                name: "Path Sum",
                link: "https://leetcode.com/problems/path-sum/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft"],
                notes: "DFS with target sum",
                status: "Not Started"
            },
            {
                name: "Path Sum II",
                link: "https://leetcode.com/problems/path-sum-ii/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook"],
                notes: "Backtracking to find all paths",
                status: "Not Started"
            },
            {
                name: "Binary Tree Maximum Path Sum",
                link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Post-order traversal",
                status: "Not Started"
            },
            {
                name: "Construct Binary Tree from Preorder and Inorder",
                link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Google"],
                notes: "Recursive construction",
                status: "Not Started"
            },
            {
                name: "Construct Binary Tree from Inorder and Postorder",
                link: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "Recursive construction",
                status: "Not Started"
            },
            {
                name: "Flatten Binary Tree to Linked List",
                link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Facebook"],
                notes: "Morris traversal or recursion",
                status: "Not Started"
            },
            {
                name: "Serialize and Deserialize Binary Tree",
                link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "BFS or DFS encoding",
                status: "Not Started"
            },
            {
                name: "Binary Tree Right Side View",
                link: "https://leetcode.com/problems/binary-tree-right-side-view/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook"],
                notes: "Level order traversal",
                status: "Not Started"
            },
            {
                name: "Count Complete Tree Nodes",
                link: "https://leetcode.com/problems/count-complete-tree-nodes/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Binary search on tree",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Binary Search Trees",
        problems: [
            {
                name: "Search in BST",
                link: "https://leetcode.com/problems/search-in-a-binary-search-tree/",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Leverage BST property",
                status: "Not Started"
            },
            {
                name: "Validate Binary Search Tree",
                link: "https://leetcode.com/problems/validate-binary-search-tree/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Facebook"],
                notes: "Range validation",
                status: "Not Started"
            },
            {
                name: "Kth Smallest Element in BST",
                link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Uber"],
                notes: "Inorder traversal",
                status: "Not Started"
            },
            {
                name: "Lowest Common Ancestor of BST",
                link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook"],
                notes: "Use BST ordering",
                status: "Not Started"
            },
            {
                name: "Insert into BST",
                link: "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "Recursive or iterative insertion",
                status: "Not Started"
            },
            {
                name: "Delete Node in BST",
                link: "https://leetcode.com/problems/delete-node-in-a-bst/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Facebook"],
                notes: "Handle three cases",
                status: "Not Started"
            },
            {
                name: "Convert Sorted Array to BST",
                link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Choose middle as root",
                status: "Not Started"
            },
            {
                name: "Inorder Successor in BST",
                link: "https://leetcode.com/problems/inorder-successor-in-bst/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Facebook"],
                notes: "Use BST property",
                status: "Not Started"
            },
            {
                name: "Two Sum IV - Input is BST",
                link: "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Inorder + two pointer",
                status: "Not Started"
            },
            {
                name: "Recover Binary Search Tree",
                link: "https://leetcode.com/problems/recover-binary-search-tree/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Inorder traversal to find swapped",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Graphs",
        problems: [
            {
                name: "Number of Islands",
                link: "https://leetcode.com/problems/number-of-islands/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "DFS/BFS on grid",
                status: "Not Started"
            },
            {
                name: "Clone Graph",
                link: "https://leetcode.com/problems/clone-graph/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook", "Google"],
                notes: "DFS with hash map",
                status: "Not Started"
            },
            {
                name: "Course Schedule",
                link: "https://leetcode.com/problems/course-schedule/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Microsoft"],
                notes: "Cycle detection in directed graph",
                status: "Not Started"
            },
            {
                name: "Pacific Atlantic Water Flow",
                link: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Multi-source BFS",
                status: "Not Started"
            },
            {
                name: "Graph Valid Tree",
                link: "https://leetcode.com/problems/graph-valid-tree/",
                difficulty: "Medium",
                companies: ["Google", "Facebook", "Amazon"],
                notes: "Union-Find or DFS",
                status: "Not Started"
            },
            {
                name: "BFS of Graph",
                link: "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft", "Google"],
                notes: "Queue-based traversal",
                status: "Not Started"
            },
            {
                name: "DFS of Graph",
                link: "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft", "Google"],
                notes: "Stack or recursion",
                status: "Not Started"
            },
            {
                name: "Detect Cycle in Undirected Graph",
                link: "https://www.geeksforgeeks.org/detect-cycle-undirected-graph/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "DFS or Union-Find",
                status: "Not Started"
            },
            {
                name: "Detect Cycle in Directed Graph",
                link: "https://www.geeksforgeeks.org/detect-cycle-in-a-graph/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "DFS with recursion stack",
                status: "Not Started"
            },
            {
                name: "Topological Sort",
                link: "https://www.geeksforgeeks.org/topological-sorting/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Google"],
                notes: "DFS or Kahn's algorithm",
                status: "Not Started"
            },
            {
                name: "Course Schedule II",
                link: "https://leetcode.com/problems/course-schedule-ii/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Topological sort",
                status: "Not Started"
            },
            {
                name: "Shortest Path in Undirected Graph",
                link: "https://www.geeksforgeeks.org/shortest-path-unweighted-graph/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "BFS approach",
                status: "Not Started"
            },
            {
                name: "Dijkstra's Algorithm",
                link: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Microsoft"],
                notes: "Priority queue based",
                status: "Not Started"
            },
            {
                name: "Bellman Ford Algorithm",
                link: "https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Handles negative weights",
                status: "Not Started"
            },
            {
                name: "Floyd Warshall Algorithm",
                link: "https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "All pairs shortest path",
                status: "Not Started"
            },
            {
                name: "Minimum Spanning Tree (Prim's)",
                link: "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Greedy MST algorithm",
                status: "Not Started"
            },
            {
                name: "Minimum Spanning Tree (Kruskal's)",
                link: "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "Union-Find based MST",
                status: "Not Started"
            },
            {
                name: "Bipartite Graph",
                link: "https://leetcode.com/problems/is-graph-bipartite/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "BFS/DFS with coloring",
                status: "Not Started"
            },
            {
                name: "Strongly Connected Components",
                link: "https://www.geeksforgeeks.org/strongly-connected-components/",
                difficulty: "Hard",
                companies: ["Amazon", "Google"],
                notes: "Kosaraju's algorithm",
                status: "Not Started"
            },
            {
                name: "Bridges in Graph",
                link: "https://www.geeksforgeeks.org/bridge-in-a-graph/",
                difficulty: "Hard",
                companies: ["Amazon", "Google"],
                notes: "Tarjan's algorithm",
                status: "Not Started"
            },
            {
                name: "Articulation Points",
                link: "https://www.geeksforgeeks.org/articulation-points-or-cut-vertices-in-a-graph/",
                difficulty: "Hard",
                companies: ["Amazon", "Google"],
                notes: "DFS with low and discovery time",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Dynamic Programming",
        problems: [
            {
                name: "Climbing Stairs",
                link: "https://leetcode.com/problems/climbing-stairs/",
                difficulty: "Easy",
                companies: ["Amazon", "Google", "Adobe"],
                notes: "Fibonacci pattern",
                status: "Not Started"
            },
            {
                name: "House Robber",
                link: "https://leetcode.com/problems/house-robber/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "LinkedIn"],
                notes: "1D DP optimization",
                status: "Not Started"
            },
            {
                name: "Coin Change",
                link: "https://leetcode.com/problems/coin-change/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Unbounded knapsack",
                status: "Not Started"
            },
            {
                name: "Longest Increasing Subsequence",
                link: "https://leetcode.com/problems/longest-increasing-subsequence/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Google"],
                notes: "DP + Binary search O(n log n)",
                status: "Not Started"
            },
            {
                name: "Longest Common Subsequence",
                link: "https://leetcode.com/problems/longest-common-subsequence/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "2D DP classic",
                status: "Not Started"
            },
            {
                name: "0/1 Knapsack Problem",
                link: "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Goldman Sachs"],
                notes: "Classic DP problem",
                status: "Not Started"
            },
            {
                name: "Partition Equal Subset Sum",
                link: "https://leetcode.com/problems/partition-equal-subset-sum/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook", "Google"],
                notes: "Subset sum variation",
                status: "Not Started"
            },
            {
                name: "Minimum Path Sum",
                link: "https://leetcode.com/problems/minimum-path-sum/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Microsoft"],
                notes: "2D grid DP",
                status: "Not Started"
            },
            {
                name: "Unique Paths",
                link: "https://leetcode.com/problems/unique-paths/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Bloomberg"],
                notes: "Combinatorics or DP",
                status: "Not Started"
            },
            {
                name: "Unique Paths II",
                link: "https://leetcode.com/problems/unique-paths-ii/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Handle obstacles",
                status: "Not Started"
            },
            {
                name: "Triangle",
                link: "https://leetcode.com/problems/triangle/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Top-down or bottom-up DP",
                status: "Not Started"
            },
            {
                name: "House Robber II",
                link: "https://leetcode.com/problems/house-robber-ii/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "Circular array variation",
                status: "Not Started"
            },
            {
                name: "Decode Ways",
                link: "https://leetcode.com/problems/decode-ways/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook", "Google"],
                notes: "String DP",
                status: "Not Started"
            },
            {
                name: "Word Break",
                link: "https://leetcode.com/problems/word-break/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "DP with dictionary",
                status: "Not Started"
            },
            {
                name: "Word Break II",
                link: "https://leetcode.com/problems/word-break-ii/",
                difficulty: "Hard",
                companies: ["Amazon", "Google"],
                notes: "DP + backtracking",
                status: "Not Started"
            },
            {
                name: "Edit Distance",
                link: "https://leetcode.com/problems/edit-distance/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Classic string DP",
                status: "Not Started"
            },
            {
                name: "Distinct Subsequences",
                link: "https://leetcode.com/problems/distinct-subsequences/",
                difficulty: "Hard",
                companies: ["Amazon", "Google"],
                notes: "2D DP on strings",
                status: "Not Started"
            },
            {
                name: "Maximum Product Subarray",
                link: "https://leetcode.com/problems/maximum-product-subarray/",
                difficulty: "Medium",
                companies: ["Amazon", "LinkedIn"],
                notes: "Track min and max",
                status: "Not Started"
            },
            {
                name: "Palindromic Substrings",
                link: "https://leetcode.com/problems/palindromic-substrings/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook"],
                notes: "Expand around center or DP",
                status: "Not Started"
            },
            {
                name: "Longest Palindromic Subsequence",
                link: "https://leetcode.com/problems/longest-palindromic-subsequence/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "LCS with reverse",
                status: "Not Started"
            },
            {
                name: "Interleaving String",
                link: "https://leetcode.com/problems/interleaving-string/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "2D DP",
                status: "Not Started"
            },
            {
                name: "Regular Expression Matching",
                link: "https://leetcode.com/problems/regular-expression-matching/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Complex 2D DP",
                status: "Not Started"
            },
            {
                name: "Wildcard Matching",
                link: "https://leetcode.com/problems/wildcard-matching/",
                difficulty: "Hard",
                companies: ["Amazon", "Google"],
                notes: "2D DP with wildcards",
                status: "Not Started"
            },
            {
                name: "Best Time to Buy and Sell Stock III",
                link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
                difficulty: "Hard",
                companies: ["Amazon", "Facebook"],
                notes: "State machine DP",
                status: "Not Started"
            },
            {
                name: "Best Time to Buy and Sell Stock IV",
                link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",
                difficulty: "Hard",
                companies: ["Amazon", "Google"],
                notes: "Generalized stock DP",
                status: "Not Started"
            },
            {
                name: "Matrix Chain Multiplication",
                link: "https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/",
                difficulty: "Hard",
                companies: ["Amazon", "Microsoft", "Google"],
                notes: "Interval DP",
                status: "Not Started"
            },
            {
                name: "Egg Dropping Problem",
                link: "https://www.geeksforgeeks.org/egg-dropping-puzzle-dp-11/",
                difficulty: "Hard",
                companies: ["Amazon", "Google"],
                notes: "Binary search + DP",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Tries",
        problems: [
            {
                name: "Implement Trie",
                link: "https://leetcode.com/problems/implement-trie-prefix-tree/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Microsoft"],
                notes: "Prefix tree implementation",
                status: "Not Started"
            },
            {
                name: "Word Search II",
                link: "https://leetcode.com/problems/word-search-ii/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Airbnb"],
                notes: "Trie + backtracking",
                status: "Not Started"
            },
            {
                name: "Design Add and Search Words Data Structure",
                link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook"],
                notes: "Trie with wildcard search",
                status: "Not Started"
            },
            {
                name: "Replace Words",
                link: "https://leetcode.com/problems/replace-words/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Trie for prefix matching",
                status: "Not Started"
            },
            {
                name: "Longest Word in Dictionary",
                link: "https://leetcode.com/problems/longest-word-in-dictionary/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Trie traversal",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Heap / Priority Queue",
        problems: [
            {
                name: "Kth Largest Element",
                link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook", "LinkedIn"],
                notes: "Min heap of size k",
                status: "Not Started"
            },
            {
                name: "Top K Frequent Elements",
                link: "https://leetcode.com/problems/top-k-frequent-elements/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook", "Yelp"],
                notes: "Heap or bucket sort",
                status: "Not Started"
            },
            {
                name: "Merge K Sorted Lists",
                link: "https://leetcode.com/problems/merge-k-sorted-lists/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Min heap approach",
                status: "Not Started"
            },
            {
                name: "Find Median from Data Stream",
                link: "https://leetcode.com/problems/find-median-from-data-stream/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Two heaps approach",
                status: "Not Started"
            },
            {
                name: "Kth Smallest Element in Sorted Matrix",
                link: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Min heap or binary search",
                status: "Not Started"
            },
            {
                name: "Reorganize String",
                link: "https://leetcode.com/problems/reorganize-string/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Max heap greedy",
                status: "Not Started"
            },
            {
                name: "Task Scheduler",
                link: "https://leetcode.com/problems/task-scheduler/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook", "Bloomberg"],
                notes: "Heap or greedy",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Bit Manipulation",
        problems: [
            {
                name: "Number of 1 Bits",
                link: "https://leetcode.com/problems/number-of-1-bits/",
                difficulty: "Easy",
                companies: ["Amazon", "Google", "Apple"],
                notes: "Brian Kernighan's algorithm",
                status: "Not Started"
            },
            {
                name: "Power of Two",
                link: "https://leetcode.com/problems/power-of-two/",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "n & (n-1) == 0",
                status: "Not Started"
            },
            {
                name: "Counting Bits",
                link: "https://leetcode.com/problems/counting-bits/",
                difficulty: "Easy",
                companies: ["Amazon", "Facebook"],
                notes: "DP with bit manipulation",
                status: "Not Started"
            },
            {
                name: "Reverse Bits",
                link: "https://leetcode.com/problems/reverse-bits/",
                difficulty: "Easy",
                companies: ["Amazon", "Apple"],
                notes: "Bit by bit reversal",
                status: "Not Started"
            },
            {
                name: "Single Number II",
                link: "https://leetcode.com/problems/single-number-ii/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Bit manipulation with count",
                status: "Not Started"
            },
            {
                name: "Single Number III",
                link: "https://leetcode.com/problems/single-number-iii/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook"],
                notes: "XOR and partition",
                status: "Not Started"
            },
            {
                name: "Bitwise AND of Numbers Range",
                link: "https://leetcode.com/problems/bitwise-and-of-numbers-range/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Find common prefix",
                status: "Not Started"
            },
            {
                name: "Maximum XOR of Two Numbers",
                link: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Trie or greedy",
                status: "Not Started"
            },
            {
                name: "Subsets using Bit Manipulation",
                link: "https://leetcode.com/problems/subsets/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook"],
                notes: "Iterate through 2^n combinations",
                status: "Not Started"
            },
            {
                name: "Power Set",
                link: "https://practice.geeksforgeeks.org/problems/power-set4302/1",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Generate all subsets",
                status: "Not Started"
            },
            {
                name: "Find XOR of Numbers from L to R",
                link: "https://practice.geeksforgeeks.org/problems/find-xor-of-numbers-from-l-to-r/1",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft"],
                notes: "XOR pattern recognition",
                status: "Not Started"
            },
            {
                name: "Find Two Numbers with Odd Occurrences",
                link: "https://practice.geeksforgeeks.org/problems/two-numbers-with-odd-occurrences5846/1",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "XOR and bit masking",
                status: "Not Started"
            },
            {
                name: "Count Total Set Bits",
                link: "https://practice.geeksforgeeks.org/problems/count-total-set-bits-1587115620/1",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "Pattern in set bits",
                status: "Not Started"
            },
            {
                name: "Divide Two Integers",
                link: "https://leetcode.com/problems/divide-two-integers/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook", "Microsoft"],
                notes: "Bit manipulation division",
                status: "Not Started"
            },
            {
                name: "Gray Code",
                link: "https://leetcode.com/problems/gray-code/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "XOR pattern",
                status: "Not Started"
            },
            {
                name: "Maximum XOR of Two Numbers",
                link: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Trie or bit manipulation",
                status: "Not Started"
            },
            {
                name: "Prime Factors",
                link: "https://practice.geeksforgeeks.org/problems/prime-factors5052/1",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft"],
                notes: "Number theory",
                status: "Not Started"
            },
            {
                name: "All Divisors of a Number",
                link: "https://practice.geeksforgeeks.org/problems/all-divisors-of-a-number/1",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Efficient divisor finding",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Sliding Window",
        problems: [
            {
                name: "Maximum Sum Subarray of Size K",
                link: "https://www.geeksforgeeks.org/find-maximum-minimum-sum-subarray-size-k/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft"],
                notes: "Fixed size window",
                status: "Not Started"
            },
            {
                name: "Longest Substring with K Distinct Characters",
                link: "https://www.geeksforgeeks.org/find-the-longest-substring-with-k-unique-characters-in-a-given-string/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Variable size window",
                status: "Not Started"
            },
            {
                name: "Minimum Window Substring",
                link: "https://leetcode.com/problems/minimum-window-substring/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Two pointer with hash map",
                status: "Not Started"
            },
            {
                name: "Permutation in String",
                link: "https://leetcode.com/problems/permutation-in-string/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "Fixed window with frequency",
                status: "Not Started"
            },
            {
                name: "Find All Anagrams in String",
                link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook"],
                notes: "Sliding window with count",
                status: "Not Started"
            },
            {
                name: "Longest Repeating Character Replacement",
                link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Window with k replacements",
                status: "Not Started"
            },
            {
                name: "Max Consecutive Ones III",
                link: "https://leetcode.com/problems/max-consecutive-ones-iii/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Sliding window with k flips",
                status: "Not Started"
            },
            {
                name: "Fruit Into Baskets",
                link: "https://leetcode.com/problems/fruit-into-baskets/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Longest subarray with 2 distinct",
                status: "Not Started"
            },
            {
                name: "Longest Substring Without Repeating Characters",
                link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Classic sliding window",
                status: "Not Started"
            },
            {
                name: "Subarrays with K Different Integers",
                link: "https://leetcode.com/problems/subarrays-with-k-different-integers/",
                difficulty: "Hard",
                companies: ["Amazon", "Google"],
                notes: "Count subarrays",
                status: "Not Started"
            },
            {
                name: "Sliding Window Maximum",
                link: "https://leetcode.com/problems/sliding-window-maximum/",
                difficulty: "Hard",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Deque approach",
                status: "Not Started"
            },
            {
                name: "Count Number of Nice Subarrays",
                link: "https://leetcode.com/problems/count-number-of-nice-subarrays/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Prefix sum with sliding window",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Two Pointers",
        problems: [
            {
                name: "Container With Most Water",
                link: "https://leetcode.com/problems/container-with-most-water/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Greedy two pointer",
                status: "Not Started"
            },
            {
                name: "3Sum Closest",
                link: "https://leetcode.com/problems/3sum-closest/",
                difficulty: "Medium",
                companies: ["Amazon", "Bloomberg"],
                notes: "Sort + two pointer",
                status: "Not Started"
            },
            {
                name: "Remove Duplicates from Sorted Array II",
                link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "Two pointer with count",
                status: "Not Started"
            },
            {
                name: "Squares of Sorted Array",
                link: "https://leetcode.com/problems/squares-of-a-sorted-array/",
                difficulty: "Easy",
                companies: ["Amazon", "Facebook"],
                notes: "Two pointer from ends",
                status: "Not Started"
            },
            {
                name: "Boats to Save People",
                link: "https://leetcode.com/problems/boats-to-save-people/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Greedy two pointer",
                status: "Not Started"
            },
            {
                name: "Partition Labels",
                link: "https://leetcode.com/problems/partition-labels/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Greedy partitioning",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Hashing",
        problems: [
            {
                name: "Two Sum",
                link: "https://leetcode.com/problems/two-sum/",
                difficulty: "Easy",
                companies: ["Amazon", "Google", "Apple"],
                notes: "Hash map for O(n) solution",
                status: "Not Started"
            },
            {
                name: "Group Anagrams",
                link: "https://leetcode.com/problems/group-anagrams/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook", "Google"],
                notes: "Hash map with sorted key",
                status: "Not Started"
            },
            {
                name: "Longest Consecutive Sequence",
                link: "https://leetcode.com/problems/longest-consecutive-sequence/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Hash set for O(n) solution",
                status: "Not Started"
            },
            {
                name: "Subarray Sum Equals K",
                link: "https://leetcode.com/problems/subarray-sum-equals-k/",
                difficulty: "Medium",
                companies: ["Facebook", "Amazon"],
                notes: "Prefix sum + hash map",
                status: "Not Started"
            },
            {
                name: "Longest Substring Without Repeating Characters",
                link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Sliding window + hash set",
                status: "Not Started"
            },
            {
                name: "First Missing Positive",
                link: "https://leetcode.com/problems/first-missing-positive/",
                difficulty: "Hard",
                companies: ["Amazon", "Google"],
                notes: "In-place hashing",
                status: "Not Started"
            },
            {
                name: "Count Subarrays with Given XOR",
                link: "https://www.geeksforgeeks.org/count-number-subarrays-given-xor/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "Prefix XOR + hash map",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Math & Number Theory",
        problems: [
            {
                name: "Palindrome Number",
                link: "https://leetcode.com/problems/palindrome-number/",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Reverse number comparison",
                status: "Not Started"
            },
            {
                name: "Reverse Integer",
                link: "https://leetcode.com/problems/reverse-integer/",
                difficulty: "Medium",
                companies: ["Amazon", "Apple"],
                notes: "Handle overflow",
                status: "Not Started"
            },
            {
                name: "Power of Two",
                link: "https://leetcode.com/problems/power-of-two/",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Bit manipulation",
                status: "Not Started"
            },
            {
                name: "Happy Number",
                link: "https://leetcode.com/problems/happy-number/",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Cycle detection",
                status: "Not Started"
            },
            {
                name: "Excel Sheet Column Number",
                link: "https://leetcode.com/problems/excel-sheet-column-number/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft"],
                notes: "Base 26 conversion",
                status: "Not Started"
            },
            {
                name: "Factorial Trailing Zeroes",
                link: "https://leetcode.com/problems/factorial-trailing-zeroes/",
                difficulty: "Medium",
                companies: ["Amazon", "Bloomberg"],
                notes: "Count factors of 5",
                status: "Not Started"
            },
            {
                name: "GCD of Two Numbers",
                link: "https://www.geeksforgeeks.org/c-program-find-gcd-hcf-two-numbers/",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Euclidean algorithm",
                status: "Not Started"
            },
            {
                name: "LCM of Two Numbers",
                link: "https://www.geeksforgeeks.org/program-to-find-lcm-of-two-numbers/",
                difficulty: "Easy",
                companies: ["Amazon", "Microsoft"],
                notes: "Using GCD formula",
                status: "Not Started"
            },
            {
                name: "Prime Factorization",
                link: "https://www.geeksforgeeks.org/print-all-prime-factors-of-a-given-number/",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Sieve approach",
                status: "Not Started"
            },
            {
                name: "Sieve of Eratosthenes",
                link: "https://www.geeksforgeeks.org/sieve-of-eratosthenes/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "Find all primes up to n",
                status: "Not Started"
            },
            {
                name: "Count Primes",
                link: "https://leetcode.com/problems/count-primes/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "Sieve of Eratosthenes",
                status: "Not Started"
            },
            {
                name: "Pow(x, n)",
                link: "https://leetcode.com/problems/powx-n/",
                difficulty: "Medium",
                companies: ["Google", "Facebook"],
                notes: "Binary exponentiation",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Matrix",
        problems: [
            {
                name: "Spiral Matrix",
                link: "https://leetcode.com/problems/spiral-matrix/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Microsoft"],
                notes: "Layer by layer traversal",
                status: "Not Started"
            },
            {
                name: "Rotate Image",
                link: "https://leetcode.com/problems/rotate-image/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Apple"],
                notes: "Transpose + reverse",
                status: "Not Started"
            },
            {
                name: "Set Matrix Zeroes",
                link: "https://leetcode.com/problems/set-matrix-zeroes/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft", "Facebook"],
                notes: "In-place marking",
                status: "Not Started"
            },
            {
                name: "Search a 2D Matrix",
                link: "https://leetcode.com/problems/search-a-2d-matrix/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Binary search on matrix",
                status: "Not Started"
            },
            {
                name: "Search a 2D Matrix II",
                link: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Apple"],
                notes: "Start from top-right",
                status: "Not Started"
            },
            {
                name: "Valid Sudoku",
                link: "https://leetcode.com/problems/valid-sudoku/",
                difficulty: "Medium",
                companies: ["Amazon", "Apple"],
                notes: "Hash set validation",
                status: "Not Started"
            },
            {
                name: "Game of Life",
                link: "https://leetcode.com/problems/game-of-life/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "In-place state encoding",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Segment Tree",
        problems: [
            {
                name: "Range Sum Query - Mutable",
                link: "https://leetcode.com/problems/range-sum-query-mutable/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Segment tree basics",
                status: "Not Started"
            },
            {
                name: "Range Minimum Query",
                link: "https://www.geeksforgeeks.org/segment-tree-set-1-range-minimum-query/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "Segment tree for RMQ",
                status: "Not Started"
            },
            {
                name: "Count of Range Sum",
                link: "https://leetcode.com/problems/count-of-range-sum/",
                difficulty: "Hard",
                companies: ["Google", "Amazon"],
                notes: "Merge sort + segment tree",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Disjoint Set (Union-Find)",
        problems: [
            {
                name: "Number of Provinces",
                link: "https://leetcode.com/problems/number-of-provinces/",
                difficulty: "Medium",
                companies: ["Amazon", "Google", "Facebook"],
                notes: "Union-Find basics",
                status: "Not Started"
            },
            {
                name: "Redundant Connection",
                link: "https://leetcode.com/problems/redundant-connection/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Detect cycle with Union-Find",
                status: "Not Started"
            },
            {
                name: "Accounts Merge",
                link: "https://leetcode.com/problems/accounts-merge/",
                difficulty: "Medium",
                companies: ["Amazon", "Facebook", "Google"],
                notes: "Union-Find with strings",
                status: "Not Started"
            },
            {
                name: "Most Stones Removed",
                link: "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Union-Find on coordinates",
                status: "Not Started"
            },
            {
                name: "Number of Operations to Make Network Connected",
                link: "https://leetcode.com/problems/number-of-operations-to-make-network-connected/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "Count components",
                status: "Not Started"
            },
            {
                name: "Satisfiability of Equality Equations",
                link: "https://leetcode.com/problems/satisfiability-of-equality-equations/",
                difficulty: "Medium",
                companies: ["Google", "Amazon"],
                notes: "Union-Find with equations",
                status: "Not Started"
            },
            {
                name: "Smallest String With Swaps",
                link: "https://leetcode.com/problems/smallest-string-with-swaps/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Union-Find + sorting",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "String Algorithms",
        problems: [
            {
                name: "KMP Algorithm",
                link: "https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/",
                difficulty: "Hard",
                companies: ["Google", "Amazon", "Microsoft"],
                notes: "Pattern matching in O(n+m)",
                status: "Not Started"
            },
            {
                name: "Rabin Karp Algorithm",
                link: "https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/",
                difficulty: "Medium",
                companies: ["Google", "Amazon"],
                notes: "Rolling hash for pattern search",
                status: "Not Started"
            },
            {
                name: "Z Algorithm",
                link: "https://www.geeksforgeeks.org/z-algorithm-linear-time-pattern-searching-algorithm/",
                difficulty: "Hard",
                companies: ["Google", "Facebook"],
                notes: "Linear time pattern matching",
                status: "Not Started"
            },
            {
                name: "Manacher's Algorithm",
                link: "https://www.geeksforgeeks.org/manachers-algorithm-linear-time-longest-palindromic-substring-part-1/",
                difficulty: "Hard",
                companies: ["Google", "Amazon"],
                notes: "Longest palindromic substring in O(n)",
                status: "Not Started"
            },
            {
                name: "Aho-Corasick Algorithm",
                link: "https://www.geeksforgeeks.org/aho-corasick-algorithm-pattern-searching/",
                difficulty: "Hard",
                companies: ["Google", "Microsoft"],
                notes: "Multiple pattern matching",
                status: "Not Started"
            },
            {
                name: "Suffix Array",
                link: "https://www.geeksforgeeks.org/suffix-array-set-1-introduction/",
                difficulty: "Hard",
                companies: ["Google", "Amazon"],
                notes: "String preprocessing structure",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Advanced DP",
        problems: [
            {
                name: "Digit DP - Count Numbers",
                link: "https://www.geeksforgeeks.org/digit-dp-introduction/",
                difficulty: "Hard",
                companies: ["Google", "Amazon"],
                notes: "DP on digits",
                status: "Not Started"
            },
            {
                name: "DP on Trees - Tree Distances",
                link: "https://www.geeksforgeeks.org/dynamic-programming-trees-set-1/",
                difficulty: "Hard",
                companies: ["Google", "Facebook"],
                notes: "DP with tree structure",
                status: "Not Started"
            },
            {
                name: "Bitmask DP - Traveling Salesman",
                link: "https://www.geeksforgeeks.org/travelling-salesman-problem-set-1/",
                difficulty: "Hard",
                companies: ["Google", "Amazon", "Microsoft"],
                notes: "DP with bitmasks",
                status: "Not Started"
            },
            {
                name: "SOS DP - Sum over Subsets",
                link: "https://www.geeksforgeeks.org/sum-over-subsets-dynamic-programming/",
                difficulty: "Hard",
                companies: ["Google", "Facebook"],
                notes: "Advanced bitmask DP",
                status: "Not Started"
            },
            {
                name: "DP with Convex Hull Trick",
                link: "https://www.geeksforgeeks.org/convex-hull-trick/",
                difficulty: "Hard",
                companies: ["Google", "TopCoder"],
                notes: "Optimization technique",
                status: "Not Started"
            },
            {
                name: "Divide and Conquer DP",
                link: "https://www.geeksforgeeks.org/divide-and-conquer-optimization-in-dynamic-programming/",
                difficulty: "Hard",
                companies: ["Google", "Facebook"],
                notes: "DP optimization",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Fenwick Tree (BIT)",
        problems: [
            {
                name: "Range Sum Query - Mutable (BIT)",
                link: "https://leetcode.com/problems/range-sum-query-mutable/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Binary Indexed Tree basics",
                status: "Not Started"
            },
            {
                name: "Count of Smaller Numbers After Self",
                link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
                difficulty: "Hard",
                companies: ["Google", "Amazon"],
                notes: "BIT with coordinate compression",
                status: "Not Started"
            },
            {
                name: "Range Sum Query 2D - Mutable",
                link: "https://leetcode.com/problems/range-sum-query-2d-mutable/",
                difficulty: "Hard",
                companies: ["Google", "Facebook"],
                notes: "2D BIT",
                status: "Not Started"
            },
            {
                name: "Count Inversions using BIT",
                link: "https://www.geeksforgeeks.org/count-inversions-array-set-3-using-bit/",
                difficulty: "Medium",
                companies: ["Amazon", "Microsoft"],
                notes: "BIT application",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Game Theory",
        problems: [
            {
                name: "Nim Game",
                link: "https://leetcode.com/problems/nim-game/",
                difficulty: "Easy",
                companies: ["Amazon", "Google"],
                notes: "Basic game theory",
                status: "Not Started"
            },
            {
                name: "Stone Game",
                link: "https://leetcode.com/problems/stone-game/",
                difficulty: "Medium",
                companies: ["Amazon", "Google"],
                notes: "Minimax strategy",
                status: "Not Started"
            },
            {
                name: "Predict the Winner",
                link: "https://leetcode.com/problems/predict-the-winner/",
                difficulty: "Medium",
                companies: ["Google", "Amazon"],
                notes: "Game theory DP",
                status: "Not Started"
            },
            {
                name: "Grundy Numbers",
                link: "https://www.geeksforgeeks.org/combinatorial-game-theory-set-2-game-nim/",
                difficulty: "Hard",
                companies: ["Google", "TopCoder"],
                notes: "Sprague-Grundy theorem",
                status: "Not Started"
            }
        ]
    },
    {
        topic: "Computational Geometry",
        problems: [
            {
                name: "Convex Hull",
                link: "https://www.geeksforgeeks.org/convex-hull-set-1-jarviss-algorithm-or-wrapping/",
                difficulty: "Hard",
                companies: ["Google", "Amazon"],
                notes: "Graham scan algorithm",
                status: "Not Started"
            },
            {
                name: "Line Intersection",
                link: "https://www.geeksforgeeks.org/check-if-two-given-line-segments-intersect/",
                difficulty: "Medium",
                companies: ["Google", "Facebook"],
                notes: "Computational geometry basics",
                status: "Not Started"
            },
            {
                name: "Closest Pair of Points",
                link: "https://www.geeksforgeeks.org/closest-pair-of-points-using-divide-and-conquer-algorithm/",
                difficulty: "Hard",
                companies: ["Google", "Amazon"],
                notes: "Divide and conquer",
                status: "Not Started"
            },
            {
                name: "Point in Polygon",
                link: "https://www.geeksforgeeks.org/how-to-check-if-a-given-point-lies-inside-a-polygon/",
                difficulty: "Medium",
                companies: ["Google", "Uber"],
                notes: "Ray casting algorithm",
                status: "Not Started"
            }
        ]
    }
];

