# Test Case 2 - Detailed Decoding Explanation

## 📋 Overview

**Test Case 2** has:
- **n = 10** (total roots provided)
- **k = 7** (minimum roots required)
- **Polynomial Degree = 6** (since k = degree + 1)

---

## 🔢 Step-by-Step Decoding

### **Point 1: Key "1"**
```json
"1": {
    "base": "6",
    "value": "13444211440455345511"
}
```

- **x = 1** (from the key)
- **Encoded value** = "13444211440455345511" in base 6
- **Decoding Process**:
  - Using `parseInt("13444211440455345511", 6)`
  - Each digit position: 1×6¹⁹ + 3×6¹⁸ + 4×6¹⁷ + ... (very large calculation)
- **Result (y)** = **995,085,094,601,491**
- **Point**: **(1, 995085094601491)**

---

### **Point 2: Key "2"**
```json
"2": {
    "base": "15",
    "value": "aed7015a346d635"
}
```

- **x = 2** (from the key)
- **Encoded value** = "aed7015a346d635" in base 15 (uses digits 0-9, a-e)
- **Base 15 digit values**: a=10, b=11, c=12, d=13, e=14
- **Decoding Process**:
  - a = 10, e = 14, d = 13, etc.
  - Using `parseInt("aed7015a346d635", 15)`
- **Result (y)** = **320,923,294,898,495,940**
- **Point**: **(2, 320923294898495940)**

---

### **Point 3: Key "3"**
```json
"3": {
    "base": "15",
    "value": "6aeeb69631c227c"
}
```

- **x = 3** (from the key)
- **Encoded value** = "6aeeb69631c227c" in base 15
- **Decoding**: `parseInt("6aeeb69631c227c", 15)`
- **Result (y)** = **196,563,650,089,608,580**
- **Point**: **(3, 196563650089608580)**

---

### **Point 4: Key "4"**
```json
"4": {
    "base": "16",
    "value": "e1b5e05623d881f"
}
```

- **x = 4** (from the key)
- **Encoded value** = "e1b5e05623d881f" in base 16 (hexadecimal)
- **Hex digit values**: a=10, b=11, c=12, d=13, e=14, f=15
- **Decoding**: `parseInt("e1b5e05623d881f", 16)`
- **Result (y)** = **1,016,509,518,118,225,900**
- **Point**: **(4, 1016509518118225900)**

---

### **Point 5: Key "5"**
```json
"5": {
    "base": "8",
    "value": "316034514573652620673"
}
```

- **x = 5** (from the key)
- **Encoded value** = "316034514573652620673" in base 8 (octal)
- **Decoding**: `parseInt("316034514573652620673", 8)`
- **Calculation**: 3×8²⁰ + 1×8¹⁹ + 6×8¹⁸ + ... (very large)
- **Result (y)** = **3,711,974,121,218,450,000**
- **Point**: **(5, 3711974121218450000)**

---

### **Point 6: Key "6"**
```json
"6": {
    "base": "3",
    "value": "2122212201122002221120200210011020220200"
}
```

- **x = 6** (from the key)
- **Encoded value** = "2122212201122002221120200210011020220200" in base 3 (ternary)
- **Base 3**: Only uses digits 0, 1, 2
- **Decoding**: `parseInt("2122212201122002221120200210011020220200", 3)`
- **Result (y)** = **10,788,619,898,233,491,000**
- **Point**: **(6, 10788619898233491000)**

---

### **Point 7: Key "7"**
```json
"7": {
    "base": "3",
    "value": "20120221122211000100210021102001201112121"
}
```

- **x = 7** (from the key)
- **Encoded value** = "20120221122211000100210021102001201112121" in base 3 (ternary)
- **Decoding**: `parseInt("20120221122211000100210021102001201112121", 3)`
- **Result (y)** = **26,709,394,976,508,342,000**
- **Point**: **(7, 26709394976508342000)**

---

### **Point 8: Key "8"** (Not used in calculation, but decoded)
```json
"8": {
    "base": "6",
    "value": "20220554335330240002224253"
}
```

