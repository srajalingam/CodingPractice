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


def remove_duplicate_unsorted(nums):
    unique_set = set(nums)
    return list(unique_set)

print(remove_duplicate_unsorted([4, 2, 1, 3, 2, 4, 5]))


def remove_duplicates_By_set(nums):
    seen = set()
    result = []
    for num in nums:  #  for num in range(len(nums)):
        if num not in seen:
            seen.add(num)
            result.append(num)
    return result
print(remove_duplicates_By_set([4, 2, 1, 3, 2, 4, 5]))