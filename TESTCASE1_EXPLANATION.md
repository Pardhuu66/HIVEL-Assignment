# Test Case 1 - Detailed Decoding Explanation

## 📋 Overview

**Test Case 1** has:
- **n = 4** (total roots provided)
- **k = 3** (minimum roots required)
- **Polynomial Degree = 2** (since k = degree + 1) - This is a **Quadratic Polynomial**

---

## 🔢 Step-by-Step Decoding

### **Point 1: Key "1"**
```json
"1": {
    "base": "10",
    "value": "4"
}
```

**Decoding:**
- **x = 1** (from the key "1")
- **Encoded value** = "4" in base 10 (decimal)
- **Base 10 Conversion**:
  ```
  "4" in base 10 = 4
  ```
- **Calculation**: 4₁₀ = **4**
- **Result**: **(1, 4)** ✓

---

### **Point 2: Key "2"**
```json
"2": {
    "base": "2",
    "value": "111"
}
```

**Decoding:**
- **x = 2** (from the key "2")
- **Encoded value** = "111" in base 2 (binary)
- **Base 2 Conversion** (Binary to Decimal):
  ```
  "111" in base 2
  
  Position:  2   1   0
  Digit:     1   1   1
  Value:    2²  2¹  2⁰
  
  = 1 × 2² + 1 × 2¹ + 1 × 2⁰
  = 1 × 4  + 1 × 2  + 1 × 1
  = 4 + 2 + 1
  = 7
  ```
- **Result**: **(2, 7)** ✓

---

### **Point 3: Key "3"**
```json
"3": {
    "base": "10",
    "value": "12"
}
```

**Decoding:**
- **x = 3** (from the key "3")
- **Encoded value** = "12" in base 10 (decimal)
- **Base 10 Conversion**:
  ```
  "12" in base 10 = 12
  ```
- **Calculation**: 12₁₀ = **12**
- **Result**: **(3, 12)** ✓

---

### **Point 4: Key "6"**
```json
"6": {
    "base": "4",
    "value": "213"
}
```

**Decoding:**
- **x = 6** (from the key "6")
- **Encoded value** = "213" in base 4 (quaternary)
- **Base 4 uses digits**: 0, 1, 2, 3
- **Base 4 Conversion** (Quaternary to Decimal):
  ```
  "213" in base 4
  
  Position:  2   1   0
  Digit:     2   1   3
  Value:    4²  4¹  4⁰
  
  = 2 × 4² + 1 × 4¹ + 3 × 4⁰
  = 2 × 16 + 1 × 4  + 3 × 1
  = 32 + 4 + 3
  = 39
  ```
- **Result**: **(6, 39)** ✓

---

## 📊 Summary Table - All 4 Points

| Key (x) | Base | Encoded Value | Conversion | Decoded (y) | Point |
|---------|------|---------------|------------|-------------|-------|
| 1 | 10 (Decimal) | "4" | 4₁₀ | 4 | (1, 4) |
| 2 | 2 (Binary) | "111" | 1×4 + 1×2 + 1×1 | 7 | (2, 7) |
| 3 | 10 (Decimal) | "12" | 12₁₀ | 12 | (3, 12) |
| 6 | 4 (Quaternary) | "213" | 2×16 + 1×4 + 3×1 | 39 | (6, 39) |

---

## 🎯 Which Points Are Used?

Since **k = 3**, we only need the **first 3 points** to solve for the polynomial:

✅ **Used for calculation:**
- Point 1: (1, 4)
- Point 2: (2, 7)
- Point 3: (3, 12)

✨ **Extra point (for verification):**
- Point 4: (6, 39) - Not needed but can verify our answer is correct!

---

## 🧮 Number Base Reference

### Base 2 (Binary)
- **Digits**: 0, 1
- **Example**: 111₂ = 7₁₀

### Base 4 (Quaternary)
- **Digits**: 0, 1, 2, 3
- **Example**: 213₄ = 39₁₀

