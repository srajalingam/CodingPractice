def remove_duplicates(nums):
    if len(nums) == 0:
        return []

    i = 0

    for j in range(1, len(nums)):
        if nums[j] != nums[i]:
            i += 1
            nums[i] = nums[j]

    return nums[:i + 1]


print(remove_duplicates([1, 1, 2, 2, 3, 4, 4, 5]))
