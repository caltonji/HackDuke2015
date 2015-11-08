(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/assets.js                                                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
raise_minimium_affects_json = {                                        // 1
    "Married parent": {                                                // 2
        "category": "Family status",                                   // 3
        "Directly_affected": "4,546,000",                              // 4
        "Share_of_this_category_that_is_affected": "16.10%",           // 5
        "Indirectly_affected": "1,311,000",                            // 6
        "Percentage_of_the_total_affected": "16.70%",                  // 7
        "Total_affected": "5,857,000",                                 // 8
        "Estimated_workforce": "36,334,000"                            // 9
    },                                                                 //
    "$40,000-$59,999": {                                               // 11
        "category": "Family annual income level",                      // 12
        "Directly_affected": "4,814,000",                              // 13
        "Share_of_this_category_that_is_affected": "25.20%",           // 14
        "Indirectly_affected": "1,244,000",                            // 15
        "Percentage_of_the_total_affected": "17.30%",                  // 16
        "Total_affected": "6,058,000",                                 // 17
        "Estimated_workforce": "24,076,000"                            // 18
    },                                                                 //
    "White, non-Hispanic": {                                           // 20
        "category": "Race or ethnicity",                               // 21
        "Directly_affected": "14,938,000",                             // 22
        "Share_of_this_category_that_is_affected": "21.00%",           // 23
        "Indirectly_affected": "3,689,000",                            // 24
        "Percentage_of_the_total_affected": "53.20%",                  // 25
        "Total_affected": "18,627,000",                                // 26
        "Estimated_workforce": "88,590,000"                            // 27
    },                                                                 //
    "Some college, no degree": {                                       // 29
        "category": "Education level",                                 // 30
        "Directly_affected": "7,172,000",                              // 31
        "Share_of_this_category_that_is_affected": "33.90%",           // 32
        "Indirectly_affected": "1,673,000",                            // 33
        "Percentage_of_the_total_affected": "25.20%",                  // 34
        "Total_affected": "8,845,000",                                 // 35
        "Estimated_workforce": "26,069,000"                            // 36
    },                                                                 //
    "Hispanic of any race": {                                          // 38
        "category": "Race or ethnicity",                               // 39
        "Directly_affected": "6,959,000",                              // 40
        "Share_of_this_category_that_is_affected": "37.80%",           // 41
        "Indirectly_affected": "1,568,000",                            // 42
        "Percentage_of_the_total_affected": "24.30%",                  // 43
        "Total_affected": "8,527,000",                                 // 44
        "Estimated_workforce": "22,534,000"                            // 45
    },                                                                 //
    "55+": {                                                           // 47
        "category": "Age",                                             // 48
        "Directly_affected": "4,096,000",                              // 49
        "Share_of_this_category_that_is_affected": "19.10%",           // 50
        "Indirectly_affected": "1,252,000",                            // 51
        "Percentage_of_the_total_affected": "15.30%",                  // 52
        "Total_affected": "5,348,000",                                 // 53
        "Estimated_workforce": "27,945,000"                            // 54
    },                                                                 //
    "Asian or other race/ethnicity": {                                 // 56
        "category": "Race or ethnicity",                               // 57
        "Directly_affected": "1,946,000",                              // 58
        "Share_of_this_category_that_is_affected": "23.20%",           // 59
        "Indirectly_affected": "540,000",                              // 60
        "Percentage_of_the_total_affected": "7.10%",                   // 61
        "Total_affected": "2,486,000",                                 // 62
        "Estimated_workforce": "10,700,000"                            // 63
    },                                                                 //
    "Associate degree": {                                              // 65
        "category": "Education level",                                 // 66
        "Directly_affected": "2,451,000",                              // 67
        "Share_of_this_category_that_is_affected": "21.60%",           // 68
        "Indirectly_affected": "701,000",                              // 69
        "Percentage_of_the_total_affected": "9.00%",                   // 70
        "Total_affected": "3,152,000",                                 // 71
        "Estimated_workforce": "14,622,000"                            // 72
    },                                                                 //
    "Working dads": {                                                  // 74
        "category": "Family status",                                   // 75
        "Directly_affected": "2,561,000",                              // 76
        "Share_of_this_category_that_is_affected": "14.20%",           // 77
        "Indirectly_affected": "798,000",                              // 78
        "Percentage_of_the_total_affected": "9.60%",                   // 79
        "Total_affected": "3,359,000",                                 // 80
        "Estimated_workforce": "23,660,000"                            // 81
    },                                                                 //
    "$150,000 or more": {                                              // 83
        "category": "Family annual income level",                      // 84
        "Directly_affected": "1,412,000",                              // 85
        "Share_of_this_category_that_is_affected": "11.30%",           // 86
        "Indirectly_affected": "352,000",                              // 87
        "Percentage_of_the_total_affected": "5.00%",                   // 88
        "Total_affected": "1,764,000",                                 // 89
        "Estimated_workforce": "15,636,000"                            // 90
    },                                                                 //
    "Unmarried, no kids": {                                            // 92
        "category": "Family status",                                   // 93
        "Directly_affected": "15,690,000",                             // 94
        "Share_of_this_category_that_is_affected": "35.40%",           // 95
        "Indirectly_affected": "3,086,000",                            // 96
        "Percentage_of_the_total_affected": "53.60%",                  // 97
        "Total_affected": "18,776,000",                                // 98
        "Estimated_workforce": "53,028,000"                            // 99
    },                                                                 //
    "Less than $20,000": {                                             // 101
        "category": "Family annual income level",                      // 102
        "Directly_affected": "6,420,000",                              // 103
        "Share_of_this_category_that_is_affected": "54.80%",           // 104
        "Indirectly_affected": "1,097,000",                            // 105
        "Percentage_of_the_total_affected": "21.50%",                  // 106
        "Total_affected": "7,517,000",                                 // 107
        "Estimated_workforce": "13,708,000"                            // 108
    },                                                                 //
    "Less than high school": {                                         // 110
        "category": "Education level",                                 // 111
        "Directly_affected": "5,956,000",                              // 112
        "Share_of_this_category_that_is_affected": "57.40%",           // 113
        "Indirectly_affected": "906,000",                              // 114
        "Percentage_of_the_total_affected": "19.60%",                  // 115
        "Total_affected": "6,862,000",                                 // 116
        "Estimated_workforce": "11,954,000"                            // 117
    },                                                                 //
    "$20,000-$39,999": {                                               // 119
        "category": "Family annual income level",                      // 120
        "Directly_affected": "7,953,000",                              // 121
        "Share_of_this_category_that_is_affected": "37.70%",           // 122
        "Indirectly_affected": "2,034,000",                            // 123
        "Percentage_of_the_total_affected": "28.50%",                  // 124
        "Total_affected": "9,987,000",                                 // 125
        "Estimated_workforce": "26,523,000"                            // 126
    },                                                                 //
    "Single dads": {                                                   // 128
        "category": "Family status",                                   // 129
        "Directly_affected": "632,000",                                // 130
        "Share_of_this_category_that_is_affected": "28.00%",           // 131
        "Indirectly_affected": "164,000",                              // 132
        "Percentage_of_the_total_affected": "2.30%",                   // 133
        "Total_affected": "796,000",                                   // 134
        "Estimated_workforce": "2,843,000"                             // 135
    },                                                                 //
    "Married, no kids": {                                              // 137
        "category": "Family status",                                   // 138
        "Directly_affected": "5,016,000",                              // 139
        "Share_of_this_category_that_is_affected": "17.50%",           // 140
        "Indirectly_affected": "1,542,000",                            // 141
        "Percentage_of_the_total_affected": "18.70%",                  // 142
        "Total_affected": "6,558,000",                                 // 143
        "Estimated_workforce": "37,457,000"                            // 144
    },                                                                 //
    "Male": {                                                          // 146
        "category": "Sex",                                             // 147
        "Directly_affected": "12,511,000",                             // 148
        "Share_of_this_category_that_is_affected": "21.70%",           // 149
        "Indirectly_affected": "2,957,000",                            // 150
        "Percentage_of_the_total_affected": "44.10%",                  // 151
        "Total_affected": "15,468,000",                                // 152
        "Estimated_workforce": "71,133,000"                            // 153
    },                                                                 //
    "$60,000-$74,999": {                                               // 155
        "category": "Family annual income level",                      // 156
        "Directly_affected": "2,702,000",                              // 157
        "Share_of_this_category_that_is_affected": "20.60%",           // 158
        "Indirectly_affected": "680,000",                              // 159
        "Percentage_of_the_total_affected": "9.70%",                   // 160
        "Total_affected": "3,382,000",                                 // 161
        "Estimated_workforce": "16,411,000"                            // 162
    },                                                                 //
    "25 to 39": {                                                      // 164
        "category": "Age",                                             // 165
        "Directly_affected": "8,213,000",                              // 166
        "Share_of_this_category_that_is_affected": "22.80%",           // 167
        "Indirectly_affected": "2,272,000",                            // 168
        "Percentage_of_the_total_affected": "29.90%",                  // 169
        "Total_affected": "10,485,000",                                // 170
        "Estimated_workforce": "46,012,000"                            // 171
    },                                                                 //
    "Black or African American": {                                     // 173
        "category": "Race or ethnicity",                               // 174
        "Directly_affected": "4,522,000",                              // 175
        "Share_of_this_category_that_is_affected": "34.70%",           // 176
        "Indirectly_affected": "879,000",                              // 177
        "Percentage_of_the_total_affected": "15.40%",                  // 178
        "Total_affected": "5,401,000",                                 // 179
        "Estimated_workforce": "15,543,000"                            // 180
    },                                                                 //
    "High school": {                                                   // 182
        "category": "Education level",                                 // 183
        "Directly_affected": "9,993,000",                              // 184
        "Share_of_this_category_that_is_affected": "33.30%",           // 185
        "Indirectly_affected": "2,366,000",                            // 186
        "Percentage_of_the_total_affected": "35.30%",                  // 187
        "Total_affected": "12,359,000",                                // 188
        "Estimated_workforce": "37,167,000"                            // 189
    },                                                                 //
    "Part time (< 19 hours per week)": {                               // 191
        "category": "Work hours",                                      // 192
        "Directly_affected": "3,921,000",                              // 193
        "Share_of_this_category_that_is_affected": "59.10%",           // 194
        "Indirectly_affected": "490,000",                              // 195
        "Percentage_of_the_total_affected": "12.60%",                  // 196
        "Total_affected": "4,411,000",                                 // 197
        "Estimated_workforce": "7,463,000"                             // 198
    },                                                                 //
    "Less than 25": {                                                  // 200
        "category": "Age",                                             // 201
        "Directly_affected": "10,201,000",                             // 202
        "Share_of_this_category_that_is_affected": "62.10%",           // 203
        "Indirectly_affected": "1,498,000",                            // 204
        "Percentage_of_the_total_affected": "33.40%",                  // 205
        "Total_affected": "11,699,000",                                // 206
        "Estimated_workforce": "18,827,000"                            // 207
    },                                                                 //
    "$75,000-$99,999": {                                               // 209
        "category": "Family annual income level",                      // 210
        "Directly_affected": "2,711,000",                              // 211
        "Share_of_this_category_that_is_affected": "17.10%",           // 212
        "Indirectly_affected": "688,000",                              // 213
        "Percentage_of_the_total_affected": "9.70%",                   // 214
        "Total_affected": "3,399,000",                                 // 215
        "Estimated_workforce": "19,852,000"                            // 216
    },                                                                 //
    "40 to 54": {                                                      // 218
        "category": "Age",                                             // 219
        "Directly_affected": "5,854,000",                              // 220
        "Share_of_this_category_that_is_affected": "16.80%",           // 221
        "Indirectly_affected": "1,654,000",                            // 222
        "Percentage_of_the_total_affected": "21.40%",                  // 223
        "Total_affected": "7,508,000",                                 // 224
        "Estimated_workforce": "44,583,000"                            // 225
    },                                                                 //
    "Total": {                                                         // 227
        "category": "",                                                // 228
        "Directly_affected": "28,365,000",                             // 229
        "Share_of_this_category_that_is_affected": "25.50%",           // 230
        "Indirectly_affected": "6,676,000",                            // 231
        "Percentage_of_the_total_affected": "100.00%",                 // 232
        "Total_affected": "35,041,000",                                // 233
        "Estimated_workforce": "137,367,000"                           // 234
    },                                                                 //
    "Full time (35+ hours per week)": {                                // 236
        "category": "Work hours",                                      // 237
        "Directly_affected": "15,325,000",                             // 238
        "Share_of_this_category_that_is_affected": "18.20%",           // 239
        "Indirectly_affected": "4,796,000",                            // 240
        "Percentage_of_the_total_affected": "57.40%",                  // 241
        "Total_affected": "20,121,000",                                // 242
        "Estimated_workforce": "110,469,000"                           // 243
    },                                                                 //
    "Under 20": {                                                      // 245
        "category": "Age",                                             // 246
        "Directly_affected": "3,481,000",                              // 247
        "Share_of_this_category_that_is_affected": "80.70%",           // 248
        "Indirectly_affected": "272,000",                              // 249
        "Percentage_of_the_total_affected": "10.70%",                  // 250
        "Total_affected": "3,753,000",                                 // 251
        "Estimated_workforce": "4,650,000"                             // 252
    },                                                                 //
    "Bachelor's degree or higher": {                                   // 254
        "category": "Education level",                                 // 255
        "Directly_affected": "2,792,000",                              // 256
        "Share_of_this_category_that_is_affected": "8.00%",            // 257
        "Indirectly_affected": "1,029,000",                            // 258
        "Percentage_of_the_total_affected": "10.90%",                  // 259
        "Total_affected": "3,821,000",                                 // 260
        "Estimated_workforce": "47,555,000"                            // 261
    },                                                                 //
    "20 or older": {                                                   // 263
        "category": "Age",                                             // 264
        "Directly_affected": "24,885,000",                             // 265
        "Share_of_this_category_that_is_affected": "23.60%",           // 266
        "Indirectly_affected": "6,404,000",                            // 267
        "Percentage_of_the_total_affected": "89.30%",                  // 268
        "Total_affected": "31,289,000",                                // 269
        "Estimated_workforce": "132,718,000"                           // 270
    },                                                                 //
    "Mid time (20-34 hours per week)": {                               // 272
        "category": "Work hours",                                      // 273
        "Directly_affected": "9,120,000",                              // 274
        "Share_of_this_category_that_is_affected": "54.10%",           // 275
        "Indirectly_affected": "1,390,000",                            // 276
        "Percentage_of_the_total_affected": "30.00%",                  // 277
        "Total_affected": "10,510,000",                                // 278
        "Estimated_workforce": "19,436,000"                            // 279
    },                                                                 //
    "$100,000-$149,999": {                                             // 281
        "category": "Family annual income level",                      // 282
        "Directly_affected": "2,353,000",                              // 283
        "Share_of_this_category_that_is_affected": "13.90%",           // 284
        "Indirectly_affected": "582,000",                              // 285
        "Percentage_of_the_total_affected": "8.40%",                   // 286
        "Total_affected": "2,935,000",                                 // 287
        "Estimated_workforce": "21,162,000"                            // 288
    },                                                                 //
    "Working moms": {                                                  // 290
        "category": "Family status",                                   // 291
        "Directly_affected": "5,098,000",                              // 292
        "Share_of_this_category_that_is_affected": "27.30%",           // 293
        "Indirectly_affected": "1,250,000",                            // 294
        "Percentage_of_the_total_affected": "18.10%",                  // 295
        "Total_affected": "6,348,000",                                 // 296
        "Estimated_workforce": "23,222,000"                            // 297
    },                                                                 //
    "Female": {                                                        // 299
        "category": "Sex",                                             // 300
        "Directly_affected": "15,855,000",                             // 301
        "Share_of_this_category_that_is_affected": "29.60%",           // 302
        "Indirectly_affected": "3,719,000",                            // 303
        "Percentage_of_the_total_affected": "55.90%",                  // 304
        "Total_affected": "19,574,000",                                // 305
        "Estimated_workforce": "66,234,000"                            // 306
    },                                                                 //
    "Single parent": {                                                 // 308
        "category": "Family status",                                   // 309
        "Directly_affected": "3,113,000",                              // 310
        "Share_of_this_category_that_is_affected": "36.50%",           // 311
        "Indirectly_affected": "737,000",                              // 312
        "Percentage_of_the_total_affected": "11.00%",                  // 313
        "Total_affected": "3,850,000",                                 // 314
        "Estimated_workforce": "10,548,000"                            // 315
    },                                                                 //
    "Single moms": {                                                   // 317
        "category": "Family status",                                   // 318
        "Directly_affected": "2,481,000",                              // 319
        "Share_of_this_category_that_is_affected": "39.60%",           // 320
        "Indirectly_affected": "573,000",                              // 321
        "Percentage_of_the_total_affected": "8.70%",                   // 322
        "Total_affected": "3,054,000",                                 // 323
        "Estimated_workforce": "7,705,000"                             // 324
    }                                                                  //
};                                                                     //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=assets.js.map