### Base 10 (Decimal)
- **Digits**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
- **Example**: 12₁₀ = 12₁₀

---

## 💻 JavaScript Code

Our code uses JavaScript's `parseInt()` function to convert from any base:

```javascript
function decodeValue(base, value) {
    return parseInt(value, parseInt(base));
}

// Examples:
parseInt("4", 10)    // → 4
parseInt("111", 2)   // → 7 (binary to decimal)
parseInt("12", 10)   // → 12
parseInt("213", 4)   // → 39 (quaternary to decimal)
```

---

## 🔍 Finding the Polynomial

With the decoded points (1,4), (2,7), (3,12), we can find the quadratic polynomial:

**Polynomial Form**: y = ax² + bx + c

### Setting up equations:

1. When x=1: a(1)² + b(1) + c = 4
   - **a + b + c = 4** ... (Equation 1)

2. When x=2: a(2)² + b(2) + c = 7
   - **4a + 2b + c = 7** ... (Equation 2)

3. When x=3: a(3)² + b(3) + c = 12
   - **9a + 3b + c = 12** ... (Equation 3)

### Solving the system:

**Subtract Equation 1 from Equation 2:**
```
(4a + 2b + c) - (a + b + c) = 7 - 4
3a + b = 3  ... (Equation 4)
```

**Subtract Equation 2 from Equation 3:**
```
(9a + 3b + c) - (4a + 2b + c) = 12 - 7
5a + b = 5  ... (Equation 5)
```

**Subtract Equation 4 from Equation 5:**
```
(5a + b) - (3a + b) = 5 - 3
2a = 2
a = 1 ✓
```

**Substitute a=1 into Equation 4:**
```
3(1) + b = 3
3 + b = 3
b = 0 ✓
```

**Substitute a=1 and b=0 into Equation 1:**
```
1 + 0 + c = 4
c = 3 ✓
```

### **Final Polynomial:**
```
y = 1x² + 0x + 3
y = x² + 3
```

### **Constant Term C = 3** ✅

---

## ✅ Verification

Let's verify our polynomial **y = x² + 3** with all 4 points:

### Point 1: (1, 4)
```
y = (1)² + 3 = 1 + 3 = 4 ✓
```

### Point 2: (2, 7)
```
y = (2)² + 3 = 4 + 3 = 7 ✓
```

### Point 3: (3, 12)
```
y = (3)² + 3 = 9 + 3 = 12 ✓
```

### Point 4: (6, 39) - Bonus Verification!
```
y = (6)² + 3 = 36 + 3 = 39 ✓
```

**All points match perfectly!** 🎉

---

## 📈 Visual Representation

```
Point Plot:
    
    (6, 39) ●
              ╱
             ╱
            ╱
      (3, 12) ●
         ╱
        ╱
  (2, 7) ●
      ╱
(1, 4) ●

Polynomial: y = x² + 3
Constant C = 3
```

---

## 🎓 Key Takeaways

1. **Base Conversion**: Used `parseInt()` to convert from binary, quaternary, and decimal
2. **Points Decoded**: Successfully decoded all 4 points
3. **Polynomial Found**: y = x² + 3 (quadratic)
4. **Constant C**: **3**
5. **Verification**: All 4 points satisfy the equation perfectly!

---

## 🚀 Running the Code

```bash
# Run the solver
node solver.js testcase1.json

# Run verification
node verify.js testcase1.json
```

**Expected Output:**
```
Constant Term C: 3
```

---

## ✨ Summary

| Property | Value |
|----------|-------|
| Total Points (n) | 4 |
| Points Used (k) | 3 |
| Polynomial Degree | 2 (Quadratic) |
| Polynomial Equation | y = x² + 3 |
| **Constant Term C** | **3** ✅ |
| Verification Status | All points match ✓ |

---

**Status:** ✅ **VERIFIED AND CORRECT**
