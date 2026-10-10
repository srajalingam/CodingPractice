
def countNumbers(nums):
    """
    Count the occurrences of each number in the list.

    :param nums: List of integers
    :return: Dictionary with numbers as keys and their counts as values
    """
    count_dict = {}
    for num in nums:
        if num in count_dict:
            count_dict[num] += 1
        else:
            count_dict[num] = 1
    return count_dict

print(countNumbers([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]))
#Time complexity: O(n), where n is the length of the input list. We iterate through the list once to count occurrences.

def countNumbersUsingDict(nums):
    """
    Count the occurrences of each number in the list using a dictionary.

    :param nums: List of integers
    :return: Dictionary with numbers as keys and their counts as values
    """
    from collections import Counter
    return dict(Counter(nums))

print(countNumbersUsingDict([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]))
#Time complexity: O(n), where n is the length of the input list. We iterate through the list once to count occurrences.

def countNumbersUsingMap(nums):
    countMap = {}

    for num in nums:
        if num in countMap:
            countMap[num] = countMap[num] + 1
        else:
            countMap[num] = 1

    return countMap


print(countNumbersUsingMap([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]))