- **x = 8**
- **Encoded value** = "20220554335330240002224253" in base 6
- **Decoding**: `parseInt("20220554335330240002224253", 6)`
- **Result (y)** = **58,725,075,613,853,300,000**
- **Point**: **(8, 58725075613853300000)**

---

### **Point 9: Key "9"** (Not used in calculation, but decoded)
```json
"9": {
    "base": "12",
    "value": "45153788322a1255483"
}
```

- **x = 9**
- **Encoded value** = "45153788322a1255483" in base 12 (duodecimal)
- **Base 12 digit values**: a=10, b=11
- **Decoding**: `parseInt("45153788322a1255483", 12)`
- **Result (y)** = **117,852,986,202,006,520,000**
- **Point**: **(9, 117852986202006520000)**

---

### **Point 10: Key "10"** (Not used in calculation, but decoded)
```json
"10": {
    "base": "7",
    "value": "1101613130313526312514143"
}
```

- **x = 10**
- **Encoded value** = "1101613130313526312514143" in base 7
- **Decoding**: `parseInt("1101613130313526312514143", 7)`
- **Result (y)** = **220,003,896,831,595,300,000**
- **Point**: **(10, 220003896831595300000)**

---

## 📊 Summary Table - All 10 Points

| Key (x) | Base | Encoded Value | Decoded (y) |
|---------|------|---------------|-------------|
| 1 | 6 | 13444211440455345511 | 995,085,094,601,491 |
| 2 | 15 | aed7015a346d635 | 320,923,294,898,495,940 |
| 3 | 15 | 6aeeb69631c227c | 196,563,650,089,608,580 |
| 4 | 16 | e1b5e05623d881f | 1,016,509,518,118,225,900 |
| 5 | 8 | 316034514573652620673 | 3,711,974,121,218,450,000 |
| 6 | 3 | 2122212201122002221120200210011020220200 | 10,788,619,898,233,491,000 |
| 7 | 3 | 20120221122211000100210021102001201112121 | 26,709,394,976,508,342,000 |
| 8 | 6 | 20220554335330240002224253 | 58,725,075,613,853,300,000 |
| 9 | 12 | 45153788322a1255483 | 117,852,986,202,006,520,000 |
| 10 | 7 | 1101613130313526312514143 | 220,003,896,831,595,300,000 |

---

## 🎯 Which Points Are Used?

Since **k = 7**, we only need the **first 7 points** to solve for the polynomial:

✅ **Used for calculation:**
- Point 1: (1, 995085094601491)
- Point 2: (2, 320923294898495940)
- Point 3: (3, 196563650089608580)
- Point 4: (4, 1016509518118225900)
- Point 5: (5, 3711974121218450000)
- Point 6: (6, 10788619898233491000)
- Point 7: (7, 26709394976508342000)

❌ **Not used (but available for verification):**
- Point 8: (8, 58725075613853300000)
- Point 9: (9, 117852986202006520000)
- Point 10: (10, 220003896831595300000)

---

## 🔍 Base Conversion Examples

### Example 1: Base 6 (Point 1)
```
"13444211440455345511" in base 6

= 1×6¹⁹ + 3×6¹⁸ + 4×6¹⁷ + 4×6¹⁶ + ... + 1×6¹ + 1×6⁰
= Very large calculation
= 995,085,094,601,491
```

### Example 2: Base 15 (Point 2)
```
"aed7015a346d635" in base 15
where: a=10, e=14, d=13

= 10×15¹⁴ + 14×15¹³ + 13×15¹² + 7×15¹¹ + ...
= 320,923,294,898,495,940
```

### Example 3: Base 3 (Point 6)
```
"2122212201122002221120200210011020220200" in base 3

= 2×3³⁹ + 1×3³⁸ + 2×3³⁷ + 2×3³⁶ + ...
= 10,788,619,898,233,491,000
```

---

## ✅ Final Result

Using Lagrange interpolation with the first 7 points:

**Constant Term C = -6,290,016,743,746,474,000**

All 7 points perfectly satisfy the polynomial equation! ✨
