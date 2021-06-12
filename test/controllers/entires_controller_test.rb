require "test_helper"

class EntiresControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get entires_index_url
    assert_response :success
  end

  test "should get new" do
    get entires_new_url
    assert_response :success
  end

  test "should get create" do
    get entires_create_url
    assert_response :success
  end

  test "should get show" do
    get entires_show_url
    assert_response :success
  end

  test "should get edit" do
    get entires_edit_url
    assert_response :success
  end

  test "should get update" do
    get entires_update_url
    assert_response :success
  end

  test "should get destroy" do
    get entires_destroy_url
    assert_response :success
  end
end
